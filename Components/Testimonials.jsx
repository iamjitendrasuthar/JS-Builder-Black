import FadeIn from "@/utils/common";

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#080808] border-y border-white/5 text-center">
      <FadeIn>
        <span className="text-neutral-400 font-medium text-sm tracking-wider uppercase mb-4 block">
          Testimonials
        </span>
        <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
          Hear from our clients
        </h2>
        <p className="text-neutral-400 text-lg max-w-xl mx-auto mb-16">
          Real feedback from real clients who trusted us with their spaces.
        </p>
      </FadeIn>
    </section>
  );
};

export default Testimonials;
