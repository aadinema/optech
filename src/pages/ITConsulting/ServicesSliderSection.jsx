import React from "react";
import styles from "./styles/ServicesSliderSection.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const ServicesSliderSection = () => {
  const data = [
    {
      icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon8.svg",
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/service4.png",
      heading: "Web & Mobile App Development",
    },
    {
      icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon4.svg",
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/service2.png",
      heading: "UI/UX & Branding Identity",
    },
    {
      icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon5.svg",
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/service3.png",
      heading: "IT Management Service",
    },
    {
      icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon6.svg",
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/service2.png",
      heading: "Data Tracking Security",
    },
    {
      icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon8.svg",
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/p4.png",
      heading: "UI/UX & Branding Identity",
    },
    {
      icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon8.svg",
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/p4.png",
      heading: "IT Management Service",
    },
    {
      icon: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/icon8.svg",
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/p4.png",
      heading: "Data Tracking Security",
    },
  ];

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.headContainer}>
        <h2 className={styles.heading}>
          Our awesome services to <br /> give you success
        </h2>
      </div>

      <Swiper
        modules={[Pagination]}
        spaceBetween={24}
        slidesPerView={3}
        slidesPerGroup={3}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={styles.cardWrapper}>
              <div className={styles.card}>
                <img src={item.img} alt="Service" className={styles.image} />
                <div className={styles.iconContainer}>
                  <img src={item.icon} alt="Icon" className={styles.icon} />
                </div>
                <h5 className={styles.title}>{item.heading}</h5>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesSliderSection;
