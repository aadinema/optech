import React from "react";
import styles from "./Styles/TestimonialsSection.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "“ Working with several word press themes and templates the last years, I only can say this is best in every level. I use it for my company and the reviews that I have already are all excellent. Not only the design but the code quality ”",
    author: "Alexander Cameron",
    role: "Lead Developer",
  },
  {
    quote:
      "“ Working with several word press themes and templates the last years, I only can say this is best in every level. I use it for my company and the reviews that I have already are all excellent. Not only the design but the code quality ”",
    author: "Marvin McKinney",
    role: "Product Manager",
  },
  {
    quote:
      "“ Working with several word press themes and templates the last years, I only can say this is best in every level. I use it for my company and the reviews that I have already are all excellent. Not only the design but the code quality ”",
    author: "Marvin McKinney",
    role: "Product Manager",
  },
  {
    quote:
      "“ Working with several word press themes and templates the last years, I only can say this is best in every level. I use it for my company and the reviews that I have already are all excellent. Not only the design but the code quality ”",
    author: "Marvin McKinney",
    role: "Product Manager",
  },
];

const TestimonialsSection = () => {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
              <div>
                <img
                  src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/quote.svg"
                  alt="Quote Icon"
                  className={styles.quoteIcon}
                />
              </div>

              <div className={styles.right}>
                <p className={styles.quote}>{testimonial.quote}</p>

                <div className={styles.starContainer}>
                  <ul className={styles.starIcon}>
                    <li>
                      <i className="remixicon ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="remixicon ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="remixicon ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="remixicon ri-star-fill"></i>
                    </li>
                    <li>
                      <i className="remixicon ri-star-fill"></i>
                    </li>
                  </ul>
                </div>

                <h3 className={styles.author}>{testimonial.author}</h3>
                <p className={styles.role}>{testimonial.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialsSection;
