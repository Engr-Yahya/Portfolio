import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaDiscord,
  FaDownload,
  FaArrowRight,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiFirebase } from "react-icons/si";
import cvFile from "./My-cv/My-Resume.pdf";

// -----------------------------------------------------------------------------
// Same token system as Navbar.jsx — bg #0A0F0D, accent #CDFB4E, text #F3F4EF /
// #8B9691. Display headline uses a serif face (Fraunces / Playfair Display);
// add it via Google Fonts in index.html, e.g.:
//   <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&display=swap" rel="stylesheet">
// then reference it below as font-['Fraunces'] (already wired in, swap the
// family name if you pick a different serif).
// -----------------------------------------------------------------------------

function Sparkle({ className, delay = 0, size = 18 }) {
  return (
    <motion.svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      initial={{ opacity: 0.15, scale: 0.7, rotate: 0 }}
      animate={{
        opacity: [0.15, 0.9, 0.15],
        scale: [0.7, 1.1, 0.7],
        rotate: [0, 15, 0],
      }}
      transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
    >
      <path
        d="M12 0L13.9 9.1L23 11L13.9 12.9L12 22L10.1 12.9L1 11L10.1 9.1L12 0Z"
        fill="#CDFB4E"
      />
    </motion.svg>
  );
}

const socialIcons = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/muhammad-yahya-se25",
    color: "#0077B5",
    label: "LinkedIn",
  },
  {
    icon: FaGithub,
    href: "https://github.com/Engr-Yahya",
    color: "#E9EDE9",
    label: "GitHub",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/yahya_butt.0",
    color: "#E4405F",
    label: "Instagram",
  },
  {
    icon: FaFacebook,
    href: "https://www.facebook.com/share/1A4ZuGougu/",
    color: "#1877F2",
    label: "Facebook",
  },
  {
    icon: FaDiscord,
    href: "https://discord.gg/yahyashafiq.",
    color: "#5865F2",
    label: "Discord",
  },
];

const techStack = [
  { icon: FaReact, label: "React" },
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiFirebase, label: "Firebase" },
  { icon: FaGitAlt, label: "Git" },
  { icon: FaGithub, label: "GitHub" },
];

// Duplicate the list so the marquee loop is seamless
const marqueeTechStack = [...techStack, ...techStack];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden bg-[#0A0F0D]"
    >
      {/* Marquee keyframes + hover-pause */}
      <style>{`
        @keyframes techMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .tech-marquee-track {
          animation: techMarquee 22s linear infinite;
        }
        .tech-marquee-wrap:hover .tech-marquee-track {
          animation-play-state: paused;
        }
      `}</style>

      {/* Ambient radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full bg-[#CDFB4E]/10 blur-[120px]" />
        <div className="absolute bottom-0 left-[15%] w-[380px] h-[380px] rounded-full bg-[#3B7A5A]/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      {/* Scattered sparkles */}
      <Sparkle className="absolute top-[18%] left-[10%]" delay={0} />
      <Sparkle
        className="absolute top-[28%] right-[12%]"
        delay={1.2}
        size={14}
      />
      <Sparkle
        className="absolute bottom-[22%] left-[16%]"
        delay={0.6}
        size={12}
      />
      <Sparkle
        className="absolute bottom-[30%] right-[8%]"
        delay={1.8}
        size={20}
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mb-5"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#CDFB4E]/30 to-transparent p-[2px]">
            <div className="w-full h-full rounded-full bg-[#10151280] backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <span className="font-['Fraunces',serif] text-2xl font-semibold text-[#F3F4EF]">
                MY
              </span>
            </div>
          </div>
        </motion.div>

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium tracking-wide text-[#B9C2BC]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#CDFB4E] opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#CDFB4E]" />
            </span>
            Open to freelance &amp; collabs
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className="font-['Fraunces',serif] text-4xl md:text-6xl font-semibold text-[#F3F4EF] leading-[1.1] mb-6"
        >
          Welcome to my
          <br />
          <span className="text-[#CDFB4E]">digital workshop</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
          className="text-base md:text-lg text-[#8B9691] leading-relaxed mb-10 max-w-xl"
        >
          I'm Muhammad Yahya, a Front-End Developer who turns ideas into fast,
          responsive interfaces with React and Tailwind CSS.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={3}
          className="flex gap-4 flex-wrap justify-center mb-10"
        >
          <motion.a
            href="#contact"
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.96, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#CDFB4E] text-[#0A0F0D] font-semibold text-sm shadow-[0_8px_24px_rgba(205,251,78,0.25)] hover:shadow-[0_12px_32px_rgba(205,251,78,0.4)] transition-shadow duration-300 ease-out"
          >
            Let's talk
            <FaArrowRight size={13} />
          </motion.a>

          <motion.a
            href={cvFile}
            download="Muhammad_Yahya_CV.pdf"
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.96, y: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 hover:border-[#CDFB4E]/40 text-[#F3F4EF] font-semibold text-sm bg-white/5 hover:bg-white/[0.08] backdrop-blur-sm transition-colors duration-300 ease-out"
          >
            <FaDownload size={13} />
            Download resume
          </motion.a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={4}
          className="flex gap-3 justify-center items-center mb-16"
        >
          {socialIcons.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              whileHover={{ y: -3, scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="group relative w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center transition-colors duration-200"
            >
              <social.icon
                size={16}
                className="relative z-10 text-[#8B9691] group-hover:text-[#0A0F0D] transition-colors duration-200"
              />
              <span
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ backgroundColor: social.color }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Tech stack marquee */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={5}
          className="w-full"
        >
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#5C655F] mb-5">
            Tech I work with
          </p>

          <div
            className="tech-marquee-wrap relative w-full overflow-hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
            }}
          >
            <div className="tech-marquee-track flex items-center gap-10 md:gap-14 w-max">
              {marqueeTechStack.map((tech, i) => (
                <div
                  key={`${tech.label}-${i}`}
                  title={tech.label}
                  className="flex items-center gap-2 text-[#8B9691] hover:text-[#F3F4EF] transition-colors duration-200 shrink-0"
                >
                  <tech.icon size={20} />
                  <span className="hidden md:inline text-sm font-medium whitespace-nowrap">
                    {tech.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
