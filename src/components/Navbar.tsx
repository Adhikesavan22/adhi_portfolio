"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Link as LinkIcon, Mail } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-white/10 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gradient">
          AV
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-4 border-l border-white/10 pl-4">
            <a href="https://linkedin.com/in/adhikesavan-v-1aa8742a5/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
              <LinkIcon size={20} />
            </a>
            <a href="mailto:adhipvt22@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-semibold text-gray-300 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-6 pt-4 border-t border-white/10">
                <a href="https://linkedin.com/in/adhikesavan-v-1aa8742a5/" target="_blank" rel="noopener noreferrer" className="text-gray-400">
                  <LinkIcon size={24} />
                </a>
                <a href="mailto:adhipvt22@gmail.com" className="text-gray-400">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
