import React from "react";
import styles from "./styles/TestimonialHero.module.css";

const Page1 = () => {
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

export default Page1;
