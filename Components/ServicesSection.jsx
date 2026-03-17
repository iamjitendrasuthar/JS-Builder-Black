import FadeIn from "@/utils/common";

const ServicesSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side */}
          <FadeIn>
            <div className="bg-[#111] border border-white/5 rounded-3xl p-10 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-medium text-white mb-10 leading-tight">
                  We design with intention creating spaces that reflect your
                  style, not just trends.
                </h2>
                <ul className="space-y-6 text-neutral-300 text-lg">
                  <li className="flex items-start gap-4">
                    <span className="text-white mt-1">1:</span>
                    <span>Balance of style and function</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-white mt-1">2:</span>
                    <span>Timeless results, built to last</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-white mt-1">3:</span>
                    <span>Thoughtful, detail driven process</span>
                  </li>
                </ul>
              </div>
              <div className="flex gap-4 mt-12">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=200&q=80"
                  alt="Detail 1"
                  className="w-16 h-20 object-cover rounded-full border border-white/10"
                />
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=200&q=80"
                  alt="Detail 2"
                  className="w-16 h-20 object-cover rounded-full border border-white/10"
                />
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=200&q=80"
                  alt="Detail 3"
                  className="w-16 h-20 object-cover rounded-full border border-white/10"
                />
              </div>
            </div>
          </FadeIn>

          {/* Right Side */}
          <div className="flex flex-col gap-6">
            <FadeIn
              delay={0.2}
              className="bg-[#1a1a1a] rounded-3xl p-10 border border-white/5 group hover:bg-[#222] transition-colors"
            >
              <h3 className="text-2xl font-medium text-white mb-4">
                Architectural design
              </h3>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                We design structurally sound, visually striking spaces that
                blend function with timeless architecture.
              </p>
              <button className="px-6 py-2.5 rounded-full border border-white/20 text-white text-sm hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2">
                View in detail
              </button>
            </FadeIn>

            <FadeIn
              delay={0.3}
              className="bg-[#1a1a1a] rounded-3xl p-10 border border-white/5 group hover:bg-[#222] transition-colors"
            >
              <h3 className="text-2xl font-medium text-white mb-4">
                Interior Design
              </h3>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                We design functional, expressive interiors that bring purpose
                into every corner of your space.
              </p>
              <button className="px-6 py-2.5 rounded-full border border-white/20 text-white text-sm hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2">
                View in detail
              </button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
