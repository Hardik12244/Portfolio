"use client";

import { motion } from "framer-motion";
import { Trophy, Code, Network } from "lucide-react";

const achievements = [
  {
    title: "1st Place — Internal DSA Hackathon",
    desc: "Demonstrated strong algorithmic problem solving and optimization skills under time pressure.",
    icon: Trophy,
  },
  {
    title: "Winner — Code Crucible Hackathon",
    desc: "Built an innovative technical solution winning top honors among participants.",
    icon: Code,
  },
  {
    title: "Built KisanSetu",
    desc: "Engineered an agriculture platform focusing on full-stack systems & realtime features.",
    icon: Network,
  },
];

export default function Achievements() {
  return (
    <section className="py-24 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
          Achievements
        </h2>
      </div>

      <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-50 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <item.icon className="w-4 h-4" />
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl hover:-translate-y-1 transition-transform">
              <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
