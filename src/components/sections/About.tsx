"use client";

import { motion } from "framer-motion";
import { Code2, Server, Cpu, Layers } from "lucide-react";

const stats = [
  { label: "10+ Projects", desc: "Built and deployed", icon: Layers },
  { label: "Realtime Systems", desc: "Socket.IO & WebSockets", icon: Server },
  { label: "Full-Stack", desc: "MERN & Next.js Ecosystem", icon: Code2 },
  { label: "AI Integrations", desc: "LLMs & Agentic flows", icon: Cpu },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Engineering the <span className="text-gradient-blue">Future</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          Passionate about scalable systems, realtime communication, beautiful frontend experiences, and AI-powered products.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group glass p-8 rounded-3xl hover:bg-white/80 transition-colors flex flex-col justify-between overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <stat.icon className="w-32 h-32" />
            </div>
            <stat.icon className="w-8 h-8 text-blue-600 mb-6" />
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.label}</h3>
              <p className="text-gray-500 font-medium">{stat.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
