"use client";
import React from "react";
import { motion } from "framer-motion";

/**
 * ✅ CONSISTENT SCROLL ANIMATION
 */
const FadeIn = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.45, 0.32, 0.9],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-white/5 pt-24 pb-12 overflow-hidden bg-[#141414]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ✅ Animated Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Logo & About Section */}
          <FadeIn className="md:col-span-5">
            <span className="text-white text-3xl font-bold tracking-tighter mb-6 block">
              JSBuilder*
            </span>
            <p className="text-neutral-400 max-w-sm mb-10 text-lg leading-relaxed">
              Thoughtful design for everyday living, crafted with comfort and
              style in mind. We turn visions into reality.
            </p>
            <button className="group/btn px-8 py-3.5 rounded-full border border-white/10 text-white font-medium hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center gap-2 cursor-pointer">
              Get in touch
              <svg
                className="transition-transform duration-300 ease-out group-hover/btn:translate-x-1.5"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </FadeIn>

          {/* Quick Links */}
          <FadeIn delay={0.1} className="md:col-span-3 lg:ml-auto">
            <h4 className="text-white font-medium mb-8 text-lg uppercase tracking-widest text-sm">
              Navigation
            </h4>
            <ul className="space-y-4">
              {["About", "Services", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <button className="text-neutral-500 hover:text-white transition-colors duration-300 text-lg">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Social Links */}
          <FadeIn delay={0.2} className="md:col-span-3 lg:ml-auto">
            <h4 className="text-white font-medium mb-8 text-lg uppercase tracking-widest text-sm">
              Socials
            </h4>
            <ul className="space-y-4">
              {["X / Twitter", "LinkedIn", "Instagram", "Facebook"].map(
                (social) => (
                  <li key={social}>
                    <a
                      href="#"
                      className="text-neutral-500 hover:text-white transition-colors duration-300 text-lg"
                    >
                      {social}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </FadeIn>
        </div>

        {/* ✅ Animated Bottom Bar */}
        <FadeIn
          delay={0.3}
          className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium tracking-wide"
        >
          <div className="text-neutral-600 flex items-center gap-2">
            <span>Copyright © 2026</span>
            <span className="w-1 h-1 rounded-full bg-neutral-800" />
            <span>All Rights Reserved</span>
          </div>

          <div className="text-neutral-600">
            Designed & Developed by{" "}
            <span className="text-neutral-400 hover:text-white transition-colors cursor-default">
              Jitendra
            </span>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;
