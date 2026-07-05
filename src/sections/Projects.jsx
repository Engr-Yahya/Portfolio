import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaRocket, FaCode, FaStar, FaCheckCircle } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiFramer, SiVite } from "react-icons/si";
import projectImg from "../assets/novax-job-portal.png";
import ecommerce from "../assets/ecommerce.png";
import medhub from "../assets/medhub.png";

// -----------------------------------------------------------------------------
// Same token system as Navbar / Hero / About:
//   bg base #0A0F0D · glass rgba(255,255,255,.03) · border rgba(255,255,255,.1)
//   accent lime #CDFB4E · text primary #F3F4EF · text muted #8B9691
// Each project image sits inside a tinted "frame" (emerald / sky / amber) so
// the cards keep some of the reference's varied color panels without
// clashing with the single lime brand accent.
// -----------------------------------------------------------------------------

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      eyebrow: "JOB PORTAL · 2025",
      title: "NovaX Job Portal",
      desc: "A responsive job marketplace where employers register, post roles, and manage their company profile from a dashboard. Built for speed and a mobile-friendly feel from the ground up.",
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
      features: ["Employer dashboards", "Job posting flow", "Mobile-friendly UI", "Custom routing on GitHub Pages"],
    },
    {
      eyebrow: "THESIS PROJECT · 2025",
      title: "MedHub",
      desc: "A cross-platform mobile app that digitizes patient–doctor interactions. Patients book appointments and view prescription history; doctors manage availability and digital records.",
      img: medhub,
      frame: "from-[#0f2230] to-[#0d1310]",
      tech: [
        { name: "React", icon: SiReact, color: "#CDFB4E" },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "#7DD3FC" },
      ],
      live: "https://1drv.ms/f/c/9A4C5EC985827BCA/Et1wODbZyV9Et_sdW92Wh7EBEw3QYnyV7QaiBlf9fAJTLg?e=5s3LzD",
      github: "https://github.com/Engr-Yahya/MedHub-FYP",
      status: "completed",
      features: ["Appointment booking", "Prescription history", "Doctor referrals", "Role-based access"],
    },
    {
      eyebrow: "E-COMMERCE · ONGOING",
      title: "E-commerce Store",
      desc: "A modern storefront in active development — React and Vite underneath, TailwindCSS for styling, Framer Motion for the small moments, and dark mode built in from day one.",
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
      features: ["Dark mode support", "Smooth animations", "Responsive layout", "Contact form"],
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
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#CDFB4E]/5 blur-[130px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#CDFB4E] mb-3">
            Curated Work
          </p>
          <h2 className="font-['Fraunces',serif] text-4xl md:text-5xl font-semibold text-[#F3F4EF] mb-4">
            Featured Projects
          </h2>
          <p className="text-[#8B9691] max-w-xl mx-auto">
            A handful of builds that show how I think about interfaces, from job
            portals to healthcare apps.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-8">
          {projects.map((project, index) => {
            const status = statusConfig[project.status];
            const imageOnRight = index % 2 === 0;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                className="rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-colors duration-300 overflow-hidden"
              >
                <div
                  className={`grid md:grid-cols-2 gap-0 items-center ${
                    imageOnRight ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Text side */}
                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[11px] uppercase tracking-[0.2em] text-[#8B9691]">
                        {project.eyebrow}
                      </span>
                      <span
                        className="flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: `${status.color}1A`, color: status.color }}
                      >
                        <status.icon size={10} />
                        {status.text}
                      </span>
                    </div>

                    <h3 className="font-['Fraunces',serif] text-2xl md:text-3xl font-semibold text-[#F3F4EF] mb-3">
                      {project.title}
                    </h3>

                    <p className="text-[#8B9691] leading-relaxed mb-5">
                      {project.desc}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-[#B9C2BC]">
                          <FaCheckCircle className="text-[#CDFB4E] flex-shrink-0" size={13} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-7">
                      {project.tech.map((tech) => (
                        <span
                          key={tech.name}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-[#B9C2BC]"
                        >
                          <tech.icon style={{ color: tech.color }} size={12} />
                          {tech.name}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 flex-wrap">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#CDFB4E] text-[#0A0F0D] text-sm font-semibold hover:brightness-95 transition"
                      >
                        <FaExternalLinkAlt size={12} />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 text-[#F3F4EF] text-sm font-semibold bg-white/5 hover:border-[#CDFB4E]/40 transition-colors"
                      >
                        <FaGithub size={12} />
                        Code
                      </a>
                    </div>
                  </div>

                  {/* Image side */}
                  <div className={`bg-gradient-to-br ${project.frame} p-8 md:p-10 h-full flex items-center justify-center`}>
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl w-full">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center mt-16"
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