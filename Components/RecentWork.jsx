import React from "react";

// Animation behavior ki nakal karne ke liye simple FadeIn component
const FadeIn = ({ children, delay = 0, className = "", direction = "up" }) => {
  const directionClass =
    direction === "left"
      ? "animate-fade-in-left"
      : direction === "right"
        ? "animate-fade-in-right"
        : "animate-fade-in-up";

  return (
    <div
      className={`${directionClass} ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationFillMode: "both",
      }}
    >
      {children}
    </div>
  );
};

const RecentWork = () => {
  const projects = [
    {
      title: "Mediterranean Villa Refresh",
      desc: "A sun-soaked villa received a modern yet respectful upgrade. With a focus on natural materials, elegant minimalism, and spatial flow, we revived this spacious property into a timeless family retreat that honors Mediterranean charm while embracing modern living.",
      type: "Villa Renovation",
      location: "Marbella, Spain",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000",
      shape: "rounded-t-full rounded-b-[32px]",
    },
    {
      title: "Modern Living Room Redesign",
      desc: "A compact city living room was completely reimagined to enhance comfort, maximize light, and express modern elegance. Through smart furnishing, subtle color tones, and thoughtful textures, we created a welcoming, cozy interior.",
      type: "Interior Design",
      location: "Chicago, Illinois",
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000",
      shape: "rounded-t-full rounded-b-[32px]",
    },
  ];

  return (
    <section className="bg-[#121212] py-24 font-sans text-white min-h-screen">
      {/* Animations ke liye inline styles */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
          .animate-fade-in-left { animation: fadeInLeft 0.8s ease-out forwards; opacity: 0; }
          .animate-fade-in-right { animation: fadeInRight 0.8s ease-out forwards; opacity: 0; }
        `}
      </style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <FadeIn className="text-center mb-20">
          <span className="inline-block bg-white/5 rounded-full px-5 py-1.5 text-neutral-400 font-medium text-sm mb-6">
            Recent Work
          </span>
          <h2 className="text-4xl md:text-[44px] font-medium text-white mb-6 tracking-tight leading-tight">
            A Showcase of
            <br />
            our recent projects
          </h2>
          <p className="text-[#a3a3a3] text-lg max-w-2xl mx-auto">
            From idea to execution, our work is made to elevate everyday living.
          </p>
        </FadeIn>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((proj, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="bg-[#1C1C1C] rounded-[32px] p-8 md:p-8 lg:p-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 border border-white/5">
                {/* Left Text Content */}
                <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col items-start">
                  <h3 className="text-3xl md:text-[36px] font-medium text-white mb-5 tracking-tight">
                    {proj.title}
                  </h3>

                  <p className="text-[#A3A3A3] text-base md:text-[17px] leading-relaxed mb-8">
                    {proj.desc}
                  </p>

                  {/* Tags (Type & Location) */}
                  <div className="flex flex-wrap items-center gap-8 mb-10">
                    <div className="flex items-center gap-2.5 text-white font-medium text-[15px]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M12 2L22 12L12 22L2 12L12 2Z" />
                      </svg>
                      {proj.type}
                    </div>
                    <div className="flex items-center gap-2.5 text-white font-medium text-[15px]">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      {proj.location}
                    </div>
                  </div>

                  {/* Button */}
                  <button className="px-6 py-2.5 rounded-full bg-[#262626] border border-white/5 text-white text-sm font-medium transition-colors hover:bg-[#333333] cursor-pointer">
                    View in detail
                  </button>
                </div>

                {/* Right Image Content */}
                <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
                  <div className="aspect-square md:aspect-[4/3.5] lg:aspect-square w-full lg:w-[80%] relative">
                    {" "}
                    <img
                      src={proj.img}
                      alt={proj.title}
                      className={`w-full h-full object-cover rounded-b-[40px] ${proj.shape}`}
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
