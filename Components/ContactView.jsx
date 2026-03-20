import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";

/**
 * ✅ CONSISTENT SCROLL ANIMATION
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

const ContactView = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen selection:bg-white selection:text-black">
      {/* ✅ HERO MATCHED WIDTH: max-w-7xl */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <FadeIn className="text-center mb-16">
          <span className="bg-white/5 border border-white/10 text-neutral-400 px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-widest mb-6 inline-block">
            Contact us
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white mb-8 tracking-tight leading-[1.1]">
            Let's bring your <br />
            <span className="text-neutral-500 italic font-serif">
              dream space
            </span>{" "}
            to life
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Reach out to discuss your ideas, ask a question, or request a quote
            for your next project.
          </p>
        </FadeIn>

        {/* Form Section */}
        <FadeIn delay={0.2}>
          <form className="bg-[#1f1f1f] border border-white/5 rounded-[40px] p-8 md:p-16 shadow-2xl mb-12 lg:mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="flex flex-col gap-3">
                <label className="text-neutral-400 text-sm font-medium uppercase tracking-widest">
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="e.g. jitendra suthar"
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-neutral-400 text-sm font-medium uppercase tracking-widest">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="jitendra@example.com"
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-neutral-400 text-sm font-medium uppercase tracking-widest">
                  Phone number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (347) 000-0000"
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-neutral-400 text-sm font-medium uppercase tracking-widest">
                  Service type
                </label>
                <div className="relative">
                  <select className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all w-full appearance-none cursor-pointer">
                    <option className="bg-[#1f1f1f]">Interior design</option>
                    <option className="bg-[#1f1f1f]">
                      Architectural design
                    </option>
                    <option className="bg-[#1f1f1f]">Landscape design</option>
                  </select>
                  <ChevronDown
                    className="absolute right-6 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none"
                    size={20}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3 md:col-span-2">
                <label className="text-neutral-400 text-sm font-medium uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project vision..."
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/30 focus:bg-white/[0.08] transition-all resize-none"
                ></textarea>
              </div>

              <div className="md:col-span-2 flex justify-center lg:justify-end">
                <button
                  type="button"
                  className="px-12 py-5 rounded-full bg-white text-black font-bold hover:scale-105 active:scale-95 transition-all w-full md:w-auto text-lg shadow-xl"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </FadeIn>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              icon: <Mail />,
              title: "Email us at",
              value: "hello@jsbuilder.com",
              link: "mailto:hello@jsbuilder.com",
            },
            {
              icon: <Phone />,
              title: "Give us a call",
              value: "+1 (310) 555-2345",
              link: "tel:+13105552345",
            },
            {
              icon: <MapPin />,
              title: "Visit our office",
              value: "123 Street, Los Angeles, CA",
              link: "#",
            },
          ].map((item, i) => (
            <FadeIn key={i} delay={0.3 + i * 0.1}>
              <div className="bg-[#1f1f1f] border border-white/5 rounded-[32px] p-10 text-center flex flex-col items-center hover:bg-[#1a1a1a] transition-all group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 mb-6 text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
                  {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h4 className="text-neutral-500 text-sm font-bold uppercase tracking-widest mb-3">
                  {item.title}
                </h4>
                {item.link !== "#" ? (
                  <a
                    href={item.link}
                    className="text-white text-xl font-medium hover:text-neutral-400 transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-white text-xl font-medium">{item.value}</p>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactView;
