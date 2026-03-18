import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
/**
 * ✅ SCROLL TRIGGERED FADE-IN
 */
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

const RecentWork = () => {
  const projects = [
    {
      title: "Mediterranean Villa Refresh",
      desc: "A sun-soaked villa received a modern yet respectful upgrade. With a focus on natural materials, elegant minimalism, and spatial flow, we revived this property into a timeless family retreat.",
      type: "Villa Renovation",
      location: "Marbella, Spain",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000",
    },
    {
      title: "Modern Living Room Redesign",
      desc: "A compact city living room was completely reimagined to enhance comfort, maximize light, and express modern elegance through smart furnishing and thoughtful textures.",
      type: "Interior Design",
      location: "Chicago, Illinois",
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000",
    },
  ];

  return (
    <section className="bg-[#0a0a0a] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-20">
          <FadeIn className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="bg-white/5 border border-white/10 text-neutral-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 inline-block uppercase tracking-widest">
              Recent Work
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-8 tracking-tight">
              A Showcase of <br /> our{" "}
              <span className="text-neutral-500 italic font-serif">recent</span>{" "}
              projects
            </h2>
            <p className="text-[#a3a3a3] text-lg md:text-xl max-w-2xl leading-relaxed">
              From idea to execution, our work is made to elevate everyday
              living.
            </p>
          </FadeIn>
        </div>

        {/* Projects List */}
        <div className="space-y-12 lg:space-y-20">
          {projects.map((proj, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div
                className={`group bg-[#141414] rounded-[40px] p-6 md:p-10 lg:p-16 flex flex-col ${
                  idx % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-12 lg:gap-24 border border-white/5 transition-all duration-500 hover:border-white/10`}
              >
                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                  <h3 className="text-3xl md:text-4xl lg:text-[42px] font-medium text-white mb-6 tracking-tight leading-tight">
                    {proj.title}
                  </h3>
                  <p className="text-[#A3A3A3] text-lg md:text-xl leading-relaxed mb-10">
                    {proj.desc}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 mb-12">
                    <div className="flex items-center gap-3 text-white font-medium text-base">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M12 2L22 12L12 22L2 12L12 2Z" />
                        </svg>
                      </div>
                      {proj.type}
                    </div>
                    <div className="flex items-center gap-3 text-white font-medium text-base">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      {proj.location}
                    </div>
                  </div>

                  {/* ✅ BUTTON WITH HOVER ARROW ANIMATION */}
                  <Link
                    href="/contact"
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

                {/* Image Content */}
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-t-[200px] rounded-b-[40px] border border-white/10 shadow-2xl transition-all duration-500">
                    <img
                      src={proj.img}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
