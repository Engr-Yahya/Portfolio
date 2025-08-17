import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaRocket, FaCode, FaStar, FaEye, } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiFramer, SiVite, } from "react-icons/si";
import projectImg from "../assets/novax-job-portal.png";
import ecommerce from "../assets/ecommerce.png";
import medhub from "../assets/medhub.png";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "NovaX Job Portal",
      desc: "A responsive and modern job marketplace built with cutting-edge technologies. Features include employer registration, job posting, profile management, and an intuitive user interface.",
      img: projectImg,
      tech: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Vite", icon: SiVite, color: "#646CFF" },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Framer Motion", icon: SiFramer, color: "#FF0055" }
      ],
      live: "https://engr-yahya.github.io/novaX-Job-Portal/",
      github: "https://github.com/Engr-Yahya/novaX-Job-Portal",
      status: "development",
      features: ["Responsive Design", "Job Management", "User Profiles", "Modern UI/UX"]
    },
    {
      title: "MedHub",
      desc: "Healthcare Management System - A comprehensive healthcare solution designed as thesis project. Features patient management, appointment scheduling, and medical record keeping.",
      img: medhub,
      tech: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" }
      ],
      live: "https://1drv.ms/f/c/9A4C5EC985827BCA/Et1wODbZyV9Et_sdW92Wh7EBEw3QYnyV7QaiBlf9fAJTLg?e=5s3LzD",
      github: "https://github.com/Engr-Yahya/MedHub-FYP",
      status: "completed",
      features: ["Patient Management", "Appointment System", "Medical Records", "Dashboard Analytics"]
    },
    {
      title: 'E-commerce Store',
      desc: "A modern e-commerce web application currently under development. Built with React (Vite) and styled using TailwindCSS, the project features Lucide icons, smooth animations with Framer Motion, and a fully responsive design. The goal is to deliver a seamless shopping experience with dark mode support and interactive UI components.",
      img: ecommerce,
      tech: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Vite", icon: SiVite, color: "#646CFF" },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Framer Motion", icon: SiFramer, color: "#FF0055" }
      ],
      live: "#",
      github: "https://github.com/Engr-Yahya/Ecommerce",
      status: "current",
      features: ["Responsive Design", "Dark Mode", "Smooth Animations", "Contact Form"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
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

  const getStatusConfig = (status) => {
    switch (status) {
      case "completed":
        return {
          color: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
          dot: "bg-green-500",
          icon: FaStar,
          text: "Completed"
        };
      case "development":
        return {
          color: "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300",
          dot: "bg-orange-500",
          icon: FaCode,
          text: "In Development"
        };
      case "current":
        return {
          color: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
          dot: "bg-blue-500",
          icon: FaRocket,
          text: "Current"
        };
      default:
        return {
          color: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300",
          dot: "bg-gray-500",
          icon: FaEye,
          text: "Coming Soon"
        };
    }
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 px-6 bg-gradient-to-br from-white to-blue-50/30 
               dark:from-gray-900 dark:to-blue-900/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcasing my latest work and creative solutions built with modern technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const statusConfig = getStatusConfig(project.status);

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl 
                         border border-gray-200 dark:border-gray-700 hover:shadow-2xl 
                         transition-all duration-300 flex flex-col"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${statusConfig.color}`}>
                      <statusConfig.icon size={12} />
                      {statusConfig.text}
                    </div>
                  </div>

                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-3">
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white rounded-full text-gray-900 hover:bg-blue-600 
                                 hover:text-white transition-colors duration-200"
                      >
                        <FaExternalLinkAlt size={16} />
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-800 
                                 hover:text-white transition-colors duration-200"
                      >
                        <FaGithub size={16} />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 
                               group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 flex-grow">
                    {project.desc}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-2 gap-1 text-xs text-gray-600 dark:text-gray-400">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-1">
                          <div className="w-1 h-1 bg-blue-500 rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-700 
                                   rounded-full text-xs font-medium hover:shadow-md transition-all duration-200
                                   text-gray-700 dark:text-gray-200"
                          style={{ borderLeft: `3px solid ${tech.color}` }}
                        >
                          <tech.icon style={{ color: tech.color }} size={14} />
                          <span>{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 
                               bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl 
                               hover:from-blue-700 hover:to-purple-700 transition-all duration-300 
                               text-sm font-medium shadow-lg hover:shadow-xl"
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </motion.a>

                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 
                               border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 
                               rounded-xl hover:border-gray-800 dark:hover:border-gray-400 
                               hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 
                               text-sm font-medium"
                    >
                      <FaGithub size={14} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 
                     text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 
                     font-medium shadow-lg hover:shadow-xl"
          >
            <FaRocket />
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}