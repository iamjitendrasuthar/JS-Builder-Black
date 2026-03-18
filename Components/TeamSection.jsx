import React from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: "Noah Bennett",
      role: "Project Manager",
      img: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=800&q=80",
    },
    {
      name: "James Benjamin",
      role: "Creative Director",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    },
    {
      name: "Adam Reeds",
      role: "Creative Director",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-white selection:text-black">
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-24 space-y-4">
          <div className="flex justify-center">
          <span className="bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 inline-block">
              Our team
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] pt-4">
            The dedicated <br /> team behind the craft
          </h1>
          
          <p className="text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto font-light leading-relaxed pt-2">
            Our team unites designers, architects, and builders who care about every detail.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group bg-[#111] rounded-[2.5rem] p-6 transition-all duration-500 hover:bg-[#141414]"
            >
              {/* The Exact Arch Shape Image Container */}
              <div className="relative mb-8 overflow-hidden rounded-t-[140px] rounded-b-[2rem] aspect-[1/1.2] bg-[#1a1a1a]">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
              </div>

              {/* Member Details */}
              <div className="text-center space-y-1.5 pb-2">
                <h3 className="text-2xl font-semibold tracking-tight">
                  {member.name}
                </h3>
                <p className="text-neutral-500 font-normal text-base">
                  {member.role}
                </p>
              </div>

              {/* Social Icons - Updated to match X, Instagram, LinkedIn style */}
              <div className="flex justify-center items-center gap-6 mt-6 text-neutral-400 pb-2">
                <a href="#" className="hover:text-white transition-colors duration-300">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  <Instagram size={20} strokeWidth={2} />
                </a>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  <Linkedin size={20} strokeWidth={2} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default TeamSection;