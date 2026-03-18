'use client'
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
  const [currentPage, setCurrentPage] = useState("home");

  // Scroll to top on page change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-[#141414] text-white font-sans selection:bg-white/20">
      {/* <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}

      <main>
        {currentPage === "home" ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HeroSection />
            <LogoTicker />
            <WhoWeAre />
            <ServicesSection />
            <RecentWork />
            <Testimonials />
            <TeamSection />
            <FAQ />
            <CTASection />
          </motion.div>
        ) : (
          <motion.div
            key="contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Contact />
          </motion.div>
        )}
      </main>

      {/* <Footer setCurrentPage={setCurrentPage} /> */}
    </div>
  );
}
