import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

/**
 * Testimonial Card Component
 * Updated dimensions: Reduced width and padding to make the card smaller.
 */
const TestimonialCard = ({ quote, author, role, avatar }) => {
  return (
    <motion.div
      whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.2)" }}
      className="flex-shrink-0 w-[280px] md:w-[500px] p-6 md:p-10 rounded-[2rem] bg-[#121212]  mx-3 flex flex-col items-center text-center transition-colors duration-500"
    >
      {/* Star Rating */}
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 text-white fill-white" // ⭐ size increase
            strokeWidth={1.5}
          />
        ))}
      </div>

      {/* Client Message */}
      <p className="text-neutral-300 text-base md:text-md leading-relaxed mb-8 font-light whitespace-normal">
        {quote}
      </p>

      {/* Author Info */}
      <div className="mt-auto">
        <div className="w-14 h-14 rounded-xl overflow-hidden mb-3 mx-auto border border-white/10">
          <img
            src={avatar}
            alt={author}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src =
                "https://ui-avatars.com/api/?name=" +
                author +
                "&background=333&color=fff";
            }}
          />
        </div>
        <h4 className="text-white font-medium text-base mb-0.5">{author}</h4>
        <p className="text-neutral-500 text-[10px] uppercase tracking-[0.15em]">
          {role}
        </p>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const [isHovered, setIsHovered] = useState(false);

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
    {
      quote:
        "Materials aur lighting ka selection sab kuch badal deta hai. Yeh hamare ghar ko ek luxury feel aur naya mod deta hai.",
      author: "Michael Chen",
      role: "Residential Client",
      avatar: "https://i.pravatar.cc/150?u=michael",
    },
  ];

  // Doubled array for infinite scrolling effect
  const doubleTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-[#080808] border-y border-white/5 overflow-hidden">
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

      {/* Marquee Slider with Left/Right Fade */}
      <div
        className="relative w-full overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Fade */}
        <div
          className="hidden lg:block absolute left-0 top-0 bottom-0
  w-[420px]
  bg-gradient-to-r
  from-black via-black/90 via-black/60 to-transparent
  z-30 pointer-events-none"
        />

        {/* Right Fade */}
        <div
          className="hidden lg:block absolute right-0 top-0 bottom-0
  w-[420px]
  bg-gradient-to-l
  from-black via-black/90 via-black/60 to-transparent
  z-30 pointer-events-none"
        />

        <motion.div
          className="flex py-2"
          animate={{
            x: isHovered ? -1200 : -4000,
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: isHovered ? 40 : 80,
            ease: "linear",
          }}
        >
          {doubleTestimonials.map((t, index) => (
            <TestimonialCard
              key={index}
              quote={t.quote}
              author={t.author}
              role={t.role}
              avatar={t.avatar}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
