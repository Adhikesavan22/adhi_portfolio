"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { resumeData } from "@/data/resume";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading 
          title="Contact Us" 
          subtitle="Have a project in mind or just want to say hi? Feel free to reach out!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0">
                <Mail size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Email</h4>
                <a href={`mailto:${resumeData.contact.email}`} className="text-gray-400 hover:text-primary transition-colors">
                  {resumeData.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary shrink-0">
                <Phone size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Phone</h4>
                <a href={`tel:${resumeData.contact.phone}`} className="text-gray-400 hover:text-secondary transition-colors">
                  {resumeData.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent shrink-0">
                <MapPin size={28} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1">Location</h4>
                <p className="text-gray-400">{resumeData.contact.location}</p>
              </div>
            </div>

            <div className="p-8 bg-glass rounded-3xl border-primary/20 border">
               <div className="flex items-center gap-3 text-primary font-bold mb-4">
                  <MessageSquare size={20} />
                  <span>Let&apos;s talk!</span>
               </div>
               <p className="text-gray-400">
                  I&apos;m currently available for freelance work and full-time opportunities. I usually respond within 24 hours.
               </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-glass p-8 md:p-10 rounded-[2rem] border border-white/10 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  isSent ? "bg-accent text-white" : "bg-primary text-white hover:bg-primary/90 hover:scale-[1.02]"
                }`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSent ? (
                  <>Message Sent!</>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
