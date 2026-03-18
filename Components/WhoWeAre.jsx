// import FadeIn from "@/utils/common";

// const WhoWeAre = () => {
//   return (
//     <section className="py-24">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <FadeIn>
//           <span className="text-neutral-400 font-medium text-sm tracking-wider uppercase mb-6 block">
//             Who we are
//           </span>
//           <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight mb-20">
//             We're a team of designers, architects, and builders turning spaces
//             into works of art. From interiors to landscapes, we deliver lasting
//             results tailored to your vision.
//           </h2>
//         </FadeIn>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-16">
//           {[
//             { value: "15+", label: "Years of experience" },
//             { value: "25+", label: "Talented team members" },
//             { value: "69+", label: "Completed projects" },
//             { value: "9+", label: "Industry awards won" },
//           ].map((stat, i) => (
//             <FadeIn
//               key={i}
//               delay={i * 0.1}
//               className="text-left md:text-center"
//             >
//               <div className="text-4xl md:text-5xl font-medium text-white mb-2">
//                 {stat.value}
//               </div>
//               <div className="text-neutral-400 text-sm">{stat.label}</div>
//             </FadeIn>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhoWeAre;
import React from "react";

// Simple FadeIn component to mimic the intended animation behavior
const FadeIn = ({ children, delay = 0, className = "" }) => {
  return (
    <div
      className={`animate-fade-in-up ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationFillMode: "both",
      }}
    >
      {children}
    </div>
  );
};

const WhoWeAre = () => {
  return (
    <section className="bg-[#121212] py-24 font-sans text-white min-h-screen">
      {/* Inline styles for the fade animation */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0;
          }
        `}
      </style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Section */}
        <div className="text-center relative max-w-4xl mx-auto mb-24">
          <FadeIn>
            {/* Floating decorative image */}
            <div className="absolute -top-10 left-0 hidden md:block w-16 h-20 rounded-t-full rounded-b-md overflow-hidden border-2 border-white/10 opacity-90 transform -rotate-6">
              <img
                src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=200"
                alt="House illustration"
                className="w-full h-full object-cover"
              />
            </div>

            <span className="bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 inline-block">
              Who we are
            </span>

            <h2 className="text-3xl md:text-[44px] font-medium text-white leading-[1.15] mb-20 tracking-tight">
              We're a team of designers, architects, and builders turning spaces
              into works of art. From interiors to landscapes, we deliver
              lasting results tailored to your vision.
            </h2>
          </FadeIn>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-left md:text-left">
            {[
              { value: "15+", label: "Years of experience" },
              { value: "25+", label: "Talented team members" },
              { value: "100+", label: "Completed projects" },
              { value: "9+", label: "Industry awards won" },
            ].map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1} className="flex flex-col">
                <div className="text-[40px] md:text-5xl font-medium text-white mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[#a3a3a3] text-sm md:text-base tracking-wide">
                  {stat.label}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Bottom Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Dark Card */}
          <FadeIn
            delay={0.3}
            className="bg-[#1C1C1C] rounded-[32px] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between min-h-[420px]"
          >
            <div className="relative z-10">
              <h3 className="text-white text-[22px] leading-snug mb-8 max-w-[90%] font-medium tracking-tight">
                We design with intention creating spaces that reflect your
                style, not just trends.
              </h3>
              <ul className="space-y-3.5 text-[#A3A3A3] text-[15px]">
                <li>1: Balance of style and function</li>
                <li>2: Timeless results, built to last</li>
                <li>3: Thoughtful, detail driven process</li>
              </ul>
            </div>

            {/* Bottom Graphics Area */}
            <div className="mt-16 relative flex items-end">
              {/* Overlapping Arches */}
              <div className="flex items-end -space-x-4 relative z-10 ml-4 pb-4">
                <div className="w-[60px] h-[70px] rounded-t-full border-[4px] border-[#1C1C1C] overflow-hidden relative z-0">
                  <img
                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=150"
                    alt="Interior detail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[70px] h-[85px] rounded-t-full border-[4px] border-[#1C1C1C] overflow-hidden relative z-10 mb-3 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=150"
                    alt="Exterior building"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[60px] h-[70px] rounded-t-full border-[4px] border-[#1C1C1C] overflow-hidden relative z-0">
                  <img
                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=150"
                    alt="Living room"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Faded Background Text */}
              <div className="absolute -bottom-8 left-0 text-[110px] md:text-[130px] font-bold text-white/[0.03] leading-none pointer-events-none select-none tracking-tighter">
                JSBuilder*
              </div>
            </div>
          </FadeIn>

          {/* Right Image Card */}
          <FadeIn
            delay={0.4}
            className="rounded-[32px] overflow-hidden min-h-[420px] h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&q=80&w=1200"
              alt="Bright modern interior with long dining table"
              className="w-full h-full object-cover"
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
