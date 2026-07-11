"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Github } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Syntra — AI Social & Dating Platform",
    description:
      "A full-stack AI-enhanced social and dating platform focused on meaningful interactions, realtime communication, and expressive user experiences.",
    features: [
      "Realtime messaging",
      "Socket.IO architecture",
      "Crush/match system",
      "Social feed",
    ],
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Socket.IO",
      "Framer Motion",
    ],
    demo: "https://syntra-mu.vercel.app/",
    github: "https://github.com/Hardik12244/Syntra",
    gradient: "from-pink-500/10 to-rose-500/10",
    image: "/Syntra.png",
  },
  {
    title: "Obsidian RPG Learning Engine",
    description:
      "Hackathon-built AI-powered RPG learning platform combining adaptive education mechanics, realtime gameplay systems, and immersive frontend experiences.",
    features: [
      "RPG-inspired UI",
      "Realtime systems",
      "AI integrations",
      "Phaser.js mechanics",
    ],
    tech: [
      "React",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Phaser.js",
      "Gemini AI",
    ],
    demo: "https://obsidian-one-gamma.vercel.app/",
    github: "https://github.com/Hardik12244/FlameRoar",
    gradient: "from-violet-500/10 to-fuchsia-500/10",
    image: "/OBS.png",
  },
  {
    title: "Leaflet",
    description:
      "Modern full-stack blogging platform inspired by premium publishing applications with elegant editorial UI and secure authentication systems.",
    features: [
      "JWT Auth",
      "Cloudinary uploads",
      "Commenting system",
      "Editorial UI",
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Cloudinary"],
    demo: "https://leaflet-tech.vercel.app/",
    github: "https://github.com/Hardik12244/Leaflet",
    gradient: "from-emerald-500/10 to-teal-500/10",
    image: "/Leadlef.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[var(--foreground)]">
          Featured Projects
        </h2>

        <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
          A showcase of scalable realtime products and AI-enhanced applications.
        </p>
      </div>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={cn(
              "flex flex-col gap-8 md:gap-12 lg:items-center",
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            )}
          >
            <motion.div
              whileHover={{
                scale: 1.02,
                rotateX: 3,
                rotateY: 3,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className="w-full lg:w-1/2 aspect-[16/9] rounded-3xl glass overflow-hidden relative group border border-[var(--border)]"
            >
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <>
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-50",
                      project.gradient
                    )}
                  />

                  <div className="absolute inset-4 bg-[color:var(--surface)]/60 rounded-2xl border border-[var(--border)] backdrop-blur-sm flex items-center justify-center shadow-sm transition-transform duration-500 group-hover:scale-[1.03]">
                    <span className="text-[var(--muted)] font-medium tracking-widest uppercase text-sm">
                      Product Preview
                    </span>
                  </div>
                </>
              )}
            </motion.div>

            <div className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] leading-tight">
                {project.title}
              </h3>

              <p className="text-[var(--muted)] leading-relaxed text-lg">
                {project.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)]">
                  Key Features
                </h4>

                <ul className="grid grid-cols-2 gap-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-[var(--foreground)] font-medium"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-[var(--surface)] text-[var(--muted)] border border-[var(--border)] rounded-full text-xs font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-[var(--foreground)] text-[var(--background)] rounded-full text-sm font-medium hover:opacity-90 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 glass text-[var(--muted)] rounded-full text-sm font-medium hover:text-[var(--foreground)] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}