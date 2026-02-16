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
              className={styles.image3}
            />
          </div>
          <div className={styles.secondaryImage}>
            <img
              src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/shape2.svg"
              alt="img3"
            />
            <img
              src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/thumb2-3.png"
              alt="img4"
              className={styles.image2}
            />
          </div>
        </div>

        <div className={styles.right}>
          <h1 className={styles.heading}>
            We provide perfect IT <br /> solutions & technology
          </h1>
          <p className={styles.paragraph}>
            During this time, we’ve built a reputation for excellent clients
            satisfaction as evidenced by our
          </p>
          <p className={styles.subParagraph}>
            Each demo built with Teba will look different. You can customize
            almost anything in the appearance of your website with only a few
            clicks. Each demo built with Teba will look different.
          </p>
          <div className={styles.customers}>
            <div className={styles.border}>
              <span className={styles.number}>
                <img src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon5.svg" alt="" />
              </span>
              <p className={styles.para}>Provide Skills Services</p>
            </div>
            <div className={styles.border}>
              <span className={styles.number}>
                <img src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon8.svg" alt=""
                className={styles.image} />
              </span>
              <p className={styles.para}>Urgent Support For Clients</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
