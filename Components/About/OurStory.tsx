"use client";
import FadeIn from "@/utils/common";
import { Quote, ArrowUpRight } from "lucide-react";

const OurStory = () => {
  return (
    <section id="about" className="py-24 lg:py-36 bg-[#141414] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative Background Blur */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

        {/* HEADER */}
        <FadeIn className="mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="bg-white/5 border border-white/10 text-neutral-400 px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-widest inline-block mb-6">
                Our story
              </span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[0.95]">
                Crafting spaces <br />
                <span className="text-neutral-500 italic font-serif">
                  with soul.
                </span>
              </h2>
            </div>
          </div>
        </FadeIn>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* LEFT: MAIN TEXT & STATS */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <FadeIn className="bg-gradient-to-br from-[#1f1f1f] to-[#181818] rounded-[40px] md:rounded-[60px] p-8 md:p-16 border border-white/5 relative overflow-hidden group">
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

              <p className="relative z-10 text-white text-2xl md:text-3xl leading-snug mb-10 font-light max-w-2xl">
                We believe that{" "}
                <span className="text-neutral-400">great design</span> isn't
                just about how it looks, but how it makes you feel.
              </p>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-white/5">
                <p className="text-neutral-500 text-lg leading-relaxed font-light">
                  We started with a vision to transform everyday spaces into
                  personal sanctuaries. What began as a small studio has grown
                  into a collective of visionaries dedicated to architectural
                  excellence.
                </p>
                <p className="text-neutral-500 text-lg leading-relaxed font-light">
                  Every project is an opportunity to innovate. Our craft is
                  rooted in the balance between functionality and timeless
                  aesthetics, shaping the way people connect with their
                  environment.
                </p>
              </div>
            </FadeIn>

            {/* QUICK STATS ROW */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "Years Experience", value: "12+" },
                { label: "Projects Done", value: "250+" },
                { label: "Awards Won", value: "18" },
              ].map((stat, i) => (
                <FadeIn
                  key={i}
                  delay={0.1 * i}
                  className="bg-[#1f1f1f]/50 border border-white/5 rounded-[30px] p-6 text-center"
                >
                  <h3 className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-neutral-500 text-xs uppercase tracking-widest">
                    {stat.label}
                  </p>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* RIGHT: FOUNDER CARD */}
          <FadeIn
            delay={0.3}
            className="lg:col-span-4 bg-[#1f1f1f] rounded-[40px] md:rounded-[60px] p-10 border border-white/5 flex flex-col items-center text-center relative overflow-hidden group"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[60px] group-hover:bg-blue-500/20 transition-all duration-700" />

            <div className="relative z-10 mb-8 mt-4">
              <div className="w-32 h-40 rounded-[2rem] overflow-hidden ring-1 ring-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                  alt="Founder"
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-3 rounded-2xl shadow-xl">
                <Quote size={20} fill="currentColor" />
              </div>
            </div>

            <div className="mt-auto relative z-10">
              <h4 className="text-2xl font-semibold text-white mb-2 tracking-tight">
                Michael Carter
              </h4>
              <p className="text-neutral-500 uppercase tracking-[0.2em] text-[10px] font-bold mb-8">
                Founder & Creative Director
              </p>

              <p className="text-neutral-400 italic text-sm leading-relaxed border-l-2 border-white/5 pl-4 py-2">
                "Design is the silent ambassador <br /> of your brand and
                lifestyle."
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
