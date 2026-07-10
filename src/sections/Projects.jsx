import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaRocket,
  FaCode,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";
import {
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiVite,
  SiGithub,
  SiReactquery,
  SiChartdotjs,
} from "react-icons/si";
import projectImg from "../assets/novax-job-portal.png";
import ecommerce from "../assets/ecommerce.png";
import medhub from "../assets/medhub.png";
import GitHubFinder from "../assets/github-finder.png";
import TodoImg from "../assets/todo.png";
import ExpenseTracker from "../assets/expense-tracker.png";
export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      eyebrow: "GITHUB API · 2026",
      title: "GitHub Account Finder",
      desc: "A GitHub profile explorer that lets users search any username, view profile details, and browse the user's most popular repositories using the GitHub REST API.",
      img: GitHubFinder,
      frame: "from-[#1f1f1f] to-[#0d1310]",
      tech: [
        { name: "React", icon: SiReact, color: "#CDFB4E" },
        { name: "Vite", icon: SiVite, color: "#7DD3FC" },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "#CDFB4E" },
        { name: "GitHub API", icon: SiGithub, color: "#F5B94D" },
      ],
      live: "https://github-finder-three-ruddy.vercel.app/",
      github: "https://github.com/Engr-Yahya/Github-Finder",
      status: "completed",
      features: ["Search GitHub users", "Profile overview", "Top repositories"],
    },
    {
      eyebrow: "Todo App · 2026",
      title: "TaskFlow Todo App",
      desc: "A feature-rich task management application with authentication, protected routes, CRUD operations, and TanStack Query for efficient data fetching, caching, and seamless user experience.",
      img: TodoImg,
      frame: "from-[#142633] to-[#0d1310]",
      tech: [
        { name: "React", icon: SiReact, color: "#CDFB4E" },
        { name: "Vite", icon: SiVite, color: "#7DD3FC" },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "#CDFB4E" },
        { name: "TanStack Query", icon: SiReactquery, color: "#FF4154" },
      ],
      live: "https://todo-app-navy-five-58.vercel.app/",
      github: "https://github.com/Engr-Yahya/todoApp",
      status: "completed",
      features: [
        "Authentication",
        "Protected routes",
        "Full CRUD operations",
        "TanStack Query caching",
        "Confirmation modals",
        "Search & filtering",
      ],
    },
    {
      eyebrow: "FINANCE APP · 2026",
      title: "Expense Tracker",
      desc: "A personal finance tracker that helps users manage expenses, set monthly category budgets, and monitor spending progress with interactive charts and progress indicators.",
      img: ExpenseTracker,
      frame: "from-[#1d2816] to-[#0d1310]",
      tech: [
        { name: "React", icon: SiReact, color: "#CDFB4E" },
        { name: "Vite", icon: SiVite, color: "#7DD3FC" },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "#CDFB4E" },
        { name: "Chart.js", icon: SiChartdotjs, color: "#FF6384" },
      ],
      live: "https://expense-tracker-nine-ecru.vercel.app",
      github: "https://github.com/Engr-Yahya/Expense-Tracker",
      status: "completed",
      features: [
        "Expense categorization",
        "Monthly budgets",
        "Budget progress bars",
        "Percentage tracking",
        "Expense analytics",
        "Responsive dashboard",
      ],
    },
    {
      eyebrow: "JOB PORTAL · 2025",
      title: "NovaX Job Portal",
      desc: "A responsive job marketplace where employers register, post roles, and manage their company profile from a dashboard.",
      img: projectImg,
      frame: "from-[#13291f] to-[#0d1310]",
      tech: [
        { name: "React", icon: SiReact, color: "#CDFB4E" },
        { name: "Vite", icon: SiVite, color: "#7DD3FC" },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "#CDFB4E" },
        { name: "Framer Motion", icon: SiFramer, color: "#F5B94D" },
      ],
      live: "https://engr-yahya.github.io/novaX-Job-Portal/",
      github: "https://github.com/Engr-Yahya/novaX-Job-Portal",
      status: "development",
      features: [
        "Employer dashboards",
        "Job posting flow",
        "Mobile-friendly UI",
      ],
    },
    {
      eyebrow: "FYP PROJECT · 2025",
      title: "MedHub",
      desc: "A cross-platform mobile app that digitizes patient–doctor interactions, from booking to prescription history.",
      img: medhub,
      frame: "from-[#0f2230] to-[#0d1310]",
      tech: [
        { name: "React", icon: SiReact, color: "#CDFB4E" },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "#7DD3FC" },
      ],
      live: "https://1drv.ms/f/c/9A4C5EC985827BCA/Et1wODbZyV9Et_sdW92Wh7EBEw3QYnyV7QaiBlf9fAJTLg?e=5s3LzD",
      github: "https://github.com/Engr-Yahya/MedHub-FYP",
      status: "completed",
      features: [
        "Appointment booking",
        "Prescription history",
        "Role-based access",
      ],
    },
    {
      eyebrow: "E-COMMERCE · ONGOING",
      title: "E-commerce Store",
      desc: "A modern storefront in active development — React and Vite underneath, TailwindCSS for styling, dark mode from day one.",
      img: ecommerce,
      frame: "from-[#2a2313] to-[#0d1310]",
      tech: [
        { name: "React", icon: SiReact, color: "#CDFB4E" },
        { name: "Vite", icon: SiVite, color: "#7DD3FC" },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "#CDFB4E" },
        { name: "Framer Motion", icon: SiFramer, color: "#F5B94D" },
      ],
      live: "#",
      github: "https://github.com/Engr-Yahya/Ecommerce",
      status: "current",
      features: ["Dark mode support", "Smooth animations", "Responsive layout"],
    },
  ];
  const statusConfig = {
    completed: { color: "#CDFB4E", icon: FaStar, text: "Completed" },
    development: { color: "#F5B94D", icon: FaCode, text: "In Development" },
    current: { color: "#7DD3FC", icon: FaRocket, text: "Current" },
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-24 px-6 bg-[#0A0F0D] overflow-hidden"
    >
      {/* Slim, unobtrusive scrollbar for the horizontal row */}
      <style>{`
        .projects-scroll-row {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .projects-scroll-row::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#CDFB4E]/5 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 px-6"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#CDFB4E] mb-3">
            Curated Work
          </p>
          <h2 className="font-['Fraunces',serif] text-4xl md:text-5xl font-semibold text-[#F3F4EF] mb-4">
            Featured Projects
          </h2>
          <p className="text-[#8B9691] max-w-xl mx-auto">
            A handful of builds that show how I think about interfaces, from job
            portals to healthcare apps. Scroll sideways to browse.
          </p>
        </motion.div>

        {/* Project Row — manual horizontal scroll */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="projects-scroll-row flex gap-6 overflow-x-auto pb-6 px-6 -mx-6 snap-x snap-mandatory"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {projects.map((project) => {
            const status = statusConfig[project.status];

            return (
              <div
                key={project.title}
                className="snap-start w-[320px] sm:w-[380px] shrink-0 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-[#CDFB4E]/30 transition-colors duration-300 overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div
                  className={`bg-gradient-to-br ${project.frame} p-5 flex items-center justify-center`}
                >
                  <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl w-full aspect-[16/10]">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      draggable="false"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3 flex-wrap">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#8B9691]">
                      {project.eyebrow}
                    </span>
                    <span
                      className="flex items-center gap-1.5 text-[10px] font-medium px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: `${status.color}1A`,
                        color: status.color,
                      }}
                    >
                      <status.icon size={9} />
                      {status.text}
                    </span>
                  </div>

                  <h3 className="font-['Fraunces',serif] text-xl font-semibold text-[#F3F4EF] mb-2">
                    {project.title}
                  </h3>

                  <p className="text-[#8B9691] text-sm leading-relaxed mb-4">
                    {project.desc}
                  </p>

                  <ul className="space-y-1.5 mb-4">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-xs text-[#B9C2BC]"
                      >
                        <FaCheckCircle
                          className="text-[#CDFB4E] flex-shrink-0"
                          size={11}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech.name}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/5 border border-white/10 text-[#B9C2BC]"
                      >
                        <tech.icon style={{ color: tech.color }} size={11} />
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2.5 mt-auto">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#CDFB4E] text-[#0A0F0D] text-xs font-semibold hover:brightness-95 transition"
                    >
                      <FaExternalLinkAlt size={10} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/15 text-[#F3F4EF] text-xs font-semibold bg-white/5 hover:border-[#CDFB4E]/40 transition-colors"
                    >
                      <FaGithub size={10} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-16 px-6"
        >
          <p className="text-[#8B9691] mb-6">
            Want to see more of my work or talk through a project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#CDFB4E] text-[#0A0F0D] font-semibold text-sm hover:brightness-95 transition"
          >
            <FaRocket size={13} />
            Let's work together
          </a>
        </motion.div>
      </div>
    </section>
  );
}
