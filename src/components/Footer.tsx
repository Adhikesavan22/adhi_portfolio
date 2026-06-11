"use client";

import { motion } from "framer-motion";
import { Code2, Link as LinkIcon, Mail, ChevronUp } from "lucide-react";
import { resumeData } from "@/data/resume";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-20 pb-10 px-6 border-t border-white/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gradient mb-8"
        >
          {resumeData.name}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex gap-8 mb-12"
        >
          <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-glass rounded-full text-gray-400 hover:text-primary hover:scale-110 transition-all">
            <LinkIcon size={24} />
          </a>
          <a href={`mailto:${resumeData.contact.email}`} className="p-3 bg-glass rounded-full text-gray-400 hover:text-primary hover:scale-110 transition-all">
            <Mail size={24} />
          </a>
          <a href="#" className="p-3 bg-glass rounded-full text-gray-400 hover:text-primary hover:scale-110 transition-all">
            <Code2 size={24} />
          </a>
        </motion.div>

        <div className="w-full h-px bg-white/5 mb-10" />

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 hover:text-white transition-colors"
          >
            Back to top
            <div className="p-2 bg-glass rounded-full group-hover:bg-primary/20 transition-all">
              <ChevronUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
