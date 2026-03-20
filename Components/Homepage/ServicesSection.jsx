import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const FadeIn = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
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

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Architectural design",
      description:
        "We design structurally sound, visually striking spaces that blend function with timeless architecture.",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-8 h-8 md:w-10 md:h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Interior Design",
      description:
        "We design functional, expressive interiors that bring purpose into every corner of your space.",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-8 h-8 md:w-10 md:h-10"
          transform="rotate(45)"
        >
          <rect x="4" y="4" width="6" height="6" rx="1" />
          <rect x="14" y="4" width="6" height="6" rx="1" />
          <rect x="4" y="14" width="6" height="6" rx="1" />
          <rect x="14" y="14" width="6" height="6" rx="1" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Space Planning",
      description:
        "We design optimized layouts that maximize flow, function, and the full potential of your available space.",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-8 h-8 md:w-10 md:h-10"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <rect x="7" y="7" width="6" height="4" rx="1" />
          <path strokeLinecap="round" d="M3 15h18" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Space Decoration",
      description:
        "We design beautifully styled spaces with curated decor that enhances character, comfort, and atmosphere.",
      image:
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-8 h-8 md:w-10 md:h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 8l2-6h4l2 6H8zM12 8v14M9 22h6"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-20">
          <FadeIn className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="bg-white/5 border border-white/10 text-neutral-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 inline-block uppercase tracking-widest">
              Our services
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-tight">
              Services that{" "}
              <span className="text-neutral-500 italic font-serif">shape</span>{" "}
              spaces
            </h2>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1}>
              <div className="group relative bg-[#1f1f1f] rounded-[40px] p-8 lg:p-12 overflow-hidden flex flex-col items-start min-h-[380px] border border-white/5 transition-all duration-500 hover:bg-[#1a1a1a]">
                {/* Text Content */}
                <div className="relative z-20 flex-1 flex flex-col items-start max-w-[75%] lg:max-w-[65%]">
                  {/* Icon Wrapper (Video style circle) */}
                  <div className="w-16 h-16 rounded-full bg-[#0a0a0a] border border-white/5 flex items-center justify-center mb-10 text-white transition-all duration-500 group-hover:bg-white group-hover:text-black">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-neutral-400 text-lg leading-relaxed mb-10 font-light">
                    {service.description}
                  </p>

                  {/* ✅ BUTTON WITH HOVER ARROW ANIMATION */}
                  <Link
                    href="/services"
                    className="group/btn px-8 py-3.5 rounded-full border border-white/10 text-white font-medium hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center gap-2 cursor-pointer overflow-hidden"
                  >
                    View in details
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

                {/* ✅ DYNAMIC IMAGE REVEAL: Default width 0, Hover par slide-in */}
                <div
                  className="absolute top-0 right-0 h-full w-0 opacity-0 scale-95 group-hover:w-[45%] group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 ease-[0.21, 0.45, 0.32, 0.9] z-10 pointer-events-none overflow-hidden"
                  style={{
                    clipPath: "ellipse(100% 50% at 100% 50%)", // Arch shape reveal
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  {/* 100% Clear View with a subtle shadow to separate from text area */}
                  <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#141414] to-transparent" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
