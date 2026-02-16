import React from "react";
import styles from "./styles/AboutSection.module.css";

const AboutSection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.primaryImage}>
            <img
              src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/thumb1-2.png"
              alt="img1"
              className={styles.image1}
            />
            <img
              src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/shape1.svg"
              alt="img2"
            />
          </div>
          <div className={styles.secondaryImage}>
            <img
              src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/shape2.svg"
              alt="img3"
            />
            <img
              src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/thumb2-2.png"
              alt="img4"
              className={styles.image2}
            />
          </div>
        </div>

        <div className={styles.right}>
          <h1 className={styles.heading}>
            Exclusive technology to <br /> provide IT solutions
          </h1>
          <p className={styles.paragraph}>
            Each demo built with Teba will look different. You can customize
            almost anything in the appearance of your website with only a few
            clicks. Each demo built with Teba will look different.
          </p>
          <div className={styles.customers}>
            <div className={styles.border}>
              <span className={styles.number}>1800+</span>
              <p className={styles.para}>Happy Clients</p>
            </div>
            <div>
              <span className={styles.number}>600+</span>
              <p className={styles.para}>Finished Projects</p>
            </div>
          </div>
          <button className={styles.primaryButton}>More About Us</button>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
