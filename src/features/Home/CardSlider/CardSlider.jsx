import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./CardSlider.module.css";

const services = [
  {
    title: "Cyber Security Solutions",
    description: "Developing a comprehensive IT strategy that aligns.",
    icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon6.svg",
  },
  {
    title: "Data Tracking Security",
    description: "Developing a comprehensive IT strategy that aligns.",
    icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon6.svg",
  },
  {
    title: "IT Management Service",
    description: "Developing a comprehensive IT strategy that aligns.",
    icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon6.svg",
  },
  {
    title: "UI/UX & Branding Identity",
    description: "Developing a comprehensive IT strategy that aligns.",
    icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon6.svg",
  },
  {
    title: "Web & Mobile App Development",
    description: "Developing a comprehensive IT strategy that aligns.",
    icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon6.svg",
  },
  {
    title: "Digital Marketing Services",
    description: "Developing a comprehensive IT strategy that aligns.",
    icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon7.svg",
  },
];

const CardSlider = () => {
  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.heading}>
        Our awesome services to <br /> give you success
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
              <img src={service.icon} alt="" className={styles.icon} />
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
              <a href="#" className={styles.learnMore}>
                Learn More →
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
