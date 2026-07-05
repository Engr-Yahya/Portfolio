// src/App.jsx
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaDiscord } from "react-icons/fa";


const socialLinks = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/muhammad-yahya-se25", color: "#0077B5", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/Engr-Yahya", color: "#E9EDE9", label: "GitHub" },
  { icon: FaInstagram, href: "https://instagram.com/yahya_butt.0", color: "#E4405F", label: "Instagram" },
  { icon: FaFacebook, href: "https://www.facebook.com/share/1A4ZuGougu/", color: "#1877F2", label: "Facebook" },
  { icon: FaDiscord, href: "https://discord.gg/yahyashafiq.", color: "#5865F2", label: "Discord" },
];

function App() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  return (
    <div className="bg-[#0A0F0D] min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />

        {/* Footer */}
        <footer className="border-t border-white/10 py-8 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[#8B9691] text-center md:text-left">
              © {new Date().getFullYear()} Muhammad Yahya. Built with React &amp; Tailwind CSS.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="group relative w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center transition-colors duration-200"
                >
                  <social.icon
                    size={14}
                    className="relative z-10 text-[#8B9691] group-hover:text-[#0A0F0D] transition-colors duration-200"
                  />
                  <span
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ backgroundColor: social.color }}
                  />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;