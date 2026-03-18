import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["About", "Services", "Projects", "Testimonials"];

  // Animation variants for the menu items
  const menuVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <>
      <nav className="fixed w-full z-50 top-0 bg-[#141414]/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div
              className="flex-shrink-0 cursor-pointer group"
              onClick={() => setCurrentPage("home")}
            >
              <span className="text-white text-2xl font-bold tracking-tight">
                JSBuilder*
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-10">
              {links.map((link) => (
                <button
                  key={link}
                  onClick={() => setCurrentPage("home")}
                  className="text-neutral-400 hover:text-white transition-colors text-[16px] font-medium cursor-pointer"
                >
                  {link}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <button className="px-6 py-2.5 rounded-full bg-white text-black font-semibold border border-transparent transition-all duration-300 hover:bg-neutral-200 text-sm cursor-pointer shadow-lg">
                Contact us
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(true)}
                className="text-white p-2 focus:outline-none cursor-pointer"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-2xl flex flex-col"
          >
            {/* Overlay Header */}
            <div className="flex justify-between items-center px-8 py-6">
              <span className="text-white text-2xl font-bold tracking-tight">
                JSBuilder*
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              >
                <X size={32} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col px-8 mt-12 space-y-8">
              {links.map((link, i) => (
                <motion.button
                  key={link}
                  custom={i}
                  variants={menuVariants}
                  initial="closed"
                  animate="open"
                  onClick={() => {
                    setIsOpen(false);
                    setCurrentPage("home");
                  }}
                  className="text-left text-white text-4xl font-medium tracking-tight hover:text-neutral-400 transition-colors cursor-pointer"
                >
                  {link}
                </motion.button>
              ))}

              {/* Mobile CTA Button */}
              <motion.div
                custom={links.length}
                variants={menuVariants}
                initial="closed"
                animate="open"
                className="pt-6"
              >
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setCurrentPage("contact");
                  }}
                  className="px-8 py-4 bg-white text-black text-xl font-bold rounded-full shadow-2xl hover:bg-neutral-200 transition-all cursor-pointer inline-block"
                >
                  Contact us
                </button>
              </motion.div>
            </div>

            {/* Decorative background blur element (optional, matches the circular blur in your image) */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
