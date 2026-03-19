"use client";
import React from "react";
import Link from "next/link"; // Next.js Link
import { motion } from "framer-motion";
import { Star, ShieldCheck, Zap, Award, Crown, Cpu } from "lucide-react";

const LOGOS = [
  { id: 1, icon: <ShieldCheck size={24} />, name: "SecureBuild" },
  { id: 2, icon: <Zap size={24} />, name: "FastFrame" },
  { id: 3, icon: <Award size={24} />, name: "EliteHome" },
  { id: 4, icon: <Crown size={24} />, name: "RoyalSpace" },
  { id: 5, icon: <Cpu size={24} />, name: "SmartTech" },
  { id: 6, icon: <Zap size={24} />, name: "VibeDecor" },
];

const HeroSection = () => {
  // Animation Variants for staggered effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9] },
    },
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* --- LEFT CONTENT (Staggered Animation) --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[15px] font-medium text-neutral-400 mb-8 uppercase tracking-widest"
            >
              #1 in Smart, Stylish Spaces
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-[72px] font-medium tracking-tight text-white leading-[1.05] mb-8"
            >
              Crafting spaces <br className="hidden lg:block" />
              that match your <br className="hidden lg:block" />
              <span className="text-neutral-500 italic font-serif">
                style
              </span>{" "}
              and needs
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-neutral-400 max-w-lg mb-10 leading-relaxed mx-auto lg:mx-0"
            >
              Building new or upgrading? We craft stylish, inspiring spaces that
              feel uniquely yours.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 sm:gap-4 mb-12 sm:mb-16 justify-center lg:justify-start"
            >
              {/* Primary Button */}
              <Link
                href="/contact"
                className="group/btn 
    px-5 py-2.5 text-base 
    sm:px-7 sm:py-3 sm:text-lg 
    rounded-full bg-white text-black font-semibold 
    border border-white transition-all duration-300 
    hover:bg-transparent hover:text-white hover:backdrop-blur-md 
    shadow-lg cursor-pointer flex items-center gap-1.5 sm:gap-2"
              >
                Get in touch
                <svg
                  className="transition-transform duration-300 ease-out group-hover/btn:translate-x-1.5"
                  width="16"
                  height="16"
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
              </Link>

              {/* Secondary Button */}
              <Link
                href="/services"
                className="
    px-5 py-2.5 text-base 
    sm:px-7 sm:py-3 sm:text-lg 
    rounded-full bg-white/5 text-white font-medium 
    border border-white/10 transition-all duration-300 
    hover:bg-white/20 hover:border-white/30 hover:backdrop-blur-md 
    shadow-lg cursor-pointer"
              >
                View services
              </Link>
            </motion.div>

            {/* Logo Slider */}
            <motion.div variants={itemVariants} className="w-full lg:max-w-md">
              <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
                <motion.div
                  className="flex gap-12 items-center"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ width: "fit-content" }}
                >
                  {[...LOGOS, ...LOGOS].map((logo, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity"
                    >
                      <div className="text-white">{logo.icon}</div>
                      <span className="text-lg font-bold text-white tracking-tight">
                        {logo.name}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* --- RIGHT IMAGE & BADGES (Cool Entrance) --- */}
          <div className="relative flex lg:justify-end justify-center items-center mt-12 lg:mt-0">
            {/* ✅ FIXED IMAGE CONTAINER (Height Increased by 10px to 630px) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              className="relative w-[92%] sm:w-[88%] lg:w-[85%] aspect-[4/5] lg:h-[630px] overflow-hidden rounded-t-[280px] rounded-b-[40px] border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)] group"
            >
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80"
                alt="Modern Architecture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </motion.div>

            {/* --- 3 BADGES --- */}

            {/* 1. Smart Planning (Top Left) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute top-[22%] sm:top-1/4 left-0 lg:left-10 z-20 bg-[#141414]/40 backdrop-blur-xl border border-white/10 pl-3 pr-5 py-2 rounded-full flex items-center gap-3 shadow-2xl scale-90 sm:scale-100"
            >
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 border border-white/10">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_white]" />
              </div>
              <span className="text-white text-[15px] sm:text-[17px] font-medium tracking-tight">
                Smart planning
              </span>
            </motion.div>

            {/* 2. Seamless Process (Center Right) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="absolute top-1/2 -translate-y-1/2 -right-4 lg:right-6 z-20 bg-[#141414]/40 backdrop-blur-xl border border-white/10 px-5 py-2.5 rounded-full flex items-center gap-3 shadow-2xl scale-90 sm:scale-100"
            >
              <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_6px_white]" />
              <span className="text-white text-[15px] sm:text-[17px] font-medium text-neutral-300">
                Seamless process
              </span>
            </motion.div>

            {/* 3. Client Satisfaction (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="absolute bottom-16 left-4 lg:left-0 z-20 bg-[#141414]/40 backdrop-blur-xl border border-white/10 px-5 py-2.5 rounded-full flex items-center gap-3 shadow-2xl scale-90 sm:scale-100"
            >
              <div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_6px_white]" />
              <span className="text-white text-[15px] sm:text-[17px] font-medium text-neutral-300">
                Client satisfaction
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9, duration: 0.8 }}
              className="absolute bottom-2.5 right-2.5 z-20 bg-[#141414]/40 backdrop-blur-md border border-white/10 py-4 px-4 rounded-[24px] sm:rounded-[30px] shadow-2xl w-fit flex flex-col items-center scale-90 sm:scale-100"
            >
              <div className="flex -space-x-3 mb-3 ml-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?img=${i + 20}`}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-neutral-800"
                    alt="user"
                  />
                ))}
              </div>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className="fill-white text-white opacity-90"
                  />
                ))}
              </div>
              <p className="text-white text-[12px] sm:text-[14px] font-medium opacity-90 text-center leading-tight">
                Rated 5 Stars by <br /> 2k+ happy clients
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
