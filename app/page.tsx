"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import Navbar from "../Components/Navbar";
import HeroSection from "../Components/Homepage/HeroSection";
import LogoTicker from "../Components/Homepage/LogoTicker";
import WhoWeAre from "../Components/Homepage/WhoWeAre";
import ServicesSection from "../Components/Homepage/ServicesSection";
import RecentWork from "../Components/Homepage/RecentWork";
import Testimonials from "../Components/Homepage/Testimonials";
import TeamSection from "../Components/Homepage/TeamSection";
import FAQ from "../Components/Homepage/FAQ";
import CTASection from "../Components/Homepage/CTASection";
import ContactView from "../Components/ContactView";
import Footer from "../Components/Footer";
import Contact from "./contact/page";

export default function App() {
  return (
    <div className="min-h-screen bg-[#141414] text-white font-sans selection:bg-white/20">
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
      </main>
    </div>
  );
}
