"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="mb-12">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
      >
        <span className="text-gradient">{title}</span>
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mt-4 origin-left rounded-full"
      />
    </div>
  );
};
