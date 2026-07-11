"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#tech" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500",
        scrolled ? "py-2" : "py-6"
      )}
    >
      <nav
        className={cn(
          "flex items-center gap-6 px-6 py-3 rounded-full transition-all duration-500",
          scrolled
            ? "backdrop-blur-xl shadow-md border border-[var(--border)] bg-[color:var(--surface)]/70"
            : "bg-transparent shadow-none"
        )}
      >
        <span className="font-semibold text-sm tracking-tight mr-4 text-[var(--foreground)]">
          Hardik.
        </span>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-[var(--muted)]">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-[var(--foreground)] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <a
            href="#contact"
            className="
              text-xs
              font-semibold
              px-4
              py-2
              rounded-full
              bg-[var(--foreground)]
              text-[var(--background)]
              hover:scale-105
              transition-transform
            "
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>
    </motion.header>
  );
}