import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light Mode" : "Dark Mode"}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{ duration: 0.2 }}
      className="
        flex h-11 w-11 items-center justify-center
        rounded-full border
        border-[var(--border-color)]
        bg-[var(--surface)]
        text-[var(--foreground)]
        cursor-pointer
        hover:border-[var(--zen-gold)]
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-[var(--primary)]
        transition-colors duration-300
      "
    >
      <motion.span
        key={theme}
        initial={{ opacity: 0, rotate: -70, scale: 0.6 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.25 }}
      >
        {isDark ? <Sun size={21} /> : <Moon size={21} />}
      </motion.span>
    </motion.button>
  );
}
