"use client";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000",
    shape: "rect",
    alt: "Living Room",
  },
  {
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000",
    shape: "arch",
    alt: "Modern Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=2000",
    shape: "rect",
    alt: "Office",
  },
  {
    src: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=2000",
    shape: "arch",
    alt: "Bedroom",
  },
];

const ShapedImageWrapper = ({ item }) => {
  const isArch = item.shape === "arch";
  return (
    <div
      className={`
      flex-none relative overflow-hidden group transition-all duration-500 border border-white/5
      ${
        isArch
          ? "w-[180px] md:w-[260px] h-[280px] md:h-[380px] rounded-t-full rounded-b-[2rem]"
          : "w-[240px] md:w-[320px] h-[200px] md:h-[260px] rounded-[2rem] md:rounded-[3rem]"
      }
      bg-[#141414] self-end
    `}
    >
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      {/* Subtle overlay matching other cards */}
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

const LogoTicker = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a] overflow-hidden">
      {/* ✅ HERO MATCHED WIDTH: max-w-7xl */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header (Optional but good for consistency) */}

        {/* 2. Slider Container with Modern Mask Effect */}
        <div className="relative  py-12 md:py-16 [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <div className="flex">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 35, // Thoda slow kiya premium feel ke liye
              }}
              className="flex gap-6 md:gap-10 items-end"
            >
              {/* Duplicating items for a seamless loop */}
              {[...portfolioItems, ...portfolioItems, ...portfolioItems].map(
                (item, i) => (
                  <ShapedImageWrapper key={i} item={item} />
                ),
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
