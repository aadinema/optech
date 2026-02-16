import React from "react";
import HeroSections from "./HeroSection";
import ServicesSection from "./ServicesSection";
import AboutSection from "./AboutSection";
import WhyChooseUs from "./WhyChooseUs";
import ProjectsSection from "./ProjectsSection";
import TestimonialsSection from "./TestimonialsSection";
import BlogSection from "./BlogSection";
import CTASection from "./CTASection";

const TechAgency = () => {
  return (
    <main>
      <HeroSections />
      <ServicesSection />
      <AboutSection />
      <WhyChooseUs />
      <ProjectsSection />
      <TestimonialsSection />
      <BlogSection />
      <CTASection />
    </main>
  );
};

export default TechAgency;
