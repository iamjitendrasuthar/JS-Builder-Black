"use client";
import React from "react";
import Link from "next/link";
import { projects } from "@/utils/projects";
import FadeIn from "@/utils/common";
import { ArrowUpRight } from "lucide-react";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <section className="py-20 lg:py-28 overflow-hidden pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <FadeIn>
              <span className="bg-white/5 border border-white/10 text-neutral-400 px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-widest mb-6 inline-block">
                Our projects
              </span>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-6 tracking-tight leading-[1.1]">
                Explore projects{" "}
                <span className="text-neutral-500 italic font-serif">
                  redefine
                </span>{" "}
                <br className="hidden md:block" />
                living.
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Discover curated spaces brought to life through creativity and
                purpose, thoughtfully designed for the way you live every day.
              </p>
            </FadeIn>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {projects.map((project, index) => (
              <FadeIn key={project.slug} delay={index * 0.1}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[30px] md:rounded-[40px] bg-neutral-900 border border-white/10 shadow-2xl">
                    <img
                      src={project.mainImage}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

                    {/* Hover Button Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <span className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm">
                        View Project
                      </span>
                      <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center">
                        <ArrowUpRight size={24} />
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="mt-6 flex justify-between items-start px-2">
                    <div>
                      <h3 className="text-2xl font-medium">{project.title}</h3>
                      <p className="text-neutral-500 uppercase tracking-widest text-xs mt-1">
                        {project.category} — {project.location}
                      </p>
                    </div>
                    <span className="text-neutral-600 font-serif italic text-xl">
                      {project.year}
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
