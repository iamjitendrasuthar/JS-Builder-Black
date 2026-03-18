import FadeIn from "@/utils/common";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ShieldCheck, Zap, Award, Crown, Cpu } from "lucide-react";

// In logos ko aap bad mein apni image files se replace kar sakte hain
const LOGOS = [
  { id: 1, icon: <ShieldCheck size={24} />, name: "SecureBuild" },
  { id: 2, icon: <Zap size={24} />, name: "FastFrame" },
  { id: 3, icon: <Award size={24} />, name: "EliteHome" },
  { id: 4, icon: <Crown size={24} />, name: "RoyalSpace" },
  { id: 5, icon: <Cpu size={24} />, name: "SmartTech" },
  { id: 6, icon: <Zap size={24} />, name: "VibeDecor" },
];
const HeroSection = () => {
  return (
    <section className="pt-40 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <FadeIn
            className="relative z-10 flex flex-col items-center lg:items-start 
text-center lg:text-left order-0 lg:self-start lg:mt-[15px]"
          >
            {" "}
            <div className="inline-block px-5 py-2 rounded-full bg-[#222222] text-sm text-[17px] font-medium text-neutral-300 mb-8">
              #1 in Smart, Stylish Spaces
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-medium tracking-tight text-white leading-[1.1] mb-6">
              Crafting spaces <br className="hidden lg:block" /> that match your{" "}
              <br className="hidden lg:block" /> style and needs
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 max-w-lg mb-10 leading-relaxed">
              Building new or upgrading? We craft stylish, inspiring spaces that
              feel uniquely yours.
            </p>
            <div className="flex flex-wrap gap-4">
              {/* Get in touch button */}
              <button className="px-5 py-2.5 rounded-full bg-white text-black font-medium transition-all duration-300 hover:bg-white/20 hover:text-white hover:backdrop-blur-md border border-transparent hover:border-white/30 text-lg shadow-lg cursor-pointer">
                Get in touch
              </button>

              {/* View services button - Ab ye bhi same behave karega */}
              <button className="px-5 py-2.5 rounded-full bg-[#1e1e1e] text-white font-medium transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-md border border-white/10 hover:border-white/30 text-lg shadow-lg cursor-pointer">
                View services
              </button>
            </div>
            {/* --- LOGO SLIDER SECTION --- */}
            {/* --- AUTO SLIDING LOGOS --- */}
            <div className="w-full lg:max-w-md mt-15">
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
                  {/* Duplicating logos for seamless loop */}
                  {[...LOGOS, ...LOGOS].map((logo, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 flex-shrink-0 group"
                    >
                      <div className="text-white/60 group-hover:text-white/70 transition-colors">
                        {logo.icon}
                      </div>
                      <span className="text-lg font-bold text-white/60 group-hover:text-white/60 transition-colors tracking-tight">
                        {logo.name}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </FadeIn>

          {/* Right Image with Glass Badges */}
          <FadeIn
            direction="left"
            className="relative h-[520px] sm:h-[580px] lg:h-[650px] 
  w-full flex lg:justify-end justify-center items-center"
          >
            {/* CLIENT SATISFACTION BADGE */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute bottom-20 sm:bottom-28 left-4 sm:left-10 lg:left-12 z-10
    bg-[#141414]/35 backdrop-blur-md border border-white/10
    pl-2 sm:pl-3 pr-4 sm:pr-5 py-1.5 sm:py-2 
    rounded-full flex items-center gap-2 sm:gap-3 shadow-2xl
    scale-90 sm:scale-100"
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span className="text-white text-[14px] sm:text-[17px] font-medium text-neutral-300">
                Client satisfaction
              </span>
            </motion.div>

            {/* IMAGE CONTAINER */}
            <div
              className="relative w-[92%] sm:w-[88%] lg:w-[85%] 
    h-[88%] sm:h-full overflow-hidden
    rounded-t-[220px] sm:rounded-t-[280px] lg:rounded-t-[320px]
    rounded-b-[30px] sm:rounded-b-[40px]
    border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
            >
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1400&q=80"
                alt="Modern Architecture"
                className="w-full h-full object-cover"
              />

              {/* gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

              {/* SMART PLANNING BADGE */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute top-[22%] sm:top-1/4 left-4 sm:left-10 lg:left-32
      bg-[#141414]/35 backdrop-blur-md border border-white/10
      pl-2 sm:pl-3 pr-4 sm:pr-5 py-1.5 sm:py-2 
      rounded-full flex items-center gap-2 sm:gap-3 shadow-2xl
      scale-90 sm:scale-100"
              >
                <div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/10">
                  <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_6px_rgba(255,255,255,0.7)]" />
                </div>

                <span className="text-white/90 text-[14px] sm:text-[17px] font-medium tracking-tight leading-none">
                  Smart planning
                </span>
              </motion.div>

              {/* SEAMLESS PROCESS BADGE */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-5
      bg-[#141414]/35 backdrop-blur-md border border-white/10
      pl-2 sm:pl-3 pr-4 sm:pr-5 py-1.5 sm:py-2 
      rounded-full flex items-center gap-2 sm:gap-3 shadow-2xl
      scale-90 sm:scale-100"
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-white text-[14px] sm:text-[17px] font-medium text-neutral-300">
                  Seamless process
                </span>
              </motion.div>

              {/* RATING CARD */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-4 sm:bottom-6 right-3 sm:right-6 
      bg-[#141414]/35 backdrop-blur-[5px] border border-white/10 
      py-3 sm:py-5 px-3 sm:px-3.5 
      rounded-[24px] sm:rounded-[30px] 
      shadow-2xl w-fit flex flex-col items-center
      scale-90 sm:scale-100"
              >
                <div className="flex -space-x-3 mb-3 ml-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/100?img=${i + 20}`}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                    />
                  ))}
                </div>

                <div className="flex gap-1 sm:gap-2 mb-3 sm:mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      className="sm:w-[15px] sm:h-[15px] fill-white text-white opacity-90"
                    />
                  ))}
                </div>

                <p className="text-white text-[13px] sm:text-[17px] font-medium text-neutral-300 opacity-90 text-center leading-tight">
                  Rated 5 Stars by <br /> 2k+ happy clients
                </p>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
