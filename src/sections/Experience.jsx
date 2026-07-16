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
      title: "Front-End Developer",
      company: "LinkNBit",
      location: "Islamabad, Pakistan",
      from: "11/2022",
      to: "Current",
      status: "current",
      type: "Full-time",
      technologies: [
        { name: "React", icon: SiReact, color: "#7DD3FC" },
        { name: "React Native", icon: SiReact, color: "#34D399" },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "#CDFB4E" },
      ],
      achievements: [
        {
          text: "Built responsive, scalable web and mobile apps with React and React Native",
          icon: FaCode,
          highlight: "React and React Native",
        },
        {
          text: "Turned UI/UX designs into seamless, high-performance interfaces",
          icon: FaUsers,
          highlight: "high-performance interfaces",
        },
        {
          text: "Developed reusable components and optimized application performance",
          icon: FaBug,
          highlight: "optimized application performance",
        },
      ],
      color: "#CDFB4E",
    },
    {
      title: "Web Developer (Intern)",
      company: "Saqib Hanif",
      location: "Mansehra, Pakistan",
      from: "05/2025",
      to: "07/2025",
      status: "completed",
      type: "Internship",
      technologies: [
        { name: "React", icon: SiReact, color: "#7DD3FC" },
        { name: "Material UI", icon: SiMui, color: "#F5B94D" },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "#CDFB4E" },
        { name: "Jira", icon: SiJira, color: "#7DD3FC" },
      ],
      achievements: [
        {
          text: "Built UI with React, Material UI, and Tailwind CSS in a real team setting",
          icon: FaCode,
          highlight: "React, Material UI, and Tailwind CSS",
        },
        {
          text: "Learned effective coordination with colleagues and task tracking in Jira",
          icon: FaUsers,
          highlight: "task tracking in Jira",
        },
      ],
      color: "#7DD3FC",
    },
  ];

  const education = [
    {
      title: "BS in Software Engineering",
      school: "Hazara University Mansehra",
      location: "Mansehra, Pakistan",
      from: "10/2021",
      to: "07/2025",
      status: "completed",
      grade: "A",
      thesis: "MedHub — a role-based cross-platform app for patient–doctor interactions",
      highlights: [
        {
          text: "Graduated with a final grade of A",
          icon: FaTrophy,
          highlight: "grade of A",
        },
        {
          text: "Built MedHub as a comprehensive healthcare thesis project",
          icon: FaCode,
          highlight: "MedHub",
        },
        {
          text: "Focused on Information and Communication Technologies throughout",
          icon: FaGraduationCap,
          highlight: "Information and Communication Technologies",
        },
      ],
      subjects: ["Data Structures", "Web Development", "Database Systems", "Software Engineering", "UI/UX Design"],
      color: "#CDFB4E",
    },
  ];

  const tabs = [
    { id: "experience", label: "Experience", icon: FaBriefcase },
    { id: "education", label: "Education", icon: FaGraduationCap },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-24 px-6 bg-[#0A0F0D] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-[15%] w-[460px] h-[460px] rounded-full bg-[#CDFB4E]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#CDFB4E] mb-3">
            My Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#F3F4EF] mb-4">
            Experience &amp; Education
          </h2>
          <p className="text-[#8B9691] max-w-xl mx-auto">
            Where I've worked, what I've built, and how I got here.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex bg-white/[0.03] border border-white/10 rounded-full p-1.5 backdrop-blur-sm">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-[#0A0F0D]" : "text-[#B9C2BC] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="expActiveTab"
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

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {activeTab === "experience" &&
            experiences.map((exp) => (
              <div
                key={exp.title + exp.company}
                className="relative rounded-3xl p-8 bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors duration-300 overflow-hidden"
              >
                {exp.status === "current" && (
                  <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#CDFB4E]/10 text-[#CDFB4E]">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[#CDFB4E] opacity-60 animate-ping" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#CDFB4E]" />
                    </span>
                    Current
                  </div>
                )}

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-[#F3F4EF]">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-4 text-[#8B9691] text-sm flex-wrap">
                      <span className="flex items-center gap-1.5">
                        <FaBriefcase size={13} /> {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaMapMarkerAlt size={13} /> {exp.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="flex items-center gap-1.5 text-[#CDFB4E]">
                        <FaCalendarAlt size={12} /> {exp.from} — {exp.to}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs bg-white/5 text-[#B9C2BC] border border-white/10">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-[#F3F4EF] mb-3 uppercase tracking-wide">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech.name}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-[#B9C2BC]"
                        >
                          <tech.icon style={{ color: tech.color }} size={12} />
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-[#F3F4EF] mb-3 uppercase tracking-wide">
                      Key Achievements
                    </h4>
                    <div className="space-y-3">
                      {exp.achievements.map((achievement) => (
                        <div key={achievement.text} className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#CDFB4E]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <achievement.icon className="text-[#CDFB4E]" size={13} />
                          </div>
                          <p className="text-[#8B9691] leading-relaxed text-sm">
                            {achievement.text.split(achievement.highlight).map((part, i, arr) =>
                              i < arr.length - 1 ? (
                                <span key={i}>
                                  {part}
                                  <span className="font-semibold text-[#F3F4EF]">
                                    {achievement.highlight}
                                  </span>
                                </span>
                              ) : (
                                part
                              )
                            )}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {activeTab === "education" &&
            education.map((edu) => (
              <div
                key={edu.title}
                className="relative rounded-3xl p-8 bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors duration-300 overflow-hidden"
              >
                <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#CDFB4E]/10 text-[#CDFB4E]">
                  <FaTrophy size={11} />
                  Grade {edu.grade}
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-[#F3F4EF]">
                      {edu.title}
                    </h3>
                    <div className="flex items-center gap-4 text-[#8B9691] text-sm flex-wrap">
                      <span className="flex items-center gap-1.5">
                        <FaGraduationCap size={13} /> {edu.school}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaMapMarkerAlt size={13} /> {edu.location}
                      </span>
                    </div>
                    <span className="flex items-center gap-1.5 text-[#CDFB4E] text-sm">
                      <FaCalendarAlt size={12} /> {edu.from} — {edu.to}
                    </span>
                  </div>

                  <div className="rounded-xl p-4 bg-[#CDFB4E]/[0.06] border border-[#CDFB4E]/15">
                    <h4 className="text-sm font-semibold text-[#F3F4EF] mb-1.5 flex items-center gap-2">
                      <FaCode className="text-[#CDFB4E]" size={13} />
                      Thesis Project
                    </h4>
                    <p className="text-[#B9C2BC] text-sm">{edu.thesis}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-[#F3F4EF] mb-3 uppercase tracking-wide">
                      Key Subjects
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.subjects.map((subject) => (
                        <span
                          key={subject}
                          className="px-3 py-1.5 rounded-lg text-sm bg-white/5 border border-white/10 text-[#B9C2BC]"
                        >
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-[#F3F4EF] mb-3 uppercase tracking-wide">
                      Academic Highlights
                    </h4>
                    <div className="space-y-3">
                      {edu.highlights.map((highlight) => (
                        <div key={highlight.text} className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#CDFB4E]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <highlight.icon className="text-[#CDFB4E]" size={13} />
                          </div>
                          <p className="text-[#8B9691] leading-relaxed text-sm">
                            {highlight.text.split(highlight.highlight).map((part, i, arr) =>
                              i < arr.length - 1 ? (
                                <span key={i}>
                                  {part}
                                  <span className="font-semibold text-[#F3F4EF]">
                                    {highlight.highlight}
                                  </span>
                                </span>
                              ) : (
                                part
                              )
                            )}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}