import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaTrophy, FaCode, FaUsers, FaBug } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiMui, SiJira } from "react-icons/si";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("experience");

  const experiences = [
    {
      title: "Web Developer",
      company: "Saqib Hanif",
      location: "Mansehra, Pakistan",
      from: "01/05/2025",
      to: "Current",
      status: "current",
      type: "Internship",
      technologies: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Material UI", icon: SiMui, color: "#007FFF" },
        { name: "Jira", icon: SiJira, color: "#0052CC" }
      ],
      achievements: [
        {
          text: "Built responsive UI components using React and modern CSS frameworks",
          icon: FaCode,
          highlight: "responsive UI"
        },
        {
          text: "Enhanced team collaboration through Jira project management",
          icon: FaUsers,
          highlight: "team collaboration"
        },
        {
          text: "Implemented new features and resolved critical bugs in production",
          icon: FaBug,
          highlight: "bug resolution"
        }
      ],
      color: "#3B82F6"
    }
  ];

  const education = [
    {
      title: "BS in Software Engineering",
      school: "Hazara University Mansehra",
      location: "Mansehra, Pakistan",
      from: "08/10/2021",
      to: "05/07/2025",
      status: "completed",
      grade: "A",
      thesis: "MedHub - Healthcare Management System",
      highlights: [
        {
          text: "Maintained excellent academic performance with Grade A",
          icon: FaTrophy,
          highlight: "Grade A"
        },
        {
          text: "Developed comprehensive healthcare solution as thesis project",
          icon: FaCode,
          highlight: "MedHub"
        },
        {
          text: "Specialized in modern software development practices",
          icon: FaGraduationCap,
          highlight: "software development"
        }
      ],
      subjects: ["Data Structures", "Web Development", "Database Systems", "Software Engineering", "UI/UX Design"],
      color: "#10B981"
    }
  ];

  const tabs = [
    { id: "experience", label: "Experience", icon: FaBriefcase },
    { id: "education", label: "Education", icon: FaGraduationCap }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50/30 
               dark:from-gray-900 dark:to-blue-900/10 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional experience and educational background that shaped my career
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Tab Navigation */}
        
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
                initial={activeTab === tab.id ? { 
                  scale: 1.05, 
                  y: -2,
                } : {}}
                animate={activeTab === tab.id ? { 
                  scale: 1.05, 
                  y: -2,
                } : {}}
                className={`relative flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-white shadow-lg transform scale-105 -translate-y-1"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                <motion.div
                  animate={activeTab === tab.id ? { rotate: 360 } : { rotate: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <tab.icon size={18} />
                </motion.div>
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabBg"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl
                             shadow-lg shadow-blue-500/25"
                    style={{ zIndex: -1 }}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          
          {/* Experience Tab */}
          {activeTab === "experience" && (
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl 
                           border border-gray-200 dark:border-gray-700 hover:shadow-2xl 
                           transition-all duration-300 overflow-hidden"
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <FaBriefcase size={128} />
                  </div>

                  {/* Status Badge */}
                  {exp.status === "current" && (
                    <div className="absolute top-6 right-6">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 
                                 rounded-full text-xs font-medium flex items-center gap-1"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Current
                      </motion.div>
                    </div>
                  )}

                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                          <div className="flex items-center gap-1">
                            <FaBriefcase size={16} />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaMapMarkerAlt size={16} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                          <FaCalendarAlt size={14} />
                          <span className="text-sm font-medium">{exp.from} — {exp.to}</span>
                          <span className="ml-2 px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded-full text-xs">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.1 }}
                            whileHover={{ 
                              scale: 1.1, 
                              y: -2,
                              transition: { duration: 0.2, ease: "easeOut" }
                            }}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 
                                     rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200
                                     text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600
                                     cursor-pointer"
                            style={{ borderLeft: `4px solid ${tech.color}` }}
                          >
                            <tech.icon style={{ color: tech.color }} />
                            <span>{tech.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Key Achievements
                      </h4>
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: achIndex * 0.1 }}
                            className="flex items-start gap-3 p-3 rounded-xl 
                                     hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                          >
                            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full 
                                          flex items-center justify-center flex-shrink-0 mt-1">
                              <achievement.icon className="text-blue-600 dark:text-blue-400" size={14} />
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {achievement.text.split(achievement.highlight).map((part, i, arr) =>
                                i < arr.length - 1 ? (
                                  <span key={i}>
                                    {part}
                                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                                      {achievement.highlight}
                                    </span>
                                  </span>
                                ) : (
                                  part
                                )
                              )}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Education Tab */}
          {activeTab === "education" && (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl 
                           border border-gray-200 dark:border-gray-700 hover:shadow-2xl 
                           transition-all duration-300 overflow-hidden"
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <FaGraduationCap size={128} />
                  </div>

                  {/* Status Badge */}
                  {edu.status === "completed" && (
                    <div className="absolute top-6 right-6">
                      <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 
                                 rounded-full text-xs font-medium flex items-center gap-1"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        Completed
                      </motion.div>
                    </div>
                  )}

                  <div className="space-y-6">
                    {/* Header */}
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {edu.title}
                      </h3>
                      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-1">
                          <FaGraduationCap size={16} />
                          <span className="font-medium">{edu.school}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaMapMarkerAlt size={16} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                          <FaCalendarAlt size={14} />
                          <span className="text-sm font-medium">{edu.from} — {edu.to}</span>
                        </div>
                        <div className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 
                                      rounded-full text-sm font-medium flex items-center gap-1">
                          <FaTrophy size={12} />
                          Grade: {edu.grade}
                        </div>
                      </div>
                    </div>

                    {/* Thesis */}
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 
                                  dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-700">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                        <FaCode className="text-blue-600 dark:text-blue-400" />
                        Thesis Project
                      </h4>
                      <p className="text-blue-700 dark:text-blue-300 font-medium">
                        {edu.thesis}
                      </p>
                    </div>

                    {/* Key Subjects */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Subjects
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.subjects.map((subject, subIndex) => (
                          <motion.span
                            key={subIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: subIndex * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 
                                     rounded-lg text-sm font-medium hover:bg-green-100 dark:hover:bg-green-900 
                                     hover:text-green-700 dark:hover:text-green-300 transition-all duration-300"
                          >
                            {subject}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                        Academic Highlights
                      </h4>
                      <div className="space-y-3">
                        {edu.highlights.map((highlight, hlIndex) => (
                          <motion.div
                            key={hlIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: hlIndex * 0.1 }}
                            className="flex items-start gap-3 p-3 rounded-xl 
                                     hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                          >
                            <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full 
                                          flex items-center justify-center flex-shrink-0 mt-1">
                              <highlight.icon className="text-green-600 dark:text-green-400" size={14} />
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {highlight.text.split(highlight.highlight).map((part, i, arr) =>
                                i < arr.length - 1 ? (
                                  <span key={i}>
                                    {part}
                                    <span className="font-semibold text-green-600 dark:text-green-400">
                                      {highlight.highlight}
                                    </span>
                                  </span>
                                ) : (
                                  part
                                )
                              )}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}