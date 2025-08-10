// src/App.jsx
import Navbar from "./components/Navbar";

import About from "./sections/About";
import Experience from "./sections/Experience";
import DarkModeToggle from "./components/DarkModeToggle";
import { useEffect } from "react";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Hero from "./Hero";

function App() {
  // optional: show user at top on route load or keep for accessibility
  useEffect(() => {
    // ensure smooth scroll behavior (some browsers)
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <header className="fixed top-4 right-4 z-50">
        {/* Small floating toggle if you want it globally visible.
            If you already added toggle in Navbar, you can remove this. */}
        <DarkModeToggle />
      </header>

      <Navbar />

      <main className="pt-20">
        
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      
        
        {/* Simple Footer */}
        <footer className="py-8 mt-12 bg-transparent">
          <div className="max-w-6xl mx-auto text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Muhammad Yahya Built with love using React & TailwindCSS
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
