import React from "react";
import styles from "./styles/HeroSection.module.css";

const HeroSection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <h5 className={styles.subhead}>
            We provide professional IT services
          </h5>
          <h1 className={styles.heading}>
            Best IT services <br /> for your agency
          </h1>
          <p className={styles.subParagraph}>
            We transform businesses of most major sectors with powerful and
            adaptable digital solutions that satisfy the needs of today.
          </p>
          <div>
            <button className={styles.primaryButton}>Work With Us</button>
            <button className={styles.secondaryButton}>View Services</button>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.imageContainer}>
            <img
              src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/hero-thumb3.png"
              alt="img"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
