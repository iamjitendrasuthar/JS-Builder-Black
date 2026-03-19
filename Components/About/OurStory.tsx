"use client";
import FadeIn from "@/utils/common";
import { Quote } from "lucide-react";

const OurStory = () => (
  <section id="about" className="py-20 lg:py-28 bg-[#0a0a0a]">
    {/* ✅ SAME CONTAINER SYSTEM */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* HEADER */}
      <FadeIn className="text-center mb-16 space-y-6">
        <span className="bg-white/5 border border-white/10 text-neutral-400 px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-widest inline-block">
          Our story
        </span>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white max-w-3xl mx-auto leading-[1.1]">
          The story behind our <br /> creative craft
        </h2>
      </FadeIn>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* LEFT TEXT */}
        <FadeIn className="lg:col-span-8 bg-[#111111] rounded-[40px] md:rounded-[50px] p-8 md:p-14 border border-white/5">
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-8 font-light">
            We started with a vision to transform everyday spaces into something
            more. places that feel personal, functional, and timeless. We began
            as a small, passionate team has grown into a full-service studio of
            designers, architects, and craftsmen, all dedicated to design.
          </p>

          <p className="text-neutral-500 text-base md:text-lg leading-relaxed font-light">
            For us, every project is an opportunity to create something that not
            only looks beautiful but also enhances the way people live, work,
            and connect. Over the years, our dedication to innovation has helped
            shape a wide range of homes and interiors.
          </p>
        </FadeIn>

        {/* RIGHT CARD */}
        <FadeIn
          delay={0.2}
          className="lg:col-span-4 bg-[#111111] rounded-[40px] md:rounded-[50px] p-8 border border-white/5 flex flex-col items-center text-center justify-center"
        >
          <div className="w-24 h-24 rounded-full overflow-hidden mb-6 ring-4 ring-white/5">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
              alt="Founder"
              className="w-full h-full object-cover"
            />
          </div>

          <h4 className="text-xl md:text-2xl font-bold text-white mb-1">
            Michael Carter
          </h4>

          <p className="text-blue-400 uppercase tracking-widest text-[10px] font-black mb-8">
            Founder & Owner
          </p>

          <div className="text-neutral-800">
            <Quote size={50} className="rotate-180 opacity-50" />
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default OurStory;
