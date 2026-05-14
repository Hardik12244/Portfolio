"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 flex items-center justify-center gap-3">
          <GraduationCap className="w-8 h-8 text-blue-600" /> Education
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass p-8 rounded-3xl space-y-8"
      >
        <div className="flex justify-between items-start flex-col sm:flex-row gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Guru Gobind Singh Indraprastha University (BPIT)</h3>
            <p className="text-gray-600 font-medium mt-1">B.Tech in Information Technology</p>
            <p className="text-sm text-gray-500 mt-1">Minor in Data Science</p>
          </div>
          <div className="px-4 py-1.5 bg-blue-50 text-blue-700 font-bold rounded-full text-sm">
            CGPA: 8.3
          </div>
        </div>

        <div className="w-full h-px bg-gray-200" />

        <div className="flex justify-between items-center flex-col sm:flex-row gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900">12th CBSE Board</h3>
          </div>
          <div className="px-4 py-1.5 bg-gray-100 text-gray-700 font-bold rounded-full text-sm">
            90%
          </div>
        </div>
      </motion.div>
    </section>
  );
}
