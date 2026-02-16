import React from "react";
import styles from "./Portfolio.module.css";

const PortfolioMasonry = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Portfolio Masonry</h1>
        <p className={styles.subtitle}>
          Home <span className={styles.subtitle2}>&gt;</span> Portfolio Masonry
        </p>
      </div>
    </>
  );
};

export default PortfolioMasonry;
