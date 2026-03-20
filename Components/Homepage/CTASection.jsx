import { motion } from "framer-motion";

/**
 * ✅ FIXED FADE-IN: Scroll triggered animation
 */
const FadeIn = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
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

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl min-h-[500px] lg:min-h-[600px] flex items-center justify-center">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80"
                alt="Cozy interior"
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-black/40 backdrop-grayscale-[0.2]" />
            </div>

            {/* Content Box with Glass Effect */}
            <div className="relative z-10 w-full max-w-4xl px-6 text-center">
              <div
                className="
                  bg-[#1f1f1f]/60 backdrop-blur-xl rounded-[32px] 
                  border border-white/10
                  px-6 py-12
                  sm:px-12 sm:py-16
                  md:px-20 md:py-20
                  shadow-2xl
                "
              >
                <span className="bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-widest mb-8 inline-block">
                  Let's Talk
                </span>

                <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-medium text-white mb-8 leading-[1.1] tracking-tight">
                  Let's create a <br />
                  space you'll{" "}
                  <span className="text-neutral-400 italic font-serif">
                    love
                  </span>
                </h2>

                <p className="text-neutral-300 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed font-light">
                  We'd love to hear from you. Reach out to discuss your ideas,
                  get a quote, or book a consultation.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    className="w-full sm:w-auto px-10 py-5 rounded-full bg-transparent text-white font-medium 
                    border border-white/20 backdrop-blur-md transition-all duration-300 
                    hover:bg-white/10 text-lg cursor-pointer"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-10 -right-10 text-[180px] font-bold text-white/[0.03] leading-none pointer-events-none select-none tracking-tighter hidden lg:block">
              JSB*
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTASection;
