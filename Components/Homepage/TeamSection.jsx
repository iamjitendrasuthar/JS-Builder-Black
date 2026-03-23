import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.21, 0.45, 0.32, 0.9],
      },
    },
  };

  return (
    <div className="text-white font-sans selection:bg-white selection:text-black">
      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} // Jab 30% dikhega tab chalega
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20 space-y-6"
        >
          <div className="flex justify-center">
            <span className="bg-white/5 border border-white/10 text-neutral-400 px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-widest">
              Our team
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1]">
            The dedicated <br />
            team behind the{" "}
            <span className="text-neutral-500 italic font-serif">craft</span>
          </h2>

          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Our team unites designers, architects, and builders who care about
            every detail.
          </p>
        </motion.div>

        {/* Team Grid with Staggering */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-[#1f1f1f] rounded-[40px] p-6 border border-white/5 transition-all duration-500 hover:border-white/10 hover:bg-[#1a1a1a]"
            >
              {/* Image Container */}
              <div className="relative mb-8 overflow-hidden rounded-t-[140px] rounded-b-[40px] aspect-[4/5] bg-[#1a1a1a] border border-white/5">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Member Details */}
              <div className="text-center space-y-2 pb-2">
                <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white">
                  {member.name}
                </h3>
                <p className="text-neutral-500 font-medium text-base uppercase tracking-wider">
                  {member.role}
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center items-center gap-6 mt-6 text-neutral-500 pb-4">
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-5 w-5 fill-current"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default TeamSection;
