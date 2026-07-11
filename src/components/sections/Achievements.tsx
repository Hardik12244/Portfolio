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
    desc: "Engineered an agriculture platform focusing on full-stack systems and realtime features.",
    icon: Network,
  },
];

export default function Achievements() {
  return (
    <section className="py-24 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
          Achievements
        </h2>

        <p className="mt-4 text-lg text-[var(--muted)]">
          Milestones and accomplishments throughout my journey.
        </p>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[2px] before:bg-[var(--border)]">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full border border-[var(--border)] bg-[var(--background)] text-blue-600 shadow-lg shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <item.icon className="w-5 h-5" />
            </div>

            <div
              className="
                w-[calc(100%-4.5rem)]
                md:w-[calc(50%-3rem)]
                glass
                p-7
                rounded-3xl
                border border-[var(--border)]
                hover:-translate-y-1
                hover:shadow-xl
                transition-all
              "
            >
              <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-3">
                {item.title}
              </h3>

              <p className="text-base md:text-lg text-[var(--muted)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}