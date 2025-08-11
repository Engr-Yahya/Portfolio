import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGraduationCap, FaBriefcase, FaCode, FaHeart, FaAward, FaUsers, FaLightbulb, FaClock } from "react-icons/fa";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("story");

  const techSkills = [
    { name: "HTML5", level: 95, color: "#E34F26", icon: "🌐" },
    { name: "CSS3", level: 90, color: "#1572B6", icon: "🎨" },
    { name: "JavaScript", level: 85, color: "#F7DF1E", icon: "⚡" },
    { name: "React", level: 80, color: "#61DAFB", icon: "⚛️" },
    { name: "Next.js", level: 75, color: "#000000", icon: "🔥" },
    { name: "TailwindCSS", level: 88, color: "#06B6D4", icon: "💨" },
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
      description: "Began Bachelor's in Software Engineering at Hazara University",
      icon: FaGraduationCap,
      color: "#3B82F6"
    },
    {
      year: "2023",
      title: "Web Development Journey",
      description: "Started learning React and modern web technologies",
      icon: FaCode,
      color: "#10B981"
    },
    {
      year: "2025",
      title: "Professional Internship",
      description: "Working as Web Developer, gaining real-world experience",
      icon: FaBriefcase,
      color: "#8B5CF6"
    },
    {
      year: "2025",
      title: "Graduation & Beyond",
      description: "Completing degree and looking for exciting opportunities",
      icon: FaAward,
      color: "#F59E0B"
    }
  ];

  const stats = [
    { number: "2+", label: "Years Learning", icon: "📚" },
    { number: "10+", label: "Projects Built", icon: "🚀" },
    { number: "6+", label: "Technologies", icon: "⚡" },
    { number: "100%", label: "Passion", icon: "❤️" }
  ];

  const tabs = [
    { id: "story", label: "My Story", icon: FaHeart },
    { id: "journey", label: "Journey", icon: FaGraduationCap },
    { id: "skills", label: "Skills", icon: FaCode }
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 
               dark:from-gray-900 dark:to-blue-900/20 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Stats Section - Enhanced active effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ 
                scale: 1.1, 
                y: -8,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center
                       shadow-lg hover:shadow-2xl transition-all duration-300
                       border border-gray-200 dark:border-gray-700
                       hover:border-blue-300 dark:hover:border-blue-500
                       cursor-pointer group"
            >
              <motion.div 
                className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300"
                whileHover={{ rotate: [0, -10, 10, 0] }}
              >
                {stat.icon}
              </motion.div>
              <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 
                            group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-gray-800 
                            dark:group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tab Navigation - FIXED STYLING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mb-12"
        >
          <div className="flex bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-lg border border-gray-200 dark:border-gray-700">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ 
                  scale: activeTab === tab.id ? 1 : 1.05,
                  y: activeTab === tab.id ? 0 : -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
                className={`relative flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-white shadow-lg transform scale-105 -translate-y-1"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {/* Background for active tab - ALWAYS PRESENT */}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl
                             shadow-lg shadow-blue-500/25"
                    style={{ zIndex: -1 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                
                <motion.div
                  animate={activeTab === tab.id ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <tab.icon size={18} />
                </motion.div>
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-[400px]"
        >
          
          {/* My Story Tab */}
          {activeTab === "story" && (
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Hello, I'm Muhammad Yahya! 👋
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    A passionate <strong className="text-blue-600 dark:text-blue-400">Front-End Developer</strong> with 
                    a love for creating beautiful, functional, and user-friendly web experiences. 
                    Currently pursuing my Bachelor's in Software Engineering at Hazara University.
                  </p>
                  <p>
                    My journey in web development started with curiosity and has grown into a 
                    deep passion for crafting digital solutions that make a difference. I believe 
                    in writing clean, efficient code and staying updated with the latest technologies.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to 
                    open-source projects, or learning about UI/UX design principles to create 
                    better user experiences.
                  </p>
                </div>
                
                <motion.div
                  className="flex gap-4 pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <span>🎯</span>
                    <span className="font-medium">Goal-Oriented</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                    <span>🚀</span>
                    <span className="font-medium">Innovation-Driven</span>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 
                              dark:from-blue-900/30 dark:to-purple-900/30 rounded-3xl p-8
                              shadow-2xl backdrop-blur-sm">
                  <div className="absolute top-4 right-4 text-6xl opacity-10">💻</div>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 
                                  rounded-full mx-auto mb-4 flex items-center justify-center
                                  shadow-lg">
                      <span className="text-3xl text-white">MY</span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Muhammad Yahya
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">Front-End Developer</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center gap-2">
                        <span>📍</span>
                        <span className="text-gray-700 dark:text-gray-300">Nowshera, Pakistan</span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <span>🎓</span>
                        <span className="text-gray-700 dark:text-gray-300">BS Software Engineering</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* Journey Tab - Enhanced hover effects for active state */}
          {activeTab === "journey" && (
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
                My Development Journey
              </h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 
                              bg-gradient-to-b from-blue-600 to-purple-600"></div>
                
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`relative flex items-center mb-12 ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline Dot - Enhanced */}
                    <motion.div 
                      className="absolute left-8 md:left-1/2 transform -translate-x-1/2 
                                w-6 h-6 rounded-full border-4 border-white dark:border-gray-900
                                shadow-lg"
                      style={{ backgroundColor: item.color }}
                      whileHover={{ scale: 1.5, boxShadow: `0 0 20px ${item.color}` }}
                      animate={{ 
                        boxShadow: `0 0 0 0 ${item.color}40`,
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        boxShadow: { repeat: Infinity, duration: 2 },
                        scale: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                      }}
                    ></motion.div>
                    
                    {/* Content Card - Enhanced active effects */}
                    <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}>
                      <motion.div
                        whileHover={{ 
                          scale: 1.05, 
                          y: -10,
                          rotateX: 5,
                          transition: { duration: 0.3 }
                        }}
                        animate={{
                          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                        }}
                        className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg 
                                 border border-gray-200 dark:border-gray-700 
                                 hover:shadow-2xl hover:border-blue-300 dark:hover:border-blue-500
                                 transition-all duration-300 cursor-pointer group"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <motion.div 
                            className="w-12 h-12 rounded-full flex items-center justify-center
                                     group-hover:scale-110 transition-transform duration-300"
                            style={{ backgroundColor: `${item.color}20` }}
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <item.icon style={{ color: item.color }} size={20} />
                          </motion.div>
                          <div>
                            <motion.span 
                              className="text-sm font-medium px-3 py-1 rounded-full
                                       group-hover:scale-105 transition-transform duration-300"
                              style={{ backgroundColor: `${item.color}20`, color: item.color }}
                              whileHover={{ scale: 1.1 }}
                            >
                              {item.year}
                            </motion.span>
                          </div>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2
                                     group-hover:text-blue-600 dark:group-hover:text-blue-400 
                                     transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 
                                    dark:group-hover:text-gray-100 transition-colors duration-300">
                          {item.description}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Skills Tab - Enhanced active effects */}
          {activeTab === "skills" && (
            <div className="space-y-12">
              
              {/* Technical Skills */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  Technical Expertise
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {techSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.08, 
                        y: -8,
                        rotateY: 10,
                        transition: { duration: 0.3 }
                      }}
                      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg
                               hover:shadow-2xl transition-all duration-300
                               border border-gray-200 dark:border-gray-700
                               hover:border-blue-300 dark:hover:border-blue-500
                               cursor-pointer group"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <motion.span 
                            className="text-2xl group-hover:scale-125 transition-transform duration-300"
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                          >
                            {skill.icon}
                          </motion.span>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white
                                       group-hover:text-blue-600 dark:group-hover:text-blue-400
                                       transition-colors duration-300">
                            {skill.name}
                          </h4>
                        </div>
                        <motion.span 
                          className="text-xl font-bold text-blue-600 dark:text-blue-400
                                   group-hover:text-purple-600 dark:group-hover:text-purple-400
                                   transition-colors duration-300"
                          whileHover={{ scale: 1.2 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full relative"
                          style={{ 
                            background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)` 
                          }}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          whileHover={{
                            boxShadow: `0 0 10px ${skill.color}`,
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Soft Skills - Enhanced active effects */}
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                  Soft Skills & Strengths
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.05,
                        y: -5,
                        transition: { duration: 0.3 }
                      }}
                      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg
                               hover:shadow-2xl transition-all duration-300
                               border border-gray-200 dark:border-gray-700
                               hover:border-blue-300 dark:hover:border-blue-500
                               cursor-pointer group"
                    >
                      <div className="flex items-start gap-4">
                        <motion.div 
                          className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-full
                                   flex items-center justify-center flex-shrink-0
                                   group-hover:bg-blue-200 dark:group-hover:bg-blue-800
                                   transition-colors duration-300"
                          whileHover={{ 
                            scale: 1.2, 
                            rotate: 360,
                            transition: { duration: 0.5 }
                          }}
                        >
                          <skill.icon className="text-blue-600 dark:text-blue-400 
                                               group-hover:text-blue-700 dark:group-hover:text-blue-300
                                               transition-colors duration-300" size={24} />
                        </motion.div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2
                                       group-hover:text-blue-600 dark:group-hover:text-blue-400
                                       transition-colors duration-300">
                            {skill.name}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm
                                      group-hover:text-gray-800 dark:group-hover:text-gray-100
                                      transition-colors duration-300">
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