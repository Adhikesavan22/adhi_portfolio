"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Link as LinkIcon, Mail } from "lucide-react";
import { resumeData } from "@/data/resume";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-2 rounded-full bg-glass text-primary text-sm font-medium mb-6 border-primary/20"
        >
          Available for Opportunities
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight break-words"
        >
          I&apos;m <span className="text-gradient">{resumeData.name}</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {resumeData.title}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#projects" 
            className="group px-8 py-4 bg-primary text-white rounded-full font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all hover:scale-105"
          >
            View My Work
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </a>
          <a 
            href="#contact"
            className="px-8 py-4 bg-glass text-white rounded-full font-semibold border border-white/10 hover:bg-white/10 transition-all hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex items-center justify-center gap-8 text-gray-500"
        >
          <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
            <LinkIcon size={20} /> LinkedIn
          </a>
          <a href={`mailto:${resumeData.contact.email}`} className="hover:text-primary transition-colors flex items-center gap-2">
            <Mail size={20} /> Email
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-2 bg-white/50 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};
