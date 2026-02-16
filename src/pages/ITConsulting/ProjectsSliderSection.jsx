import React from "react";
import styles from "./Styles/ProjectsSliderSection.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const ProjectsSliderSection = () => {
  const data = [
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/p5-1536x754.png",
      title: "Project for Marketing",
      description: "Business, Marketing",
    },
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/p4.png",
      title: "Marketing Agency Website",
      description: "Development, Marketing",
    },
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/p3.png",
      title: "Health App Development",
      description: "Development, Software",
    },
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/p2.png",
      title: "Cyber Security Analysis",
      description: "Security, Technology",
    },
    {
      image:
        "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/p1.png",
      title: "Digital Product Design",
      description: "Design, Graphics",
    },
  ];

  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Explore our recent projects</h1>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={3}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
        className={styles.swiper}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
              <img src={item.image} alt={item.title} className={styles.image} />
              <div className={styles.overlay}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProjectsSliderSection;
