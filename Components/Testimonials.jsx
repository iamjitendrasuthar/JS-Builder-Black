import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

/**
 * Testimonial Card Component
 */
const TestimonialCard = ({ quote, author, role, avatar }) => {
  return (
    <div className="flex-shrink-0 w-full max-w-[350px] md:w-[450px] p-6 md:p-10 rounded-[2rem] bg-[#121212] flex flex-col items-center text-center border border-white/5 hover:border-white/20 transition-all duration-500">
      {/* Star Rating */}
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 text-white fill-white"
            strokeWidth={1.5}
          />
        ))}
      </div>

      {/* Client Message - Updated to font-medium for boldness */}
      <p className="text-neutral-200 text-sm md:text-base leading-relaxed mb-8 font-medium min-h-[80px]">
        "{quote}"
      </p>

      {/* Author Info */}
      <div className="mt-auto">
        <div className="w-14 h-14 rounded-xl overflow-hidden mb-3 mx-auto border border-white/10 bg-neutral-800">
          <img
            src={avatar}
            alt={author}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(author)}&background=333&color=fff`;
            }}
          />
        </div>
        <h4 className="text-white font-semibold text-base mb-0.5">{author}</h4>
        <p className="text-neutral-500 text-[10px] uppercase tracking-[0.15em] font-medium">
          {role}
        </p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Planning aur execution bilkul lajawab tha. Unhone hamare space ka sahi istemal kiya smart zoning aur clean layouts ke saath.",
      author: "David Miller",
      role: "Exterior design",
      avatar: "https://i.pravatar.cc/150?u=david",
    },
    {
      quote:
        "Pahli mulaqat se lekar aakhri detail tak, team ne kamaal kar diya. Exterior ab pehle se kaafi fresh aur balanced lagta hai.",
      author: "Daniel Hayes",
      role: "Space planning",
      avatar: "https://i.pravatar.cc/150?u=daniel",
    },
    {
      quote:
        "Har detail mein perfection. Unhone hamare office ko ek naye aur prerak mahol mein badal diya jo hamari team ko pasand hai.",
      author: "Sarah Jenkins",
      role: "Interior Architect",
      avatar: "https://i.pravatar.cc/150?u=sarah",
    },
  ];

  // Doubling the array ensures the "seam" is invisible for infinite loop
  const doubleTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section className="py-20 bg-[#080808] border-y border-white/5 overflow-hidden">
      {/* Global Style for the Marquee Animation with stronger fades */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
          display: flex;
          width: max-content;
          animation: marquee 50s linear infinite;
        }
        .animate-marquee-infinite:hover {
          animation-play-state: paused;
        }
        /* Fade edges - Increased width to 350px for stronger effect */
        .marquee-container::before,
        .marquee-container::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 350px;
          z-index: 10;
          pointer-events: none;
        }
        .marquee-container::before {
          left: 0;
          background: linear-gradient(to right, #080808 10%, rgba(8, 8, 8, 0.8) 40%, transparent 100%);
        }
        .marquee-container::after {
          right: 0;
          background: linear-gradient(to left, #080808 10%, rgba(8, 8, 8, 0.8) 40%, transparent 100%);
        }
        @media (max-width: 1024px) {
           .marquee-container::before, .marquee-container::after { width: 40px; }
        }
      `}</style>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block  rounded-full   mb-6"
        >
          <span className="px-4 py-2 rounded-full bg-white/10  text-sm text-white font-medium ">
            Testimonials
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-medium text-white mb-5 tracking-tight"
        >
          Hamare clients se sune
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-neutral-400 text-base md:text-lg max-w-xl mx-auto"
        >
          Asli feedback un logo se jinhone ham par aur hamare kaam par bharosa
          kiya.
        </motion.p>
      </div>

      {/* Marquee Slider */}
      <div className="relative w-full overflow-hidden marquee-container group">
        {/* MOBILE VIEW - Reduced px-4 to px-2 for tighter sides */}
        <div className="flex flex-col gap-6 px-2 lg:hidden items-center">
          {testimonials.map((t, index) => (
            <TestimonialCard key={`mobile-${index}`} {...t} />
          ))}
        </div>

        {/* DESKTOP INFINITE SLIDER */}
        <div className="hidden lg:block relative">
          <div className="animate-marquee-infinite py-4 gap-8">
            {doubleTestimonials.map((t, index) => (
              <TestimonialCard key={`desktop-${index}`} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
