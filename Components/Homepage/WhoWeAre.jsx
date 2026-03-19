import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

/**
 * ✅ COUNTER ANIMATION COMPONENT
 * Numbers ko 0 se target value tak animate karta hai.
 */
const Counter = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + "+");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      // String se number extract karna (e.g., "15+" -> 15)
      const numericValue = parseInt(value);
      const controls = animate(count, numericValue, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return <motion.div ref={ref}>{rounded}</motion.div>;
};

const FadeIn = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
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

const WhoWeAre = () => {
  const stats = [
    { value: "15+", label: "Years of experience" },
    { value: "25+", label: "Talented team members" },
    { value: "100+", label: "Completed projects" },
    { value: "9+", label: "Industry awards" },
  ];

  return (
    <section className="bg-[#0a0a0a] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-8">
            <FadeIn>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-neutral-400 mb-8 uppercase tracking-widest">
                Who we are
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-[56px] font-medium text-white leading-[1.1] tracking-tight">
                We're a team of designers, architects, and builders turning
                spaces into{" "}
                <span className="text-neutral-500 italic font-serif">
                  works of art
                </span>
                .
              </h2>
            </FadeIn>
          </div>

          <div className="lg:col-span-4 flex items-end">
            <FadeIn delay={0.2}>
              <p className="text-lg text-neutral-400 leading-relaxed">
                From interiors to landscapes, we deliver lasting results
                tailored to your vision and lifestyle needs.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* ✅ STATS GRID WITH FLIP/COUNTER ANIMATION */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-t border-white/10 pt-16">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="text-4xl md:text-5xl font-medium text-white mb-2 tracking-tighter">
                <Counter value={stat.value} />
              </div>
              <div className="text-neutral-500 text-sm md:text-base uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom Visual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeIn
            delay={0.3}
            className="bg-[#141414] rounded-[40px] p-8 md:p-14 relative overflow-hidden flex flex-col justify-between min-h-[450px] border border-white/5"
          >
            <div className="relative z-10">
              <h3 className="text-white text-2xl md:text-3xl leading-snug mb-8 max-w-sm font-medium">
                We design with intention, creating spaces that reflect your
                personality.
              </h3>
              <div className="space-y-4">
                {[
                  "Balance of style and function",
                  "Timeless results, built to last",
                  "Thoughtful, detail driven process",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-neutral-400"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
                    <span className="text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 relative flex items-center justify-between">
              <div className="flex items-end -space-x-4">
                {[
                  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=150",
                  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=150",
                  "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=150",
                ].map((img, idx) => (
                  <div
                    key={idx}
                    className={`w-16 h-20 md:w-20 md:h-28 rounded-t-full border-4 border-[#141414] overflow-hidden shadow-2xl ${idx === 1 ? "z-10 -translate-y-4" : "z-0"}`}
                  >
                    <img
                      src={img}
                      alt="detail"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-4xl md:text-6xl font-bold text-white/[0.03] tracking-tighter select-none">
                JSBuilder*
              </div>
            </div>
          </FadeIn>

          <FadeIn
            delay={0.4}
            className="rounded-[40px] overflow-hidden h-[450px] lg:h-full border border-white/5 shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&q=80&w=1200"
              alt="Modern interior"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
