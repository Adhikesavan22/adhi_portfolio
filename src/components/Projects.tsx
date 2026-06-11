"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { resumeData } from "@/data/resume";
import { ExternalLink, Code2, Layers } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="A selection of my recent work, ranging from full-stack applications to AI-powered solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-glass rounded-3xl overflow-hidden flex flex-col h-full"
            >
              {/* Project Image Placeholder / Gradient */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                <Layers size={48} className="text-white/20 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                {project.type && (
                   <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                    {project.type}
                  </span>
                )}
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-auto pt-6 flex items-center gap-4">
                  <button className="flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors">
                    <Code2 size={18} /> Code
                  </button>
                  <button className="flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors">
                    <ExternalLink size={18} /> Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
