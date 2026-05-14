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
    features: ["Realtime messaging", "Socket.IO architecture", "Crush/match system", "Social feed"],
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.IO", "Framer Motion"],
    demo: "#",
    github: "https://github.com/Hardik12244/Syntra",
    gradient: "from-pink-500/10 to-rose-500/10",
    image: "/Syntra.png", // Correct Next.js public path
  },
  {
    title: "Obsidian RPG Learning Engine",
    description:
      "Hackathon-built AI-powered RPG learning platform combining adaptive education mechanics, realtime gameplay systems, and immersive frontend experiences.",
    features: ["RPG-inspired UI", "Realtime systems", "AI integrations", "Phaser.js mechanics"],
    tech: ["React", "Express.js", "MongoDB", "Socket.IO", "Phaser.js", "Gemini AI"],
    demo: "#",
    github: "https://github.com/Hardik12244/FlameRoar",
    gradient: "from-violet-500/10 to-fuchsia-500/10",
    image: "/OBS.png", // Correct Next.js public path
  },
  {
    title: "Leaflet",
    description:
      "Modern full-stack blogging platform inspired by premium publishing applications with elegant editorial UI and secure authentication systems.",
    features: ["JWT Auth", "Cloudinary uploads", "Commenting system", "Editorial UI"],
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Cloudinary"],
    demo: "https://leaflet-tech.vercel.app/",
    github: "https://github.com/Hardik12244/Leaflet",
    gradient: "from-emerald-500/10 to-teal-500/10",
    image: "/Leadlef.png", // Correct Next.js public path
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">
          Featured Projects
        </h2>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
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
            {/* Project Mockup / Visual */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-full lg:w-1/2 aspect-[16/9] rounded-3xl glass overflow-hidden relative group"
            >
              {project.image ? (
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              ) : (
                <>
                  <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50", project.gradient)} />
                  <div className="absolute inset-4 bg-white/40 rounded-2xl border border-white/50 backdrop-blur-sm flex items-center justify-center shadow-sm transition-transform duration-500 group-hover:scale-[1.03]">
                    <span className="text-gray-400 font-medium tracking-widest uppercase text-sm">Product Preview</span>
                  </div>
                </>
              )}
            </motion.div>

            {/* Project Details */}
            <div className="w-full lg:w-1/2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                {project.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed text-lg">
                {project.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Key Features</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {project.features.map(feature => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4">
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 glass text-gray-700 rounded-full text-sm font-medium hover:text-black transition-colors">
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
