import React from "react";
import styles from "./Styles/WhyChooseUs.module.css";

const WhyChooseUs = () => {
  const data = [
    {
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon10.svg",
      head: "Quality Solution for Business",
      para: "Each demo built with Teba will look different. Customize almost anything in the appearance of your website.",
    },
    {
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon10.svg",
      head: "Innovative IT Solutions",
      para: "Explore innovative and cutting-edge technology solutions tailored for your business needs.",
    },
    {
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon10.svg",
      head: "Comprehensive Support",
      para: "Get reliable support and services to ensure the seamless functioning of your IT systems.",
    },
  ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.heading}>
            Providing IT solutions & services for startups
          </h1>
          <div className={styles.subContainer}>
            {data.map((item, index) => (
              <div key={index} className={styles.subCtItem}>
                <div className={styles.iconContainer}>
                  <img src={item.img} alt={`icon${index + 1}`} />
                </div>
                <div>
                  <h1 className={styles.subHeading}>{item.head}</h1>
                  <p className={styles.paragraph}>{item.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.primaryImage}>
            <img
              src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/shape3.svg"
              alt="img1"
              className={styles.image1}
            />
            <img
              src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/thumb3-1.png"
              alt="img2"
              className={styles.image2}
            />
          </div>
          <div className={styles.secondaryImage}>
            <img
              src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/shape4.svg"
              alt="img3"
              className={styles.image3}
            />
            <img
              src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/thumb4-1.png"
              alt="img4"
              className={styles.image4}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
