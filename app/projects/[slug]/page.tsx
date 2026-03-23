"use client";
import React from "react";
import { projects } from "@/utils/projects";
import FadeIn from "@/utils/common";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, MapPin, Calendar, Maximize, Palette } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams();
  const router = useRouter();

  const project = projects.find((p) => p.slug === slug);

  if (!project)
    return <div className="text-white p-20">Project not found.</div>;

  return (
    <div className="min-h-screen bg-[#141414] text-white pb-20">
      {/* Hero Image */}
      <div className="h-[70vh] w-full relative">
        <img
          src={project.mainImage}
          className="w-full h-full object-cover"
          alt={project.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />

        <div className="absolute inset-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative">
            <button
              onClick={() => router.back()}
              className="absolute top-[env(safe-area-inset-top,5rem)] sm:top-32 left-4 sm:left-6 lg:left-8 z-50 flex items-center gap-2 text-sm uppercase tracking-widest bg-black/40 backdrop-blur-lg border border-white/10 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all"
            >
              <ArrowLeft size={16} /> Back
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        {" "}
        <button
          onClick={() => router.back()}
          className="absolute top-[calc(env(safe-area-inset-top)-22rem)] left-4 z-50 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 backdrop-blur-lg border border-white/10 hover:bg-white hover:text-black transition-all sm:hidden"
        >
          <ArrowLeft size={18} />
        </button>
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-8">
              <h1 className="text-5xl md:text-7xl font-medium tracking-tighter">
                {project.title}
              </h1>
              <p className="text-neutral-400 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
                {project.description}
              </p>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-12">
                {project.gallery.map((img, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-2xl aspect-square bg-neutral-900"
                  >
                    <img
                      src={img}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      alt="Gallery image"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Sidebar Details */}
            <div className="space-y-8">
              <div className="bg-[#1f1f1f] border border-white/5 p-8 rounded-[40px] sticky top-32">
                <h3 className="text-xl font-medium mb-6 pb-4 border-b border-white/10">
                  Project Details
                </h3>

                <div className="space-y-6">
                  <DetailItem
                    icon={<MapPin size={18} />}
                    label="Location"
                    value={project.location}
                  />
                  <DetailItem
                    icon={<Calendar size={18} />}
                    label="Year"
                    value={project.year}
                  />
                  <DetailItem
                    icon={<Maximize size={18} />}
                    label="Area"
                    value={project.details.area}
                  />
                  <DetailItem
                    icon={<Palette size={18} />}
                    label="Concept"
                    value={project.details.concept}
                  />
                </div>

                <div className="mt-10">
                  <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4 font-bold">
                    Materials Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.details.materials.map((m) => (
                      <span
                        key={m}
                        className="text-[10px] px-3 py-1 bg-white/5 border border-white/10 rounded-full uppercase"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

// Helper component for sidebar
const DetailItem = ({
  icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) => (
  <div className="flex items-center gap-4">
    <div className="text-neutral-500">{icon}</div>
    <div>
      <p className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold">
        {label}
      </p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  </div>
);

export default ProjectDetail;
