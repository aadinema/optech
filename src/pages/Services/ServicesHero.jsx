import React from "react";
import styles from "./Styles/Services.module.css"
const ServicesHero = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Service</h1>
        <p className={styles.subtitle}>
          Home <span className={styles.subtitle2}>&gt;</span> Service
        </p>
      </div>
    </>
  );
};

export default ServicesHero;
