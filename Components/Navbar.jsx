"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 bg-[#141414]/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-white text-2xl font-medium tracking-tight">
              JSBuilder*
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-neutral-400 hover:text-white transition-colors text-[18px]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full bg-white text-black border border-transparent transition-all duration-300 hover:bg-white/20 hover:text-white hover:border-white/30 text-[16px] shadow-lg font-medium"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile Menu Button */}
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

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-transparent"
          >
            <div className="px-4 pt-4 pb-10 flex flex-col items-center space-y-2">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-4 text-[18px] font-medium text-neutral-200 hover:text-white transition-all active:bg-white/5 rounded-xl"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full max-w-[320px] mt-6 px-6 py-4 text-center text-base font-medium bg-white text-black rounded-full shadow-2xl active:scale-95 transition-transform"
              >
                Contact us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
