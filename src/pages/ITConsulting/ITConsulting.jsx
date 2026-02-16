import React from "react";
import AboutSection from "./AboutSection";
import ServicesSliderSection from "./ServicesSliderSection";
import ProjectsSliderSection from "./ProjectsSliderSection";
import ProcessSection from "./ProcessSection";
import TestimonialsSection from "./TestimonialsSection";
import BlogSection from "./BlogSection";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";

const ITConsulting = () => {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ServicesSliderSection />
      <ProjectsSliderSection />
      <ProcessSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
    </main>
  );
};

export default ITConsulting;
