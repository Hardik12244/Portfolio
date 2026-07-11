"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Image from "next/image";

const education = [
  {
    degree: "B.Tech in Information Technology",
    institute: "Bhagwan Parshuram Institute of Technology (GGSIPU)",
    score: "CGPA: 8.5",
    period: "2025 - 2029",
    logo: "/bpit.png",
  },
  {
    degree: "Class XII (CBSE)",
    institute: "Your School Name",
    score: "90%",
    period: "2024 - 2025",
    logo: "/school.jpg",
  },
];

export default function Education() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--foreground)] flex items-center justify-center gap-3">
            <GraduationCap className="w-10 h-10" />
            Education
          </h2>

          <p className="mt-4 text-[var(--muted)]">
            Academic foundation that supported my journey into software
            engineering.
          </p>
        </div>

        <div className="space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              whileHover={{
                y: -4,
              }}
              className="
                border border-[var(--border)]
                rounded-3xl
                p-6 md:p-8
                bg-[var(--background)]
                shadow-sm
                transition-all
              "
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full border border-[var(--border)] flex items-center justify-center overflow-hidden bg-white">
                    <Image
                      src={item.logo}
                      alt={item.institute}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[var(--foreground)]">
                      {item.degree}
                    </h3>

                    <p className="text-[var(--foreground)]/80 mt-1">
                      {item.institute}
                    </p>

                    <p className="mt-2 text-[var(--muted)] font-medium">
                      {item.score}
                    </p>
                  </div>
                </div>

                <div className="text-[var(--muted)] font-medium md:text-right">
                  {item.period}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}