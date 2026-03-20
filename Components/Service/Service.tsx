"use client";
import React from "react";
import FadeIn from "@/utils/common";
import { Layers, Layout, Lightbulb, Home, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Architectural design",
    description:
      "We design structurally sound, visually striking spaces that blend function with timeless architecture.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    features: ["Structural Integrity", "Modern Aesthetics", "Permit Drawings"],
    icon: <Home className="w-8 h-8 md:w-10 md:h-10" />,
  },
  {
    id: "02",
    title: "Interior Design",
    description:
      "We design functional, expressive interiors that bring purpose into every corner of your space.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200",
    features: ["Custom Furniture", "Material Selection", "Color Theory"],
    icon: <Layers className="w-8 h-8 md:w-10 md:h-10" />,
  },
  {
    id: "03",
    title: "Space Planning",
    description:
      "We design optimized layouts that maximize flow, function, and the full potential of your available space.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200",
    features: ["Zoning Analysis", "Flow Optimization", "Ergonomics"],
    icon: <Layout className="w-8 h-8 md:w-10 md:h-10" />,
  },
  {
    id: "04",
    title: "Space Decoration",
    description:
      "We design beautifully styled spaces with curated decor that enhances character, comfort, and atmosphere.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200",
    features: ["Art Curation", "Ambient Lighting", "Styling & Finish"],
    icon: <Lightbulb className="w-8 h-8 md:w-10 md:h-10" />,
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="bg-white/5 border border-white/10 text-neutral-400 px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-widest mb-8 inline-block">
              Expertise & Solutions
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white mb-8 tracking-tighter leading-[0.95]">
              Services that <br />
              <span className="text-neutral-500 italic font-serif">
                spaces
              </span>{" "}
              shape life.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed border-l border-white/10 pl-8">
              Js Interiors delivers holistic design through a lens of structural
              clarity and emotional resonance.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* --- SERVICES LIST --- */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1}>
              <div className="group relative bg-[#1f1f1f] rounded-[40px] md:rounded-[60px] p-8 md:p-16 overflow-hidden flex flex-col justify-center min-h-[500px] border border-white/5 transition-all duration-700 hover:bg-[#1a1a1a]">
                {/* Text Content Area */}
                <div className="relative z-20 w-full lg:w-[55%] space-y-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#0a0a0a] border border-white/5 flex items-center justify-center text-white transition-all duration-500 group-hover:bg-white group-hover:text-black">
                    {service.icon}
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-neutral-400 text-lg md:text-xl leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-3">
                    {service.features.map((feat, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-neutral-400 bg-white/5 px-4 py-2 rounded-full border border-white/10"
                      >
                        <CheckCircle2 size={12} className="text-blue-500" />
                        {feat}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="group/btn px-8 py-4 rounded-full border border-white/10 text-white font-medium hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center gap-3"
                    >
                      Start your journey
                      <svg
                        className="transition-transform duration-300 ease-out group-hover/btn:translate-x-1.5"
                        width="18"
                        height="18"
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
                  </div>
                </div>

                {/* --- FIXED IMAGE REVEAL --- */}
                <div
                  className="absolute top-0 right-0 h-full w-0 lg:group-hover:w-[48%] opacity-0 lg:group-hover:opacity-100 transition-all duration-1000 ease-[0.21,0.45,0.32,0.9] z-10 pointer-events-none overflow-hidden hidden lg:block"
                  style={{
                    clipPath: "ellipse(100% 100% at 100% 50%)",
                  }}
                >
                  <div className="w-full h-full relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover grayscale-[60%] group-hover:grayscale-0 scale-[1.3] group-hover:scale-100 transition-all duration-[1.2s] ease-out"
                    />
                    {/* Shadow overlay to blend image edge with card bg */}
                    <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#1a1a1a] to-transparent z-20" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
