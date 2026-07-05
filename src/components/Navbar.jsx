import { useState, useEffect } from "react";
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
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNavClick = (e, href, name) => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => {
      const target = document.getElementById(href.substring(1));
      if (target) {
        const offset = Math.max(0, target.offsetTop - 90);
        window.scrollTo({ top: offset, behavior: "smooth" });
        setActiveSection(name.toLowerCase());
      }
    }, 100);
  };

  return (
    <>
      {/* Desktop floating pill */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
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

      {/* Mobile trigger */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
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