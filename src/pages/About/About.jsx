import React, { lazy, Suspense } from "react";
import AboutHero from "./AboutHero.jsx";
import AboutContent from "./AboutContent.jsx";
import AboutStats from "./AboutStats.jsx";

const AboutTeam = lazy(() => import("./AboutTeam.jsx"));

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
