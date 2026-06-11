"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { resumeData } from "@/data/resume";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

export const ExperienceEducation = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <SectionHeading title="Work Experience" />
            <div className="space-y-12">
              {resumeData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 border-l border-white/10"
                >
                  <div className="absolute top-0 -left-1.5 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                  <div className="flex items-center gap-2 text-primary font-medium mb-2">
                    <Briefcase size={16} />
                    <span>{exp.role}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-1">{exp.company}</h4>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div id="education">
            <SectionHeading title="Education" />
            <div className="space-y-12">
              {resumeData.education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 border-l border-white/10"
                >
                  <div className="absolute top-0 -left-1.5 w-3 h-3 bg-secondary rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
                  <div className="flex items-center gap-2 text-secondary font-medium mb-2">
                    <GraduationCap size={18} />
                    <span>{edu.degree}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-1">{edu.institution}</h4>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                  <p className="text-gray-400 font-medium">
                    {edu.score}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
