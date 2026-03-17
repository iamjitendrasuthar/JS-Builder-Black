import FadeIn from "@/utils/common";

const RecentWork = () => {
  const projects = [
    {
      title: "Modern Farmhouse Revival Design",
      desc: "A complete transformation of a dated residence into a bright, open farmhouse-style home. We redesigned the layout for better flow, introduced warm-toned wood, modern fixtures, and created a harmonious blend of rustic charm.",
      tags: ["Residential Renovation", "Austin, Texas"],
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1000&q=80",
      shape: "rounded-t-[200px] rounded-b-3xl",
    },
    {
      title: "Modern Living Room Redesign",
      desc: "A compact city living room was completely reimagined to enhance comfort, maximize light, and express modern elegance. Through smart furnishing, subtle color tones, and thoughtful textures, we created a welcoming, cozy interior.",
      tags: ["Interior Design", "Chicago, Illinois"],
      img: "https://images.unsplash.com/photo-1583847268964-b28ce8f25f15?w=1000&q=80",
      shape: "rounded-t-full rounded-b-3xl",
    },
  ];

  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-20">
          <span className="text-neutral-400 font-medium text-sm tracking-wider uppercase mb-4 block">
            Recent work
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
            A Showcase of
            <br />
            our recent projects
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            From idea to execution, our work is made to elevate everyday living.
          </p>
        </FadeIn>

        <div className="space-y-32">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <FadeIn className="order-2 lg:order-1" direction="right">
                <h3 className="text-3xl md:text-4xl font-medium text-white mb-6">
                  {proj.title}
                </h3>
                <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                  {proj.desc}
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  {proj.tags.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-neutral-300 text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                      {tag}
                    </div>
                  ))}
                </div>
                <button className="px-6 py-3 rounded-full bg-[#1A1A1A] border border-white/10 text-white hover:bg-white hover:text-black transition-colors">
                  View in detail
                </button>
              </FadeIn>
              <FadeIn
                className="order-1 lg:order-2 h-[500px] w-full"
                direction="left"
              >
                <img
                  src={proj.img}
                  alt={proj.title}
                  className={`w-full h-full object-cover border border-white/10 ${proj.shape}`}
                />
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default RecentWork;
