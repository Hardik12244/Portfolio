"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "Prisma", "Socket.IO"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Docker", "GitHub", "Postman", "Cloudinary", "JWT"],
  },
];

export default function TechStack() {
  return (
    <section id="tech" className="py-24 px-4 max-w-5xl mx-auto relative overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-gray-900">
          Tech Stack
        </h2>
      </div>

      <div className="flex flex-col gap-12 relative z-10">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-700">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="px-5 py-2 glass rounded-full text-sm font-medium text-gray-800 hover:text-blue-600 hover:border-blue-200 transition-colors shadow-sm"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
