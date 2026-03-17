import { motion, AnimatePresence } from 'framer-motion';

const LogoTicker = () => {
  const logos = ["IPSUM", "LOREM", "DOLOR", "SIT", "AMET", "CONSECTETUR"];

  return (
    <div className="py-12 border-y border-white/5 overflow-hidden bg-[#0d0d0d]">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex gap-20 items-center px-10"
        >
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <span
              key={i}
              className="text-2xl font-bold text-white/30 tracking-widest uppercase"
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoTicker;
