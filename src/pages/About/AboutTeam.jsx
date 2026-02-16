import React from "react";
import styles from "./Styles/AboutTeam.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const AboutTeam = () => {
  const cardData = [
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/team1.png",
      title: "Marvin McKinney",
      description: "CEO & Founder",
    },
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/team2.png",
      title: "Sophia Rodriguez",
      description: "CEO & Founder",
    },
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/team3.png",
      title: "Marvin McKinney",
      description: "CEO & Founder",
    },
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/team4.png",
      title: "Alexander Cameron",
      description: "CEO & Founder",
    },
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/team5.png",
      title: "Zachary Collins",
      description: "Cyber Specialist",
    },
  ];

  return (
    <section className={styles.container}>
      <h1 className={styles.header}>
        Our expert team is always <br /> ready to help you
      </h1>

      <Swiper
        modules={[Pagination]}
        slidesPerView={4}
        spaceBetween={24}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className={styles.slider}
      >
        {cardData.map((member, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
              <img
                src={member.image}
                alt={member.title}
                className={styles.image}
              />
              <h2 className={styles.heading}>{member.title}</h2>
              <p className={styles.paragraph}>{member.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AboutTeam;
