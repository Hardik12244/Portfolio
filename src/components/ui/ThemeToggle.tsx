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
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="
        fixed
        top-6
        right-6
        z-50
        h-12
        w-12
        rounded-full
        border
        border-gray-200
        bg-white/80
        backdrop-blur-md
        shadow-lg
        flex
        items-center
        justify-center
      "
    >
      {theme === "dark" ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </motion.button>
  );
}