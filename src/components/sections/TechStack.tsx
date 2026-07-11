"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiGithub,
  SiPostman,
  SiSocketdotio,
  SiFramer,
  SiVercel,
  SiGit,
  SiVite,
  SiFirebase,
  SiJsonwebtokens,
  SiRender,
  SiFigma,
} from "react-icons/si";

const categories = [
  {
    title: "Frontend",
    techs: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
    ],
  },

  {
    title: "Backend",
    techs: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#444444" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#000000" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "JWT", icon: SiJsonwebtokens, color: "#D63AFF" },
    ],
  },

  {
    title: "Tools & DevOps",
    techs: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
      { name: "Render", icon: SiRender, color: "#46E3B7" },
      { name: "Figma", icon: SiFigma, color: "#A259FF" },
    ],
  },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="py-24 w-[90%] md:w-[80%] lg:w-[50%] mx-auto relative"
    >
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900"
        >
          Technologies & Tools
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-4 text-gray-500"
        >
          Technologies I use to build modern web applications.
        </motion.p>
      </div>


      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 text-8xl opacity-[0.03]"
        >
          ⚛️
        </motion.div>

        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -8, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-20 top-40 text-8xl opacity-[0.03]"
        >
          ▲
        </motion.div>

        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute bottom-20 left-1/3 text-8xl opacity-[0.03]"
        >
          ⬢
        </motion.div>
      </div>

      <div className="space-y-14">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: categoryIndex * 0.1,
            }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.techs.map((tech, i) => {
                const Icon = tech.icon;

                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      stiffness: 180,
                      damping: 14,
                      delay: categoryIndex * 0.15 + i * 0.05,

                    }}
                    whileHover={{
                      y: -6,
                      scale: 1.08,
                      rotateX: 8,
                      rotateY: 8,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                    className="
                      group
                      flex items-center gap-3
                      px-4 py-3
                      rounded-xl
                      border border-gray-200
                      bg-white/70
                      backdrop-blur-md
                      shadow-sm
                      hover:shadow-lg
                      transition-all
                    "
                  >
                    <Icon
                      size={20}
                      style={{ color: tech.color }}
                      className="transition-transform duration-300 group-hover:rotate-12"
                    />

                    <span className="font-medium text-gray-700">
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-20 overflow-hidden border-y border-gray-200 py-6">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-12 whitespace-nowrap text-gray-400 font-medium"
        >
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "MongoDB",
            "PostgreSQL",
            "Prisma",
            "Socket.IO",
            "Tailwind",
            "Docker",
            "GitHub",
            "Firebase",
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "MongoDB",
            "PostgreSQL",
            "Prisma",
            "Socket.IO",
            "Tailwind",
            "Docker",
            "GitHub",
            "Firebase",
          ].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}