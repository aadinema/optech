import React from "react";
import styles from "./Styles/ServicesSection.module.css";
import { data } from "react-router-dom";
const ServicesSection = () => {
  const data1 = [
    {
      title: "Data-Driven Decisions",
      description:
        "Digital tools provide valuable data on customer behavior, enabling SMBs to make informed business decisions.",
      icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon6.svg",
    },
    {
      title: "Easier Financial Transactions",
      description:
        "Digital payment options simplify transactions for both businesses and customers, reducing reliance on cash.",
      icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon6.svg",
    },
    {
      title: "IT Management Service",
      description:
        "Each demo built with Teba will look different. You can customize almost anything the appearance",
      icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon6.svg",
    },
  ];
  const data2 = [
    {
      title: "UI/UX & Branding Identity",
      description:
        "Each demo built with Teba will look different. You can customize almost anything the appearance",
      icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon6.svg",
    },
    {
      title: "Web & Mobile App Development",
      description:
        "Each demo built with Teba will look different. You can customize almost anything the appearance",
      icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon6.svg",
    },
    {
      title: "Digital Marketing Services",
      description:
        "Each demo built with Teba will look different. You can customize almost anything the appearance",
      icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon7.svg",
    },
  ];
  return (
    <>
      <div>
        <h2 className={styles.heading}>
          Our awesome services to <br /> give you success
        </h2>
      </div>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          {data1.map((data1, index) => (
            <div key={index}>
              <div className={styles.card}>
                <div>
                  <img src={data1.icon} alt="img" className={styles.icon} />
                </div>
                <div>
                  <h3 className={styles.title}>{data1.title}</h3>
                  <p className={styles.description}>{data1.description}</p>
                  <a href="#" className={styles.learnMore}>
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.rightContainer}>
          {data2.map((data2, index) => (
            <div key={index}>
              <div className={styles.card}>
                <div>
                  <img src={data2.icon} alt="img" className={styles.icon} />
                </div>
                <div>
                  <h3 className={styles.title}>{data2.title}</h3>
                  <p className={styles.description}>{data2.description}</p>
                  <a href="#" className={styles.learnMore}>
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
