import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGraduationCap, FaBriefcase, FaCode, FaHeart, FaAward, FaUsers, FaLightbulb, FaClock } from "react-icons/fa";

// -----------------------------------------------------------------------------
// Same token system as Navbar.jsx / Hero.jsx:
//   bg base #0A0F0D · glass rgba(255,255,255,.05) · border rgba(255,255,255,.1)
//   accent lime #CDFB4E · text primary #F3F4EF · text muted #8B9691
// Timeline/skill dots use a small palette of accent variants (lime, emerald,
// amber, sky) instead of the old blue/purple pairing, kept muted so nothing
// competes with the lime accent.
// -----------------------------------------------------------------------------

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("story");

  const techSkills = [
    { name: "HTML5", level: 95, color: "#CDFB4E" },
    { name: "CSS3", level: 90, color: "#7DD3FC" },
    { name: "JavaScript", level: 85, color: "#F5B94D" },
    { name: "React", level: 80, color: "#7DD3FC" },
    { name: "React Native", level: 75, color: "#34D399" },
    { name: "TailwindCSS", level: 88, color: "#CDFB4E" },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: FaLightbulb, description: "Creative solutions to complex challenges" },
    { name: "Team Collaboration", icon: FaUsers, description: "Effective teamwork and communication" },
    { name: "Time Management", icon: FaClock, description: "Efficient project delivery and planning" },
    { name: "Continuous Learning", icon: FaGraduationCap, description: "Always updating skills and knowledge" },
  ];

  const timeline = [
    {
      year: "2021",
      title: "Started University",
      description: "Began BS Software Engineering at Hazara University, Mansehra",
      icon: FaGraduationCap,
      color: "#7DD3FC",
    },
    {
      year: "2025",
      title: "Web Developer Internship",
      description: "Worked with React, Material UI, Tailwind CSS and Jira in Mansehra",
      icon: FaCode,
      color: "#F5B94D",
    },
    {
      year: "2025",
      title: "Graduated & Shipped MedHub",
      description: "Completed my degree with MedHub, a cross-platform patient-doctor app",
      icon: FaAward,
      color: "#CDFB4E",
    },
    {
      year: "2026",
      title: "Front-End Developer, Linknbit",
      description: "Working as a front-end developer at Linknbit, contributing to various client projects",
      icon: FaBriefcase,
      color: "#34D399",
    },
  ];

  const stats = [
    { number: "3+", label: "Years Learning", icon: "📚" },
    { number: "3+", label: "Projects Built", icon: "🚀" },
    { number: "8+", label: "Technologies", icon: "⚡" },
    { number: "100%", label: "Passion", icon: "❤️" },
  ];

  const tabs = [
    { id: "story", label: "My Story", icon: FaHeart },
    { id: "journey", label: "Journey", icon: FaGraduationCap },
    { id: "skills", label: "Skills", icon: FaCode },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 px-6 bg-[#0A0F0D] overflow-hidden"
    >
      {/* Ambient glow, consistent with Hero */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-[10%] w-[420px] h-[420px] rounded-full bg-[#CDFB4E]/5 blur-[110px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#CDFB4E] mb-3">
            About Me
          </p>
          <h2 className="font-['Fraunces',serif] text-4xl md:text-5xl font-semibold text-[#F3F4EF]">
            Know who I am
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.25 + index * 0.08 }}
              whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              whileTap={{ y: -2 }}
              className="rounded-2xl p-6 text-center bg-white/[0.03] border border-white/10 hover:border-[#CDFB4E]/35 backdrop-blur-sm transition-colors duration-300 ease-out"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-semibold text-[#CDFB4E] mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-[#8B9691]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-14"
        >
          <div className="flex bg-white/[0.03] border border-white/10 rounded-full p-1.5 backdrop-blur-sm">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-[#0A0F0D]" : "text-[#B9C2BC] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="aboutActiveTab"
                      className="absolute inset-0 rounded-full bg-[#CDFB4E]"
                      style={{ zIndex: 0 }}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <tab.icon size={15} className="relative z-10" />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-[420px]"
        >
          {/* Story */}
          {activeTab === "story" && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-5">
                <h3 className="font-['Fraunces',serif] text-2xl md:text-3xl font-semibold text-[#F3F4EF]">
                  Hello, I'm Muhammad Yahya 👋
                </h3>
                <div className="space-y-4 text-[#8B9691] leading-relaxed">
                  <p>
                    A detail-oriented{" "}
                    <strong className="text-[#F3F4EF]">Front-End Developer</strong> with a
                    love for building responsive, user-friendly interfaces. I hold a BS in
                    Software Engineering from Hazara University, Mansehra.
                  </p>
                  <p>
                    I currently build production React & React Native apps at LinkNBit, and
                    previously interned as a Web Developer working with Material UI, Tailwind
                    CSS, and Jira. My final year project, MedHub, digitized patient-doctor
                    interactions for healthcare clinics.
                  </p>
                  <p>
                    When I'm not shipping features, you'll find me exploring new frontend
                    tooling, polishing side projects, or sharpening my eye for clean, usable
                    UI.
                  </p>
                </div>

                <div className="flex gap-6 pt-2">
                  <div className="flex items-center gap-2 text-[#CDFB4E] text-sm font-medium">
                    <span>🎯</span> Goal-Oriented
                  </div>
                  <div className="flex items-center gap-2 text-[#CDFB4E] text-sm font-medium">
                    <span>🚀</span> Innovation-Driven
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative rounded-3xl p-8 bg-white/[0.03] border border-white/10 backdrop-blur-sm"
              >
                <div className="absolute top-5 right-5 text-5xl opacity-10">💻</div>
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-gradient-to-br from-[#CDFB4E]/30 to-transparent p-[2px]">
                    <div className="w-full h-full rounded-full bg-[#10151280] border border-white/10 flex items-center justify-center">
                      <span className="font-['Fraunces',serif] text-xl font-semibold text-[#F3F4EF]">
                        MY
                      </span>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-[#F3F4EF] mb-1">
                    Muhammad Yahya
                  </h4>
                  <p className="text-[#8B9691] mb-5 text-sm">Front-End Developer</p>
                  <div className="space-y-2 text-sm text-[#B9C2BC]">
                    <div className="flex items-center justify-center gap-2">
                      <span>📍</span> Islamabad, Pakistan
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span>🎓</span> BS Software Engineering
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Journey */}
          {activeTab === "journey" && (
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10" />

                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year + item.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className={`relative flex items-center mb-10 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div
                      className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-[#0A0F0D]"
                      style={{ backgroundColor: item.color }}
                    />

                    <div
                      className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                        index % 2 === 0 ? "md:pr-10" : "md:pl-10"
                      }`}
                    >
                      <div className="rounded-2xl p-6 bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${item.color}1A` }}
                          >
                            <item.icon style={{ color: item.color }} size={16} />
                          </div>
                          <span
                            className="text-xs font-medium px-3 py-1 rounded-full"
                            style={{ backgroundColor: `${item.color}1A`, color: item.color }}
                          >
                            {item.year}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-[#F3F4EF] mb-1.5">
                          {item.title}
                        </h4>
                        <p className="text-[#8B9691] text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {activeTab === "skills" && (
            <div className="space-y-14">
              <div>
                <h3 className="font-['Fraunces',serif] text-2xl md:text-3xl font-semibold text-[#F3F4EF] mb-8 text-center">
                  Technical Expertise
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {techSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 16 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.08 }}
                      className="rounded-2xl p-5 bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors duration-300"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-sm font-semibold text-[#F3F4EF]">
                          {skill.name}
                        </h4>
                        <span className="text-sm font-semibold" style={{ color: skill.color }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: index * 0.08 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-['Fraunces',serif] text-2xl md:text-3xl font-semibold text-[#F3F4EF] mb-8 text-center">
                  Soft Skills &amp; Strengths
                </h3>
                <div className="grid md:grid-cols-2 gap-5">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="rounded-2xl p-6 bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-[#CDFB4E]/10">
                          <skill.icon className="text-[#CDFB4E]" size={20} />
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-[#F3F4EF] mb-1.5">
                            {skill.name}
                          </h4>
                          <p className="text-[#8B9691] text-sm leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}