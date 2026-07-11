"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="
        h-10
        w-10
        rounded-full
        flex
        items-center
        justify-center
        text-[var(--foreground)]
        hover:bg-[var(--surface)]
        transition-all
      "
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </motion.button>
  );
}