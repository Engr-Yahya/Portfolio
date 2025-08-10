import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle scroll effect and active section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section based on scroll position
      const sections = links.map(link => link.href.substring(1));
      let currentSection = "home";
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // More precise detection with navbar offset
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = section;
          }
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  // Smooth scroll function - Mobile optimized
  const handleNavClick = (e, href, sectionName) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Close mobile menu immediately
    setOpen(false);
    
    // Small delay for mobile menu close animation
    setTimeout(() => {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const navbarHeight = 80;
        const elementPosition = targetElement.offsetTop;
        const offsetPosition = Math.max(0, elementPosition - navbarHeight);

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        // Update active section
        setActiveSection(sectionName.toLowerCase());
      }
    }, 100);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-xl border-b border-gray-200/20 dark:border-gray-700/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo with glow effect */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className={`text-2xl md:text-3xl font-bold cursor-pointer transition-all duration-300 ${
            scrolled
              ? "text-blue-600 dark:text-blue-400"
              : "text-gray-900 dark:text-white"
          }`}
          onClick={(e) => handleNavClick(e, "#home", "home")}
        >
          <span className="relative">
            Muhammad Yahya
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 blur-xl"
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
          </span>
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-2">
          {links.map((link) => (
            <li key={link.name}>
              <motion.a
                href={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 rounded-full transition-all duration-300 font-medium cursor-pointer ${
                  activeSection === link.name.toLowerCase()
                    ? "text-white bg-blue-600 shadow-lg"
                    : scrolled
                    ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    : "text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
                onClick={(e) => handleNavClick(e, link.href, link.name)}
              >
                <span className="relative z-10">{link.name}</span>
                
                {/* Glowing background on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0"
                  whileHover={{ 
                    opacity: 1,
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Active indicator */}
                {activeSection === link.name.toLowerCase() && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue-600 rounded-full shadow-lg"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`md:hidden cursor-pointer p-2 rounded-full transition-all duration-300 ${
            scrolled
              ? "text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700"
              : "text-gray-800 dark:text-gray-200 hover:bg-white/10 dark:hover:bg-black/10"
          }`}
          onClick={() => setOpen(!open)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={open ? "close" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {open ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay for mobile menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="relative z-50 md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200/20 dark:border-gray-700/20"
            >
              <ul className="flex flex-col items-center gap-1 py-4">
                {links.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="w-full flex justify-center"
                  >
                    <motion.button
                      type="button"
                      whileHover={{ 
                        scale: 1.05,
                        textShadow: "0 0 10px rgba(59, 130, 246, 0.8)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-6 py-3 rounded-full transition-all duration-300 font-medium w-40 ${
                        activeSection === link.name.toLowerCase()
                          ? "text-white bg-blue-600 shadow-lg"
                          : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      }`}
                      onClick={(e) => handleNavClick(e, link.href, link.name)}
                    >
                      <span className="relative z-10">{link.name}</span>
                      
                      {/* Mobile glowing effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full opacity-0"
                        whileHover={{ 
                          opacity: 1,
                          boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)"
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}