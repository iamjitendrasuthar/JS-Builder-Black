import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const links = ["About", "Services", "Projects", "Testimonials"];

  // Animation variants - ab sirf opacity change hogi, movement nahi
  const menuVariants = {
    closed: { opacity: 0 },
    open: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <nav className="fixed w-full z-50 top-0 bg-[#141414]/50 backdrop-blur-md border-b border-white/5">
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
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-3xl flex flex-col items-center"
          >
            {/* Overlay Header */}
            <div className="flex justify-between items-center w-full px-8 py-6">
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

            {/* Navigation Links - Center Aligned & Full Width */}
            <div className="flex flex-col w-full mt-12 space-y-2">
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
                  className="w-full py-5 text-center text-white text-4xl font-medium tracking-tight hover:text-white hover:bg-white/5 transition-all cursor-pointer"
                >
                  {link}
                </motion.button>
              ))}

              {/* Mobile CTA Button - Center Aligned */}
              <motion.div
                custom={links.length}
                variants={menuVariants}
                initial="closed"
                animate="open"
                className="pt-10 flex justify-center w-full px-8"
              >
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setCurrentPage("contact");
                  }}
                  className="w-full max-w-sm py-4 bg-white text-black text-xl font-bold rounded-full shadow-2xl hover:bg-neutral-200 transition-all cursor-pointer"
                >
                  Contact us
                </button>
              </motion.div>
            </div>

            {/* Background decorative blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
