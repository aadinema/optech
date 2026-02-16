import React from "react";
import styles from "./BlogGrid.module.css";

const BlogGrid = () => {
  const cardData = [
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/blog-page-01-768x628.png",
      title: "Technology Sep 1, 2024",
      description: "Planning your online business goals with a specialist",
      button: "Read more ->",
    },
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/blog-page-02-768x628.png",
      title: "Technology Sep 1, 2024",
      description: "Boost your startup business with our digital agency",
      button: "Read more ->",
    },
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/blog-page-03-768x628.png",
      title: "Technology Sep 1, 2024",
      description: "Proactive customer experience in the business",
      button: "Read more ->",
    },
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/blog9.png",
      title: "Technology Sep 1, 2024",
      description: "Proactive customer experience in the business",
      button: "Read more ->",
    },
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/blog-page-05.png",
      title: "Technology Sep 1, 2024",
      description: "Proactive customer experience in the business",
      button: "Read more ->",
    },
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/blog-page-06.png",
      title: "Technology Sep 1, 2024",
      description: "Proactive customer experience in the business",
      button: "Read more ->",
    },
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/blog-page-07.png",
      title: "Technology Sep 1, 2024",
      description: "Proactive customer experience in the business",
      button: "Read more ->",
    },
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/blog-page-07.png",
      title: "Technology Sep 1, 2024",
      description: "Proactive customer experience in the business",
      button: "Read more ->",
    },
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/blog-page-09.png",
      title: "Technology Sep 1, 2024",
      description: "Proactive customer experience in the business",
      button: "Read more ->",
    },
  ];
  return (
    <>
      {" "}
      <div className={styles.container}>
        <h1 className={styles.title}>Blog Grid</h1>
        <p className={styles.subtitle}>
          Home <span className={styles.subtitle2}>&gt;</span> Blog Grid
        </p>
      </div>
      {/* ********************** main blog ********************************* */}
       <div className={styles.App}>
        <div className={styles.cardGrid}>
          {cardData.map((data, index) => (
            <div className={styles.card}>
              <img src={data.image} alt={data.title} className={styles.image} />
              <h2 className={styles.heading}>{data.title}</h2>
              <p className={styles.paragraph}>{data.description}</p>
              <p className={styles.bt}>{data.button}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogGrid;
