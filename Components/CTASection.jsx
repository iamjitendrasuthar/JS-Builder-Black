import FadeIn from "@/utils/common";

const CTASection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <FadeIn>
        <div className="relative rounded-[2rem] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80"
              alt="Cozy interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
          </div>

          <div className="relative z-10 py-24 px-8 text-center flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6">
              Let's create a<br />
              space you'll love
            </h2>
            <p className="text-neutral-200 text-lg max-w-xl mb-10">
              We'd love to hear from you. Reach out to discuss your ideas, get a
              quote, or book a consultation.
            </p>

            <button className="px-8 py-4 rounded-full bg-white text-black font-medium border border-transparent transition-all duration-300 hover:bg-white/20 hover:text-white hover:border-white/30 hover:backdrop-blur-md text-lg shadow-lg cursor-pointer">
              Get a free quote!
            </button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};
export default CTASection;
