import React from "react";
import { Star } from "lucide-react";

// TestimonialCard component (unchanged)
const TestimonialCard = ({ quote, author, role, avatar }) => {
  return (
    <div
      className="bg-[#1f1f1f] flex-shrink-0 w-full md:w-[450px] p-8 md:p-12 rounded-[40px] 
    flex flex-col items-center text-center 
    border border-white/5 hover:border-white/10 transition-all duration-500 group"
    >
      {/* Stars */}
      <div className="flex gap-1.5 mb-8 justify-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className="text-white fill-white opacity-90"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-neutral-300 text-lg md:text-xl leading-[1.6] mb-10 font-medium italic min-h-[80px] md:min-h-[100px]">
        "{quote}"
      </p>

      {/* Author */}
      <div className="flex flex-col items-center gap-4 mt-auto">
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
          <p className="text-neutral-500 text-[10px] md:text-xs uppercase tracking-widest font-bold">
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
  ];

  return (
    <section className="py-24 lg:py-32 overflow-hidden bg-[#141414]">
      {/* Marquee Animation Keyframes */}
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
      `}</style>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-20 text-center lg:text-left">
        <span className="bg-white/5 border border-white/10 text-neutral-400 px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-widest mb-6 inline-block">
          Testimonials
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-8 tracking-tight">
          What our clients{" "}
          <span className="text-neutral-500 italic font-serif">say</span>
        </h2>
      </div>

      {/* Desktop Marquee */}
      <div className="hidden md:block relative w-full overflow-hidden">
        <div className="relative py-12 md:py-16 [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <div className="absolute inset-0 z-10 [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]" />

          {/* OR, applied directly to the container (which is what you had, but let's ensure no spaces): */}
          <div className="relative py-12 md:py-16 [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
            <div className="animate-marquee-infinite gap-8">
              {doubleTestimonials.map((t, index) => (
                <div key={`desktop-${index}`} className="px-4">
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View (unchanged) */}
      <div className="flex flex-col gap-6 px-4 md:hidden">
        {testimonials.map((t, index) => (
          <TestimonialCard key={`mobile-${index}`} {...t} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
