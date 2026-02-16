import React, { lazy, Suspense } from "react";
import AboutHero from "./AboutHero";
import AboutContent from "./AboutContent";
import AboutStats from "./AboutStats";

const AboutTeam = lazy(() => import("./AboutTeam"));

const About = () => {
  return (
    <>
      <AboutHero />
      <AboutContent />
      <AboutStats />

      {/* Lazy-loaded section */}
      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Loading team...</p>}
      >
        <AboutTeam />
      </Suspense>
    </>
  );
};

export default About;
