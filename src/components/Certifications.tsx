"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { resumeData } from "@/data/resume";
import { Award, CheckCircle2 } from "lucide-react";

export const Certifications = () => {
  return (
    <section id="certifications" className="section-padding bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Certifications" 
          subtitle="Professional certifications and credentials I've earned to validate my skills and expertise."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-glass p-8 rounded-3xl flex flex-col gap-4 group hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <Award size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1 leading-tight">{cert.name}</h4>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <span className="font-medium text-gray-400">{cert.issuer || ""}</span>
                  {cert.issuer && <span>•</span>}
                  <span>{cert.year}</span>
                </div>
                {cert.duration && (
                  <span className="inline-block px-2 py-1 bg-white/5 rounded text-xs text-gray-500">
                    Duration: {cert.duration}
                  </span>
                )}
              </div>
              <div className="mt-auto pt-4 flex items-center gap-2 text-accent text-sm font-medium">
                <CheckCircle2 size={16} />
                Verified Credential
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
