import React from "react";
import styles from "./styles/HeroSection.module.css";

const HeroSection = () => {
  const data = [
    {
      mainPara:
        "“ Working with several WordPress themes and templates the last years, I can only say this is the best in every level. I use it for my company, and the reviews that I have already are all excellent. Not only the design but the code quality. ”",
      heading: "Alexander Cameron",
      subPara: "Lead Developer",
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/quote.svg",
    },
    {
      mainPara:
        "“ Working with several WordPress themes and templates the last years, I can only say this is the best in every level. I use it for my company, and the reviews that I have already are all excellent. Not only the design but the code quality. ”",
      heading: "Marvin McKinney",
      subPara: "Product Manager",
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/quote.svg",
    },
    {
      mainPara:
        "“ Working with several WordPress themes and templates the last years, I can only say this is the best in every level. I use it for my company, and the reviews that I have already are all excellent. Not only the design but the code quality. ”",
      heading: "Brooklyn Simmons",
      subPara: "Lead Developer",
      img: "https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/quote.svg",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <h1 className={styles.heading}>
            Optimize your <br /> enterprise with our leading guidance
          </h1>
          <p className={styles.paragraph}>
            We transform businesses of most major sectors with powerful and
            adaptable digital solutions that satisfy the needs of today.
          </p>
          <button className={styles.bt}>Work With Us</button>
        </div>
        <div className={styles.rightSection}>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <h5 className={styles.title}>Fill The Contact Form</h5>
            <p className={styles.description}>
              Get Free Consultation For IT Solutions
            </p>
            <div>
              <input
                type="text"
                className={styles.formControl}
                id="name"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                className={styles.formControl}
                placeholder="Email address"
                required
              />
            </div>
            <div>
              <textarea
                id="message"
                className={styles.formControl}
                rows="5"
                placeholder="Write your message"
                required
              />
            </div>
            <div className={styles.submitButtonWrapper}>
              <input type="submit" value="Send Message" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
