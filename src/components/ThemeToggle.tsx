
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 md:p-3 rounded-full bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 backdrop-blur-md border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl hover:scale-110 md:top-6 md:right-6"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-4 h-4 md:w-5 md:h-5 text-yellow-500" />
      ) : (
        <Moon className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
      )}
    </button>
  );
};
