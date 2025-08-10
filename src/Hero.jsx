import { motion, useAnimation } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaDiscord, FaDownload, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";
import cvFile from "./My-cv/draft-cv-1.pdf"; 

export default function Hero() {
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typing animation for the name
  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  };

  const socialIcons = [
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/muhammad-yahya-se25",
      color: "#0077B5",
      label: "LinkedIn"
    },
    {
      icon: FaGithub,
      href: "https://github.com/Engr-Yahya",
      color: "#333",
      label: "GitHub"
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/yahya_butt.0",
      color: "#E4405F",
      label: "Instagram"
    },
    {
      icon: FaFacebook,
      href: "https://www.facebook.com/share/1A4ZuGougu/",
      color: "#1877F2",
      label: "Facebook"
    },
    {
      icon: FaDiscord,
      href: "https://discord.gg/yahyashafiq.",
      color: "#5865F2",
      label: "Discord"
    }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden
      bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 
      dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20 transition-colors duration-300"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 100, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 
                         text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium
                         border border-blue-200 dark:border-blue-700">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/* Name with typing effect - Fixed line height */}
        <motion.div
          variants={nameVariants}
          initial="hidden"
          animate="visible"
          className="mb-6"
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white text-center leading-tight">
            {"Hi, I'm ".split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants} className="inline-block">
                {char}
              </motion.span>
            ))}
            <br />
            <motion.span 
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 
                         bg-clip-text text-transparent inline-block leading-tight"
              whileHover={{ 
                scale: 1.02,
                textShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
              }}
            >
              {"Muhammad Yahya".split("").map((char, index) => (
                <motion.span 
                  key={index} 
                  variants={letterVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    color: "#3B82F6",
                    transition: { duration: 0.2 }
                  }}
                  className="inline-block"
                  style={{ lineHeight: '1.1' }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
          </h1>
        </motion.div>

        {/* Professional Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          className="mb-6"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
            <span className="text-blue-600 dark:text-blue-400">Front-End Developer</span> & 
            <span className="text-purple-600 dark:text-purple-400"> UI/UX Enthusiast</span>
          </h2>
        </motion.div>

        {/* Description with typewriter effect */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="max-w-3xl text-lg md:text-xl text-gray-600 dark:text-gray-300 text-center mb-8 leading-relaxed"
        >
          A detail-oriented Front-End Developer passionate about creating 
          <motion.span
            className="text-blue-600 dark:text-blue-400 font-semibold"
            whileHover={{ scale: 1.02 }}
          >
            {" modern"}
          </motion.span>,
          <motion.span
            className="text-purple-600 dark:text-purple-400 font-semibold"
            whileHover={{ scale: 1.02 }}
          >
            {" user-friendly"}
          </motion.span>, and
          <motion.span
            className="text-indigo-600 dark:text-indigo-400 font-semibold"
            whileHover={{ scale: 1.02 }}
          >
            {" responsive"}
          </motion.span> web interfaces.
        </motion.p>

        {/* Enhanced Buttons - Fixed hover delays */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex gap-4 flex-wrap justify-center mb-10"
        >
          <motion.a
            href={cvFile} 
            download = "Muhammad_Yahya_CV.pdf"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)",
              y: -2,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 
                       text-white rounded-xl font-semibold overflow-hidden
                       shadow-lg hover:shadow-2xl transition-all duration-200"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FaDownload className="group-hover:animate-bounce" />
              Download Resume
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              style={{ zIndex: -1 }}
            />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05,
              borderColor: "#3B82F6",
              boxShadow: "0 5px 20px rgba(59, 130, 246, 0.3)",
              y: -2,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 
                       text-gray-700 dark:text-gray-300 rounded-xl font-semibold
                       hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400
                       transition-all duration-200 backdrop-blur-sm
                       bg-white/50 dark:bg-gray-800/50"
          >
            <span className="flex items-center gap-2">
              <FaEnvelope className="group-hover:animate-pulse" />
              Contact Me
            </span>
          </motion.a>
        </motion.div>

        {/* Enhanced Social Links - Fixed hover delays */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex gap-4 justify-center items-center mt-10 flex-wrap"
        >
          {socialIcons.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.2,
                y: -5,
                rotate: 5,
                boxShadow: `0 10px 25px ${social.color}40`,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.9 }}
              className="relative p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg 
                       border border-gray-200 dark:border-gray-700 group 
                       transition-all duration-200"
            >
              <social.icon
                size={24}
                className="text-gray-600 dark:text-gray-400 group-hover:text-white 
                         transition-colors duration-200"
              />
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 -z-10
                         transition-opacity duration-200"
                style={{ backgroundColor: social.color }}
                whileHover={{ 
                  opacity: 1,
                  transition: { duration: 0.2 }
                }}
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}