"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { resumeData } from "@/data/resume";
import { User, Target, Rocket } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading 
              title="About Me" 
              subtitle="Get to know more about my professional journey and what drives me as a developer."
            />
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {resumeData.summary}
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">My Mission</h4>
                  <p className="text-gray-500">To build scalable, efficient, and user-centric applications that solve real-world problems using cutting-edge technologies.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary shrink-0">
                  <Rocket size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Passion</h4>
                  <p className="text-gray-500">Deeply interested in Cloud/DevOps, AI/ML, and Networking, constantly exploring how these fields intersect.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative background for "image" area */}
            <div className="aspect-square rounded-3xl bg-glass relative overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse" />
               <User size={120} className="text-white/10 relative z-10" />
               
               {/* Stats Overlay */}
               <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-background/60 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10 text-center">
                    <div className="text-xl sm:text-2xl font-bold text-primary">4+</div>
                    <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">Years Tech Exp</div>
                  </div>
                  <div className="bg-background/60 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10 text-center">
                    <div className="text-xl sm:text-2xl font-bold text-secondary">3+</div>
                    <div className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">Projects Done</div>
                  </div>
               </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
