import React from "react";
import styles from "./mainSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.textContent}>
          
          <h1 className={styles.heading}>
            Delivering tech <br /> solutions for <br /> your startups
          </h1>
          <p className={styles.description}>
            We transform businesses of most major sectors with powerful and adaptable digital solutions that satisfy the needs of today.
          </p>
          <div className={styles.buttons}>
            <button className={`${styles.button} ${styles.primaryButton}`}>
              Work With Us
            </button>
            <button className={`${styles.button} ${styles.secondaryButton}`}>
              View Services
            </button>
          </div>
        </div>
        {/* Right Image */}
        <div className={styles.imageContent}>
          <img
            src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/hero-thumb1-768x861.png"
            alt="Team Working"
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
