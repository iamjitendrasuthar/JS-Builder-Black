"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";

/* ✅ FadeIn Animation */
const FadeIn = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.21, 0.45, 0.32, 0.9],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const ContactView = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* ✅ Email Send Logic */
  const sendEmail = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    const toastId = toast.loading("Sending your message...");

    const sendRequest = () =>
      emailjs.sendForm("service_yh5gznc", "template_aa6vn4r", formRef.current, {
        publicKey: "d0D0yVwnwK4bBx3-I",
      });

    try {
      await sendRequest();
      toast.success("Message sent successfully ✅", { id: toastId });
      formRef.current.reset();
    } catch (err) {
      try {
        await new Promise((res) => setTimeout(res, 2000));
        await sendRequest();
        toast.success("Message sent successfully ✅", { id: toastId });
        formRef.current.reset();
      } catch {
        toast.error("Network issue 😢 Please try again.", { id: toastId });
      }
    }

    setIsSubmitting(false);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen selection:bg-white selection:text-black">
      {/* ✅ Toast */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#1f1f1f",
            color: "#fff",
            borderRadius: "12px",
            padding: "16px",
          },
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <span className="bg-white/5 border border-white/10 text-neutral-400 px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-widest mb-6 inline-block">
            Contact us
          </span>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white mb-8 tracking-tight leading-[1.1]">
            Let's bring your <br />
            <span className="text-neutral-500 italic font-serif">
              dream space
            </span>{" "}
            to life
          </h1>

          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Reach out to discuss your ideas, ask a question, or request a quote
            for your next project.
          </p>
        </FadeIn>

        {/* ✅ FORM */}
        <FadeIn delay={0.2}>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="bg-[#1f1f1f] border border-white/5 rounded-[40px] p-8 md:p-16 shadow-2xl mb-12 lg:mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div className="flex flex-col gap-3">
                <label className="text-neutral-400 text-sm uppercase tracking-widest">
                  Full name
                </label>
                <input
                  name="name"
                  required
                  type="text"
                  placeholder="e.g. Jitendra Suthar"
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/30"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-neutral-400 text-sm uppercase tracking-widest">
                  Email address
                </label>
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="jitendra@example.com"
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/30"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-neutral-400 text-sm uppercase tracking-widest">
                  Phone number
                </label>
                <input
                  name="phone"
                  required
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-white/30"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-neutral-400 text-sm uppercase tracking-widest">
                  Service type
                </label>
                <div className="relative">
                  <select
                    name="service"
                    className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white w-full appearance-none"
                  >
                    <option className="bg-[#1f1f1f]">Interior design</option>
                    <option className="bg-[#1f1f1f]">
                      Architectural design
                    </option>
                    <option className="bg-[#1f1f1f]">Space planning</option>
                  </select>
                  <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-neutral-500" />
                </div>
              </div>

              <div className="flex flex-col gap-3 md:col-span-2">
                <label className="text-neutral-400 text-sm uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white resize-none focus:outline-none focus:border-white/30"
                />
              </div>

              <div className="md:col-span-2 flex justify-center lg:justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-12 py-5 rounded-full bg-white text-black font-bold transition-all w-full md:w-auto text-lg shadow-xl cursor-pointer ${
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:scale-105 active:scale-95"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </div>
            </div>
          </form>
        </FadeIn>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              icon: <Mail />,
              title: "Email us at",
              value: "hello@jsbuilder.com",
              link: "mailto:hello@jsbuilder.com",
            },
            {
              icon: <Phone />,
              title: "Call us",
              value: "+91 98765 43210",
              link: "tel:+919876543210",
            },
            {
              icon: <MapPin />,
              title: "Office",
              value: "Rajasthan, India",
              link: "#",
            },
          ].map((item, i) => (
            <FadeIn key={i} delay={0.3 + i * 0.1}>
              <div className="bg-[#1f1f1f] border border-white/5 rounded-[32px] p-10 text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-white">
                  {React.cloneElement(item.icon, { size: 24 })}
                </div>
                <h4 className="text-neutral-500 text-sm uppercase tracking-widest mb-3">
                  {item.title}
                </h4>
                <p className="text-white text-xl font-medium">{item.value}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactView;
