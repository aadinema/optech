import React from "react";
import styles from "./Styles/CTASection.module.css";

const CTASection = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h1 className={styles.heading}>Let’s work together</h1>
            <p className={styles.paragraph}>
              Each demo built with Teba will look different. You can customize
              anything <br /> appearance of your website with only a few clicks
            </p>
          </div>

          <div className={styles.right}>
            <button className={styles.bt}>Lets start a project</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTASection;
