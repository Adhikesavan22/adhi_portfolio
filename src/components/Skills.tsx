"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { resumeData } from "@/data/resume";
import { 
  Code2, 
  Globe, 
  Terminal, 
  Cloud, 
  BrainCircuit, 
  Network, 
  UserCircle 
} from "lucide-react";

const skillIcons: Record<string, any> = {
  programming: Code2,
  webDevelopment: Globe,
  linuxAdmin: Terminal,
  cloudDevOps: Cloud,
  aiML: BrainCircuit,
  networkingSecurity: Network,
  softSkills: UserCircle,
};

const skillLabels: Record<string, string> = {
  programming: "Programming",
  webDevelopment: "Web Development",
  linuxAdmin: "Linux & Administration",
  cloudDevOps: "Cloud & DevOps",
  aiML: "AI / ML",
  networkingSecurity: "Networking & Security",
  softSkills: "Soft Skills",
};

export const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Technical Expertise" 
          subtitle="A comprehensive overview of my technical skills across various domains of software development and infrastructure."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(resumeData.skills).map(([key, items], index) => {
            const Icon = skillIcons[key] || Code2;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-glass p-6 sm:p-8 rounded-3xl hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{skillLabels[key]}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
