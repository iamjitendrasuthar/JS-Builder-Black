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
  // Image size vahi compact rakhi hai (h-180 / h-300)
  const isArch = item.shape === "arch";
  return (
    <div
      className={`
      flex-none relative overflow-hidden group transition-all duration-500
      ${isArch ? "w-[200px] md:w-[280px] h-[300px] md:h-[400px] rounded-t-full" : "w-[250px] md:w-[350px] h-[220px] md:h-[280px] rounded-[2rem] md:rounded-[3rem]"}
      bg-[#222] self-end
    `}
    >
      {" "}
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>
  );
};

const LogoTicker = () => {
  return (
    <section className="py-12 md:py-20 bg-[#141414]">
      {/* 1. COMPONENT WIDTH: 'max-w-6xl' se badha kar 'max-w-[95%]' ya 'max-w-full' kar diya hai */}
      <div className="max-w-[1400px] mx-auto px-2 md:px-4 relative">
        {/* Fade effects ko thoda adjust kiya taaki wide screen par natural lagein */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-56 z-10 bg-gradient-to-r from-[#141414] from-15% to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-56 z-10 bg-gradient-to-l from-[#141414] from-15% to-transparent pointer-events-none" />

        {/* 2. Border-y wala container ab zyada wide dikhega */}
        <div className="overflow-hidden border-y border-white/5 py-8 md:py-12">
          <div className="flex whitespace-nowrap">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 25,
              }}
              className="flex gap-4 md:gap-8 items-center"
            >
              {[
                ...portfolioItems,
                ...portfolioItems,
                ...portfolioItems,
                ...portfolioItems,
              ].map((item, i) => (
                <ShapedImageWrapper key={i} item={item} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
