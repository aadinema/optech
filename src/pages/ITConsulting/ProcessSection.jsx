import React from "react";
import styles from "./styles/ProcessSection.module.css";

const ProcessSection = () => {
  const data = [
    {
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/illustration1.svg",
      number: "01",
      heading: "Initiation & Planning",
      paragraph:
        "We are architects innovation trailblazers of technological advancement",
    },
    {
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/illustration2.svg",
      number: "02",
      heading: "Execution & Development",
      paragraph:
        "We are architects innovation trailblazers of technological advancement",
    },
    {
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/illustration3.svg",
      number: "03",
      heading: "Testing & Maintenance",
      paragraph:
        "We are architects innovation trailblazers of technological advancement",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.headingContainer}>
        <h1 className={styles.outerHeading}>
          Our working process on <br /> how to grow your business
        </h1>
      </div>

      <div className={styles.cardContainer}>
        {data.map((item, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={item.img} alt={item.heading} className={styles.image} />
            </div>
            <div className={styles.textContainer}>
              <span className={styles.number}>{item.number}</span>
              <h3 className={styles.title}>{item.heading}</h3>
              <p className={styles.description}>{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSection;
