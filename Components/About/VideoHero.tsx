"use client";
import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import FadeIn from "@/utils/common";

const VideoHero = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play().catch(() => setIsPlaying(false));
    } else {
      video.pause();
    }
  }, [isPlaying]);

  return (
    <section className="bg-[#0a0a0a] py-20 lg:py-28 overflow-hidden pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TEXT */}
        <div className="text-center mb-14">
          <FadeIn>
            <span className="bg-white/5 border border-white/10 text-neutral-400 px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-widest mb-6 inline-block">
              About us
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6 tracking-tight leading-[1.1]">
              Crafting{" "}
              <span className="text-neutral-500 italic font-serif">spaces</span>{" "}
              that <br className="hidden md:block" />
              blend style and comfort
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              We turn ideas into inviting, functional spaces thoughtfully
              designed with purpose, and beautifully styled for the way you live
              every day.
            </p>
          </FadeIn>
        </div>

        {/* VIDEO */}
        <div className="relative w-full h-[420px] sm:h-[420px] md:h-[400px] lg:h-[420px] rounded-[30px] md:rounded-[50px] overflow-hidden bg-neutral-900 shadow-2xl border border-white/10 group">
          <video
            ref={videoRef}
            className="w-full h-full object-cover transition-transform duration-[40s] ease-linear scale-105"
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
          >
            <source
              src="https://framerusercontent.com/assets/F5Mg4MHpMKS8NBDfojNHnmN9qwQ.mp4"
              type="video/mp4"
            />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors pointer-events-none" />

          {/* Button */}
          <div className="absolute inset-0 flex items-end justify-center pb-10">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-black/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-500 hover:scale-110 active:scale-90"
            >
              {isPlaying ? (
                <Pause size={22} />
              ) : (
                <Play size={22} className="ml-1" />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoHero;
