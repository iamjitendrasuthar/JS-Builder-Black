import FadeIn from "@/utils/common";

const CTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <FadeIn>
        <div className="relative rounded-[2rem] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80"
              alt="Cozy interior"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 py-16 flex justify-center items-center text-center px-4">
            {/* ✅ Responsive Blur Box */}
            <div
              className="
              bg-black/50 backdrop-blur-md rounded-3xl 
              w-full max-w-3xl
              px-6 py-10
              sm:px-10 sm:py-12
              md:px-16 md:py-14
              lg:px-20 lg:py-16
            "
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight">
                Let's create a <br />
                space you'll love
              </h2>

              <p className="text-neutral-200 text-base sm:text-lg max-w-xl mx-auto mb-8">
                We'd love to hear from you. Reach out to discuss your ideas, get
                a quote, or book a consultation.
              </p>

              <button
                className="px-7 py-3 sm:px-8 sm:py-4 rounded-full bg-white text-black font-medium 
                 transition-all duration-300 
                hover:bg-white/20 hover:text-white 
                 text-base sm:text-lg cursor-pointer"
              >
                Get a free quote!
              </button>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default CTASection;
