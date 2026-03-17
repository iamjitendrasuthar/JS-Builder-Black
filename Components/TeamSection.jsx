import FadeIn from "@/utils/common";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Noah Bennett",
      role: "Project Manager",
      img: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=600&q=80",
    },
    {
      name: "James Benjamin",
      role: "Creative Director",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    },
    {
      name: "Adam Reeds",
      role: "Creative Director",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-20">
          <span className="text-neutral-400 font-medium text-sm tracking-wider uppercase mb-4 block">
            Our team
          </span>
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
            The dedicated
            <br />
            team behind the craft
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Our team unites designers architects, and builders who care about
            every detail.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <FadeIn
              key={i}
              delay={i * 0.1}
              className="bg-[#111] border border-white/5 rounded-[2rem] p-6 text-center hover:bg-[#151515] transition-colors group"
            >
              <div className="aspect-[4/5] w-full mb-6 overflow-hidden rounded-t-[100px] rounded-b-2xl border border-white/5">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-medium text-white mb-1">
                {member.name}
              </h3>
              <p className="text-neutral-500 text-sm mb-6">{member.role}</p>
              <div className="flex justify-center gap-4 text-neutral-400">
                <a href="#" className="hover:text-white transition-colors">
                  <Twitter size={18} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
