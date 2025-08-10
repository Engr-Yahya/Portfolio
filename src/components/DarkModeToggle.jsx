// src/components/DarkModeToggle.jsx
import { useEffect, useState } from "react";

 function DarkModeToggle() {
  const [dark, setDark] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label="Toggle dark mode"
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm hover:scale-105 transition-transform"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}

export default DarkModeToggle;