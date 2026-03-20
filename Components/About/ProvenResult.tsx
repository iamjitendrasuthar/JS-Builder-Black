"use client";
import FadeIn from "@/utils/common";
import { Plus } from "lucide-react";

const ProvenResults = () => {
  const stats = [
    { value: "15", label: "Years of experience" },
    { value: "25", label: "Talented team members" },
    { value: "100", label: "Completed projects" },
    { value: "09", label: "Industry awards won" },
  ];

  return (
    <section className="py-24 lg:py-36 bg-[#141414] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* IMAGE SECTION WITH ACCENTS */}
          <div className="relative order-2 lg:order-1">
            {/* Background Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl" />

            <FadeIn className="relative z-10 rounded-[40px] md:rounded-[80px] overflow-hidden aspect-[4/5] shadow-2xl border border-white/5 group">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000"
                alt="Design Meeting"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </FadeIn>
          </div>

          {/* CONTENT SECTION */}
          <div className="space-y-16 order-1 lg:order-2">
            <FadeIn className="space-y-8 text-center lg:text-left">
              <div>
                <span className="bg-white/5 border border-white/10 text-blue-400 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] mb-6 inline-block">
                  Proven results
                </span>
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white leading-[0.9] mt-4">
                  Vision meets <br />
                  <span className="text-neutral-500 italic font-serif">
                    Impact.
                  </span>
                </h2>
              </div>

              <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
                Our design-driven approach creates lasting milestones across
                premium homes and high-end commercial spaces.
              </p>
            </FadeIn>

            {/* STATS GRID */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-16 border-t border-white/5 pt-12">
              {stats.map((stat, i) => (
                <FadeIn
                  key={i}
                  delay={i * 0.1}
                  className="group cursor-default"
                >
                  <div className="flex items-start gap-1">
                    <span className="text-5xl md:text-7xl font-bold text-white tracking-tighter transition-all duration-300 group-hover:text-blue-500">
                      {stat.value}
                    </span>
                    <Plus
                      size={20}
                      className="text-blue-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-[1px] w-8 bg-blue-500/50 group-hover:w-12 transition-all duration-500" />
                    <p className="text-neutral-500 uppercase tracking-[0.15em] text-[10px] md:text-xs font-bold leading-tight">
                      {stat.label}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenResults;
