import React from "react";
import styles from "./Portfolio.module.css"
const PortfolioDetails = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>UI/UX Design</h1>
        <p className={styles.subtitle}>
          Home <span className={styles.subtitle2}>&gt;</span>Projects
          <span className={styles.subtitle2}>&gt;</span>UI/UX Design
        </p>
      </div>
    </>
  );
};

export default PortfolioDetails;
