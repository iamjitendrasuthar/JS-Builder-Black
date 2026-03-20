"use client";
import React from "react";
import OurStory from "@/Components/About/OurStory";
import MissionSection from "@/Components/About/MissionSection";
import ProvenResults from "@/Components/About/ProvenResult";
import TeamSection from "@/Components/Homepage/TeamSection";
import VideoHero from "@/Components/About/VideoHero";

const about = () => {
  return (
    <div className="min-h-screen text-white font-sans selection:bg-white/20">
      <VideoHero />
      <OurStory />
      <MissionSection />
      {/* <ProvenResults /> */}
      <TeamSection />{" "}
    </div>
  );
};

export default about;
