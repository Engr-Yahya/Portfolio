import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// -----------------------------------------------------------------------------
// Design tokens (kept inline via arbitrary Tailwind values so this file is
// drop-in — move these to tailwind.config.js as `theme.extend.colors` if you
// want to reuse them across the rest of the site):
//   bg base      #0A0F0D
//   glass panel  #0D1310 @ 80% + backdrop-blur
//   accent lime  #CDFB4E
//   text primary #F3F4EF
//   text muted   #B9C2BC
// Display font used elsewhere on the page: a serif like "Fraunces" or
// "Playfair Display". This component only needs the body/UI face (Inter).
// -----------------------------------------------------------------------------

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [navbarVisible, setNavbarVisible] = useState(true);
  const prevScrollY = useRef(0);
  const navbarVisibleRef = useRef(true);

  // The scroll listener recalculates the "current" section on every scroll
  // tick. Without a lock, clicking a nav item and smooth-scrolling past
  // intermediate sections causes the highlight pill to flicker onto those
  // sections before landing on the clicked one — that's the "jerk". These
  // refs suppress scroll-driven updates while a click-triggered scroll is
  // still in flight, and release the lock once scrolling actually settles
  // (with a safety timeout in case no further scroll events fire).
  const isProgrammaticScroll = useRef(false);
  const scrollSettleTimer = useRef(null);
  const scrollLockTimeout = useRef(null);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Active-section detection on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY || window.pageYOffset;
      const isScrollingDown = currentY > prevScrollY.current;
      const shouldShowNavbar = isScrollingDown || currentY <= 10;

      if (shouldShowNavbar !== navbarVisibleRef.current) {
        navbarVisibleRef.current = shouldShowNavbar;
        setNavbarVisible(shouldShowNavbar);
      }

      prevScrollY.current = currentY;

      if (isProgrammaticScroll.current) {
        // Still mid-flight from a nav click — keep pushing the unlock
        // window forward until scroll events actually stop.
        clearTimeout(scrollSettleTimer.current);
        scrollSettleTimer.current = setTimeout(() => {
          isProgrammaticScroll.current = false;
        }, 150);
        return;
      }

      const sections = links.map((l) => l.href.substring(1));
      let current = "home";
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) current = section;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollSettleTimer.current);
      clearTimeout(scrollLockTimeout.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavClick = (e, href, name) => {
    e.preventDefault();
    setOpen(false);

    const sectionId = name.toLowerCase();

    // Lock the scroll-driven detector and reflect the click immediately —
    // the pill jumps straight to the clicked item instead of following
    // whatever section happens to scroll past on the way there.
    isProgrammaticScroll.current = true;
    setActiveSection(sectionId);

    clearTimeout(scrollSettleTimer.current);
    clearTimeout(scrollLockTimeout.current);
    // Safety net in case the target is already close enough that no further
    // scroll events fire — don't let the lock get stuck on.
    scrollLockTimeout.current = setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 1200);

    setTimeout(() => {
      const target = document.getElementById(href.substring(1));
      if (target) {
        const offset = Math.max(0, target.offsetTop - 90);
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      {/* Desktop floating pill */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={navbarVisible ? { y: 0, opacity: 1 } : { y: -60, opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:block"
      >
        <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-[#0D1310]/80 backdrop-blur-xl px-2 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.45)]">
          {links.map((link) => {
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <li key={link.name} className="relative">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.name)}
                  className={`relative z-10 block px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-colors duration-300 ${
                    isActive ? "text-[#0A0F0D]" : "text-[#B9C2BC] hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
                {isActive && (
                  <motion.div
                    layoutId="navActivePill"
                    className="absolute inset-0 rounded-full bg-[#CDFB4E]"
                    style={{ zIndex: 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </motion.nav>

      {/* Mobile header name */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={navbarVisible ? { y: 0, opacity: 1 } : { y: -60, opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed top-5 left-5 z-50 md:hidden"
      >
        <a href="#home" className="inline-flex items-center rounded-full border border-white/10 bg-[#0D1310]/80 px-3 py-2 text-sm font-semibold text-[#F3F4EF] backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.45)]">
          Muhammad Yahya
        </a>
      </motion.div>

      {/* Mobile trigger */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={navbarVisible ? { y: 0, opacity: 1 } : { y: -60, opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed top-5 right-5 z-50 md:hidden"
      >
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-[#0D1310]/80 backdrop-blur-xl text-[#F3F4EF] shadow-[0_8px_30px_rgba(0,0,0,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CDFB4E]"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={open ? "close" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {open ? <FaTimes size={16} /> : <FaBars size={16} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </motion.div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 right-5 z-50 md:hidden rounded-2xl border border-white/10 bg-[#0D1310]/95 backdrop-blur-xl p-2 shadow-[0_8px_30px_rgba(0,0,0,0.55)]"
            >
              <ul className="flex flex-col gap-1 min-w-[170px]">
                {links.map((link) => {
                  const isActive = activeSection === link.name.toLowerCase();
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href, link.name)}
                        className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200 ${
                          isActive
                            ? "bg-[#CDFB4E] text-[#0A0F0D]"
                            : "text-[#B9C2BC] hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}