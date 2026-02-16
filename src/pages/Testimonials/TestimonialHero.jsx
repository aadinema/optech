import React from "react";
import styles from "./Styles/TestimonialHero.module.css"

const TestimonialHero = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Testimonial</h1>
        <p className={styles.subtitle}>
          Home <span className={styles.subtitle2}>&gt;</span> Testimonial
        </p>
      </div>
    </>
  );
};

export default TestimonialHero;
