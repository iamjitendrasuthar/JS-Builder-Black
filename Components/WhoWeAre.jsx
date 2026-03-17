import FadeIn from "@/utils/common";

const WhoWeAre = () => {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <span className="text-neutral-400 font-medium text-sm tracking-wider uppercase mb-6 block">
            Who we are
          </span>
          <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-20">
            We're a team of designers, architects, and builders turning spaces
            into works of art. From interiors to landscapes, we deliver lasting
            results tailored to your vision.
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-16">
          {[
            { value: "15+", label: "Years of experience" },
            { value: "25+", label: "Talented team members" },
            { value: "69+", label: "Completed projects" },
            { value: "9+", label: "Industry awards won" },
          ].map((stat, i) => (
            <FadeIn
              key={i}
              delay={i * 0.1}
              className="text-left md:text-center"
            >
              <div className="text-4xl md:text-5xl font-medium text-white mb-2">
                {stat.value}
              </div>
              <div className="text-neutral-400 text-sm">{stat.label}</div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
