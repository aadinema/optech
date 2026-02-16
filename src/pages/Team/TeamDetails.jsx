import React from "react";
import styles from "./Styles/TeamDetails.module.css";

const TeamDetails = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <img
            src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/team8.png"
            alt="TeamDetailsImage"
            className={styles.image}
          />
        </div>
        <div className={styles.rightContainer}>
          <h2 className={styles.heading}>Kari Rasmussen</h2>
          <h4 className={styles.subHeading}>CEO & Founder</h4>
          <p className={styles.paragraph}>
            A content management system helps you create, manage, and publish
            content on the web. It also keep content organized and accessible so
            it can be used and repurposed effectively.
          </p>
          <div className={styles.contactDetailsContainer}>
            <ul>
              <li>
                <a href="#">
                  <span>
                    <i class="ri-phone-fill"></i>
                  </span>
                  <span>518-564-3200</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <i className="remixicon ri-mail-fill"></i>
                  </span>
                  <span>mthemeus@example.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.socialLinks}>
            <span href="#" className={styles.socialIcon}>
              <i class="ri-facebook-fill"></i>
            </span>
            <span href="#" className={styles.socialIcon}>
              <i class="ri-linkedin-fill"></i>
            </span>
            <span href="#" className={styles.socialIcon}>
              <i class="remixicon ri-twitter-fill"></i>
            </span>
            <span href="#" className={styles.socialIcon}>
              <i class="ri-instagram-fill"></i>
            </span>
          </div>

          {/* form container */}

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
      </div>
    </>
  );
};

export default TeamDetails;
