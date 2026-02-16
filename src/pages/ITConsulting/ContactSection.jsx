import React from "react";
import styles from "./styles/ContactSection.module.css";

const ContactSection = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.subContainer}>
          <div className={styles["form-container"]}>
            <h2 className={styles["form-title"]}>Fill The Contact Form</h2>
            <p className={styles["form-subtitle"]}>
              Feel free to contact with us, we don’t spam your email
            </p>
            <form className={styles["contact-form"]}>
              <div className={styles["form-row"]}>
                <input
                  type="text"
                  placeholder="Your name"
                  className={styles["form-input"]}
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  className={styles["form-input"]}
                />
              </div>
              <input
                type="email"
                placeholder="Email address"
                className={`${styles["form-input"]} ${styles["full-width"]}`}
              />
              <textarea
                placeholder="Write your message"
                className={styles["form-textarea"]}
              ></textarea>
              <button type="submit" className={styles["form-button"]}>
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3679.440499972661!2d75.89281657429282!3d22.749028226482878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1737404759537!5m2!1sen!2sin"
            style={{ border: "0", width: "100%", height: "100%" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
