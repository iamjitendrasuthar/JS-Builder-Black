"use client";
import FadeIn from "@/utils/common";
import { Pause } from "lucide-react";

const MissionSection = () => (
  <section className="py-20 lg:py-28 bg-[#0a0a0a]">
    {/* ✅ SAME CONTAINER SYSTEM */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-12">
          <FadeIn className="space-y-6">
            <span className="bg-white/5 border border-white/10 text-neutral-400 px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-widest inline-block">
              Our mission
            </span>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1]">
              Purpose that <br /> drives every detail
            </h2>
          </FadeIn>

          <div className="space-y-10">
            {[
              {
                title: "Elevating everyday living",
                desc: "Our thoughtful, innovative designs bring harmony, effortless simplicity, and joy to everyday modern home life.",
              },
              {
                title: "Spaces that feel like home",
                desc: "We turn your vision into living spaces that are well designed, personal, practical, and timelessly functional.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.2} className="space-y-3">
                <h3 className="text-xl md:text-2xl font-semibold text-white flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {item.title}
                </h3>

                <p className="text-neutral-500 text-base md:text-lg leading-relaxed max-w-md ml-5">
                  {item.desc}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <FadeIn delay={0.3} className="relative">
          <div className="rounded-[40px] md:rounded-[60px] overflow-hidden aspect-[4/5] shadow-2xl border border-white/10 group">
            <img
              src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80"
              alt="Mission Detail"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            <div className="absolute bottom-8 right-8 w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 flex items-center justify-center text-white">
              <Pause size={20} fill="currentColor" />
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default MissionSection;
