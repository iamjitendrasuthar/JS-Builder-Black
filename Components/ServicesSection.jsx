import React from "react";

// Animation behavior ki nakal karne ke liye simple FadeIn component
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

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Architectural design",
      description:
        "We design structurally sound, visually striking spaces that blend function with timeless architecture.",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=400",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Interior Design",
      description:
        "We design functional, expressive interiors that bring purpose into every corner of your space.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=400",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-10 h-10"
          transform="rotate(45)"
        >
          <rect x="4" y="4" width="6" height="6" rx="1" />
          <rect x="14" y="4" width="6" height="6" rx="1" />
          <rect x="4" y="14" width="6" height="6" rx="1" />
          <rect x="14" y="14" width="6" height="6" rx="1" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Space Planning",
      description:
        "We design optimized layouts that maximize flow, function, and the full potential of your available space.",
      image:
        "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=400",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-10 h-10"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <rect x="7" y="7" width="6" height="4" rx="1" />
          <path strokeLinecap="round" d="M3 15h18" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Space Decoration",
      description:
        "We design beautifully styled spaces with curated decor that enhances character, comfort, and atmosphere.",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=400",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 8l2-6h4l2 6H8zM12 8v14M9 22h6"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#121212] py-24 font-sans text-white min-h-screen">
      {/* Fade animation ke liye inline styles */}
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
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeIn>
            <span className="inline-block bg-white/5  rounded-full px-5 py-1.5 text-neutral-400 font-medium text-sm mb-6">
              Our services
            </span>

            <h2 className="text-4xl md:text-[44px] font-medium text-white leading-tight mb-6 tracking-tight">
              Services that shape spaces
            </h2>

            <p className="text-[#a3a3a3] text-lg max-w-2xl mx-auto">
              Building new or upgrading? We craft stylish, inspiring spaces that
              feel uniquely yours.
            </p>
          </FadeIn>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1}>
              {/* Card height kam karne ke liye padding aur min-height adjust ki gayi hai */}
              <div className="group relative bg-[#1C1C1C] rounded-[32px] p-8 overflow-hidden flex flex-col items-start min-h-[260px] md:min-h-[280px] border border-white/5 transition-colors duration-500 hover:bg-[#222222]">
                {/* Content Area */}
                <div className="relative z-20 flex-1 flex flex-col items-start max-w-[100%] sm:max-w-[70%]">
                  {/* Icon - Circle container aur SVG ki size badhai gayi hai */}
                  <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full border border-white/10 flex items-center justify-center mb-6 text-neutral-300">
                    {service.icon}
                  </div>

                  {/* Text */}
                  <h3 className="text-2xl md:text-[28px] font-medium text-white mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-[#A3A3A3] text-base md:text-[17px] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Button */}

                  <button
                    className="px-4 py-2 rounded-full bg-[#1e1e1e] text-white font-medium 
transition-all duration-300 hover:bg-white/20 hover:backdrop-blur-md 
border border-white/10 hover:border-white/30 text-base shadow-lg cursor-pointer"
                  >
                    View services
                  </button>
                </div>

                {/* Hover Image Animation */}
                <div className="absolute top-25 right-0 w-[180px] h-[130px] md:w-[220px] md:h-[160px] rounded-l-full overflow-hidden transform translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:translate-x-0 group-hover:-translate-y-1/2 group-hover:opacity-100 transition-all duration-500 ease-out pointer-events-none z-10 hidden sm:block">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Behtar blending ke liye subtle overlay */}
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
