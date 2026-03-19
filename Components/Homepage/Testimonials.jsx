import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

/**
 * Testimonial Card Component - Matching Project/Team card style
 */
const TestimonialCard = ({ quote, author, role, avatar }) => {
  return (
    <div className="flex-shrink-0 w-[380px] md:w-[450px] p-8 md:p-12 rounded-[40px] bg-[#141414] flex flex-col items-start border border-white/5 hover:border-white/10 transition-all duration-500 group">
      {/* Star Rating */}
      <div className="flex gap-1.5 mb-8">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className="text-white fill-white opacity-90"
          />
        ))}
      </div>

      {/* Client Message */}
      <p className="text-neutral-300 text-lg md:text-xl leading-[1.6] mb-10 font-medium italic min-h-[100px]">
        {quote}
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/10 bg-neutral-800 grayscale group-hover:grayscale-0 transition-all duration-500">
          <img
            src={avatar}
            alt={author}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <h4 className="text-white font-semibold text-lg tracking-tight">
            {author}
          </h4>
          <p className="text-neutral-500 text-xs uppercase tracking-widest font-bold">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Planning aur execution bilkul lajawab tha. Unhone hamare space ka sahi istemal kiya smart zoning ke saath.",
      author: "David Miller",
      role: "Exterior design",
      avatar: "https://i.pravatar.cc/150?u=david",
    },
    {
      quote:
        "Pahli mulaqat se lekar aakhri detail tak, team ne kamaal kar diya. Exterior ab kaafi balanced lagta hai.",
      author: "Daniel Hayes",
      role: "Space planning",
      avatar: "https://i.pravatar.cc/150?u=daniel",
    },
    {
      quote:
        "Har detail mein perfection. Unhone hamare office ko ek naye aur prerak mahol mein badal diya.",
      author: "Sarah Jenkins",
      role: "Interior Architect",
      avatar: "https://i.pravatar.cc/150?u=sarah",
    },
  ];

  const doubleTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-infinite:hover {
          animation-play-state: paused;
        }
        /* Glassy Fade Edges */
        .marquee-container::before,
        .marquee-container::after {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          width: 250px;
          z-index: 20;
          pointer-events: none;
        }
        .marquee-container::before {
          left: 0;
          background: linear-gradient(to right, #0a0a0a 10%, transparent 100%);
        }
        .marquee-container::after {
          right: 0;
          background: linear-gradient(to left, #0a0a0a 10%, transparent 100%);
        }
        @media (max-width: 768px) {
          .marquee-container::before, .marquee-container::after { width: 80px; }
        }
      `}</style>

      {/* ✅ HERO MATCHED WIDTH: max-w-7xl */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="bg-white/5 border border-white/10 text-neutral-400 px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-widest mb-6 inline-block">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-8 tracking-tight">
            What our clients{" "}
            <span className="text-neutral-500 italic font-serif">say</span>
          </h2>

          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Real feedback from those who trusted us to bring their architectural
            visions to life.
          </p>
        </div>
      </div>

      {/* Marquee Slider */}
      <div className="relative w-full marquee-container">
        {/* DESKTOP & MOBILE INFINITE SLIDER */}
        <div className="animate-marquee-infinite py-4 gap-6 md:gap-8 px-4">
          {doubleTestimonials.map((t, index) => (
            <TestimonialCard key={index} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
