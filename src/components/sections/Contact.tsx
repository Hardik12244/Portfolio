"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "@/components/ui/Icons";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 max-w-4xl mx-auto mb-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Currently available for new opportunities
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Let&apos;s build something <br className="hidden md:block" />
            <span className="text-gradient">extraordinary together.</span>
          </h2>
          
          <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">
            Whether it&apos;s a startup idea, a scalable backend system, or an AI-integrated application, I&apos;m always open to discussing new projects.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:hardikgarg@example.com"
              className="flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10 w-full sm:w-auto justify-center"
            >
              <Mail className="w-4 h-4" /> Say Hello
            </a>
            
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <a 
                href="https://github.com/Hardik12244"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full glass text-gray-600 hover:text-black hover:scale-110 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/hardik-garg-837665244/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full glass text-gray-600 hover:text-blue-600 hover:scale-110 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-16 flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Hardik Garg. All rights reserved.</p>
        <a href="#" className="flex items-center gap-1 hover:text-gray-900 transition-colors mt-4 md:mt-0">
          Back to top <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>
    </section>
  );
}
