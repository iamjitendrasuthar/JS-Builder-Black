"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["About", "Services", "Projects", "Testimonials"];

  return (
    <nav className="fixed w-full z-50 top-0 bg-[#0a0a0a]/50 backdrop-blur-md">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-22">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer group"
          >
            <span className="text-white text-2xl font-bold tracking-tight">
              JSBuilder*
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <button
                key={link}
                // 'cursor-pointer' added for clarity, though buttons have it by default
                className="text-neutral-300 hover:text-white transition-colors text-[17px] font-medium cursor-pointer"
              >
                {link}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <button className="px-5 py-2.5 rounded-full bg-white text-black font-medium border border-transparent transition-all duration-300 hover:bg-white/20 hover:text-white hover:border-white/30 hover:backdrop-blur-md text-lg cursor-pointer">
              Contact us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-300 hover:text-white cursor-pointer"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#111] border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-4 pb-8 flex flex-col items-center space-y-2">
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="w-full text-center py-4 text-white text-sm text-[17px] font-medium text-neutral-300 hover:text-white hover:bg-white/5 rounded-xl transition-all cursor-pointer"
                >
                  {link}
                </button>
              ))}

              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                className="w-full max-w-[280px] mt-6 px-6 py-4 text-center text-base font-semibold bg-white text-black rounded-full cursor-pointer hover:bg-neutral-200 transition-colors"
              >
                Contact us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
