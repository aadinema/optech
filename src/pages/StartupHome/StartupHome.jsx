import React from "react";
import HeroSections from "../TechAgency/HeroSection";
import ServicesSection from "../TechAgency/ServicesSection";
import AboutSection from "../TechAgency/AboutSection";
import ProjectsSection from "../TechAgency/ProjectsSection";
import PricingSection from "./PricingSection";

const StartupHome = () => {
  return (
    <main>
      <HeroSections />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <PricingSection />
    </main>
  );
};

export default StartupHome;
