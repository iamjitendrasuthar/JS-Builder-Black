"use client";
import FadeIn from "@/utils/common";

const ProvenResults = () => {
  const stats = [
    { value: "15+", label: "Years of experience" },
    { value: "25+", label: "Talented team members" },
    { value: "100+", label: "Completed projects" },
    { value: "9+", label: "Industry awards won" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0a0a0a]">
      {/* ✅ SAME CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* IMAGE */}
          <FadeIn className="rounded-[40px] md:rounded-[60px] overflow-hidden aspect-square shadow-2xl border border-white/10 order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000"
              alt="Design Meeting"
              className="w-full h-full object-cover"
            />
          </FadeIn>

          {/* CONTENT */}
          <div className="space-y-12 order-1 lg:order-2">
            <FadeIn className="space-y-6">
              <span className="bg-white/5 border border-white/10 text-neutral-400 px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-widest inline-block">
                Proven results
              </span>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                Where vision meets measurable impact
              </h2>

              <p className="text-neutral-500 text-base md:text-lg leading-relaxed max-w-lg">
                Over the years, our design-driven approach has turned our vision
                into meaningful, lasting milestones across homes, offices, and
                beyond.
              </p>
            </FadeIn>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-y-12 gap-x-10">
              {stats.map((stat, i) => (
                <FadeIn key={i} delay={i * 0.1} className="space-y-3">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
                    {stat.value}
                  </div>

                  <div className="text-neutral-500 uppercase tracking-[0.2em] text-[10px] font-black leading-tight border-l-2 border-blue-500 pl-3">
                    {stat.label.split(" ").map((word, idx) => (
                      <span key={idx} className="block">
                        {word}
                      </span>
                    ))}
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
