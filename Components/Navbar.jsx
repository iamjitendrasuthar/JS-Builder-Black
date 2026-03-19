"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["About", "Services", "Projects", "Testimonials"];

  return (
    // Is container par glass effect hai jo pure menu par apply hoga
    <nav className="fixed w-full z-50 top-0 bg-[#0a0a0a]/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-18">
          {/* Logo */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => {
              setCurrentPage("home");
              setIsOpen(false);
            }}
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
                className="text-neutral-300 hover:text-white transition-colors text-[17px] font-medium"
              >
                {link}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <button className="px-5 py-2 rounded-full bg-white text-black font-medium border border-transparent transition-all duration-300 hover:bg-white/20 hover:text-white hover:border-white/30 text-[16px] shadow-lg">
              Contact us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ MOBILE MENU FIXED: No extra background, using parent's glass effect */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            // 'bg-transparent' use kiya hai taaki logo wala bg hi niche tak dikhe
            className="md:hidden overflow-hidden bg-transparent"
          >
            <div className="px-4 pt-4 pb-10 flex flex-col items-center space-y-2">
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className="w-full text-center py-4 text-[18px] font-medium text-neutral-200 hover:text-white transition-all active:bg-white/5 rounded-xl"
                >
                  {link}
                </button>
              ))}

              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                className="w-full max-w-[320px] mt-6 px-6 py-4 text-center text-base font-bold bg-white text-black rounded-full shadow-2xl active:scale-95 transition-transform"
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
