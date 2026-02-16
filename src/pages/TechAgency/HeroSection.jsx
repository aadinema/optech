import React from "react";
import styles from "./Styles/HeroSections.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const brands = [
  "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/brand1.svg",
  "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/brand2.svg",
  "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/brand3.svg",
  "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/brand4.svg",
  "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/brand5.svg",
];

const HeroSections = () => {
  return (
    <section className={styles.container}>
      {/* Top Section */}
      <div className={styles.section}>
        <div className={styles.left}>
          <h1 className={styles.heading}>
            Delivering tech solutions for your startups
          </h1>
        </div>

        <div className={styles.right}>
          <p className={styles.paragraph}>
            We transform businesses of most major sectors with powerful and
            adaptable digital solutions that satisfy the needs of today.
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.primaryButton}>Work With Us</button>
            <button className={styles.secondaryButton}>View Services</button>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className={styles.imageContainer}>
        <img
          src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/hero-02-thumb-1536x759.png"
          alt="Hero"
          className={styles.image}
        />
      </div>

      {/* Text */}
      <p className={styles.centerText}>
        Empowered professionals to connect with top-tier opportunities
      </p>

      {/* Brand Slider */}
      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop={true}
          freeMode={true}
          freeModeMomentum={false}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          slidesPerView={5}
          spaceBetween={40}
          allowTouchMove={false}
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className={styles.brandSwiper}
        >
          {[...brands, ...brands].map((logo, index) => (
            <SwiperSlide key={index} className={styles.brandSlide}>
              <img src={logo} alt="Brand logo" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSections;
