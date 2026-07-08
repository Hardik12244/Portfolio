"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { Github } from "@/components/ui/Icons";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import TechTimer from "./TechTimer";
export default function Hero() {


  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl pointer-events-none"
      />

      <div className="z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-gray-600 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for internships & collaborations
        </motion.div>


        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-8 md:gap-10"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -8, 0] }}
            transition={{
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="relative shrink-0"
          >
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl scale-125" />

            <Image
              src="/profile.jpg"
              alt="Hardik Garg"
              width={220}
              height={220}
              className="relative rounded-full object-cover border-4 border-white shadow-2xl"
            />
          </motion.div>

          <div className="flex flex-col items-center md:items-start">
            <motion.h1
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-gray-900 leading-none"
            >
              Hardik Garg
            </motion.h1>

            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Tech Enthusiast",
                2000,
                "Problem Solver",
                2000,
                "AI Explorer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              className="mt-3 pl-6 text-lg md:text-2xl font-medium text-gray-400 min-h-[36px]"
            />

              <TechTimer />


          </div>
        </motion.div>


        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg mt-10 md:text-xl text-gray-500 max-w-2xl leading-relaxed font-medium"
        >
          Full-Stack Developer crafting scalable realtime experiences, AI-integrated products, and modern web applications.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://github.com/Hardik12244"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 glass px-6 py-3 rounded-full font-medium text-gray-700 hover:text-black transition-all hover:scale-105 active:scale-95"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="#"
            className="flex items-center gap-2 glass px-6 py-3 rounded-full font-medium text-gray-700 hover:text-black transition-all hover:scale-105 active:scale-95"
          >
            <FileText className="w-4 h-4" />
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
