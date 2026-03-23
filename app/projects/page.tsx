"use client";
import React from "react";
import Link from "next/link";
import { projects } from "@/utils/projects";
import FadeIn from "@/utils/common";
import { ArrowUpRight } from "lucide-react";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-[#141414]">
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="bg-white/5 border border-white/10 text-neutral-400 px-4 py-1.5 rounded-full text-sm font-medium uppercase tracking-widest mb-8 inline-block">
              Our projects
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white mb-8 tracking-tighter leading-[0.95]">
              Explore projects that <br />
              <span className="text-neutral-500 italic font-serif">
                redefine
              </span>{" "}
              living.
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl font-light leading-relaxed border-l border-white/10 pl-8">
              Discover curated spaces brought to life through creativity and
              purpose.
            </p>
          </FadeIn>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
        {projects.map((project, index) => (
          <FadeIn key={project.slug} delay={index * 0.1}>
            <Link href={`/projects/${project.slug}`} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-neutral-900">
                <img
                  src={project.mainImage}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />

                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm">
                    View Project
                  </span>
                  <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center">
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-between items-start">
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
    // </div>
  );
};

export default ProjectsPage;
