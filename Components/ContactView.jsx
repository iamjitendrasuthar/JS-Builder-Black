import FadeIn from "@/utils/common";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";

const ContactView = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <span className="text-neutral-400 font-medium text-sm tracking-wider uppercase mb-4 block">
            Contact us
          </span>
          <h1 className="text-5xl md:text-6xl font-medium text-white mb-6">
            Let's bring your
            <br />
            dream space to life
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Reach out to discuss your ideas, ask a question, or request a quote.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form className="bg-[#111] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-medium">
                  Full name
                </label>
                <input
                  type="text"
                  defaultValue="Sarah Ahmed"
                  className="bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-medium">
                  Email address
                </label>
                <input
                  type="email"
                  defaultValue="sarah.ahmed@gmail.com"
                  className="bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-medium">
                  Phone number
                </label>
                <input
                  type="tel"
                  defaultValue="+1 (347) 555-0198"
                  className="bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-white/30 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-white text-sm font-medium">
                  Service type
                </label>
                <div className="relative">
                  <select className="bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-white/30 transition-colors w-full appearance-none">
                    <option>Interior design</option>
                    <option>Architectural design</option>
                    <option>Landscape design</option>
                  </select>
                  <ChevronDown
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
                    size={18}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-white text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Let us know how we can help you..."
                  className="bg-[#1A1A1A] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                ></textarea>
              </div>

              <div className="md:col-span-2 flex justify-end">
                <button
                  type="button"
                  className="px-8 py-3.5 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors w-full md:w-auto"
                >
                  Send message
                </button>
              </div>
            </div>
          </form>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeIn
            delay={0.3}
            className="bg-[#111] border border-white/5 rounded-3xl p-8 text-center flex flex-col items-center"
          >
            <div className="w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center border border-white/10 mb-6">
              <Mail className="text-white" size={20} />
            </div>
            <h4 className="text-neutral-400 text-sm mb-2">Email us at</h4>
            <a
              href="mailto:hello@yourstudio.com"
              className="text-white text-lg font-medium hover:underline"
            >
              hello@yourstudio.com
            </a>
          </FadeIn>

          <FadeIn
            delay={0.4}
            className="bg-[#111] border border-white/5 rounded-3xl p-8 text-center flex flex-col items-center"
          >
            <div className="w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center border border-white/10 mb-6">
              <Phone className="text-white" size={20} />
            </div>
            <h4 className="text-neutral-400 text-sm mb-2">Give us a call</h4>
            <a
              href="tel:+13105552345"
              className="text-white text-lg font-medium hover:underline"
            >
              +1 (310) 555-2345
            </a>
          </FadeIn>

          <FadeIn
            delay={0.5}
            className="bg-[#111] border border-white/5 rounded-3xl p-8 text-center flex flex-col items-center"
          >
            <div className="w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center border border-white/10 mb-6">
              <MapPin className="text-white" size={20} />
            </div>
            <h4 className="text-neutral-400 text-sm mb-2">Visit our office</h4>
            <p className="text-white text-lg font-medium">
              123 Street, Los Angeles, CA
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
