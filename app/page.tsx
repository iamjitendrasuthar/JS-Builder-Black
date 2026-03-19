"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import LogoTicker from "../Components/LogoTicker";
import WhoWeAre from "../Components/WhoWeAre";
import ServicesSection from "../Components/ServicesSection";
import RecentWork from "../Components/RecentWork";
import Testimonials from "../Components/Testimonials";
import TeamSection from "../Components/TeamSection";
import FAQ from "../Components/FAQ";
import CTASection from "../Components/CTASection";
import ContactView from "../Components/ContactView";
import Footer from "../Components/Footer";
import Contact from "./contact/page";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-white/20">
      <main>
        <HeroSection />
        <LogoTicker />
        <WhoWeAre />
        <ServicesSection />
        <RecentWork />
        <Testimonials />
        <TeamSection />
        <FAQ />
        <CTASection />
        <Contact />
      </main>
    </div>
  );
}
