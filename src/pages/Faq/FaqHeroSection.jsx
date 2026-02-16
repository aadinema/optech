import React from "react";
import styles from "./Styles/FaqHeroSection.module.css"
const FaqHeroSection = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Faqs</h1>
        <p className={styles.subtitle}>
          Home <span className={styles.subtitle2}>&gt;</span> Faqs
        </p>
      </div>
    </>
  );
};

export default FaqHeroSection;
