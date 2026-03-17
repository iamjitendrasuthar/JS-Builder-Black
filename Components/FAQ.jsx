import FadeIn from "@/utils/common";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "Can I be actively involved in the design process?",
      a: "Yes, we encourage collaboration. Your input ensures the final result truly reflects your style and needs.",
    },
    {
      q: "What materials do you usually use for outdoor spaces?",
      a: "We prioritize durable, weather-resistant materials like natural stone, composite decking, and locally sourced timber.",
    },
    {
      q: "How do I begin a new home project with your team?",
      a: "Simply reach out via our contact form to schedule an initial consultation where we'll discuss your vision and budget.",
    },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="bg-white/10 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 inline-block">
            FAQs
          </span>
          <h2 className="text-4xl font-medium text-white mb-4">
            Frequently asked questions
          </h2>
          <p className="text-neutral-400">
            Find helpful answers about our services, detailed process, and
            bringing your vision to life.
          </p>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
              >
                <div className="px-6 py-5 flex justify-between items-center">
                  <h4 className="text-lg font-medium text-white">{faq.q}</h4>
                  <ChevronDown
                    className={`text-neutral-400 transition-transform duration-300 ${openIdx === i ? "rotate-180" : ""}`}
                  />
                </div>
                <AnimatePresence>
                  {openIdx === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-5 text-neutral-400"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQ;
