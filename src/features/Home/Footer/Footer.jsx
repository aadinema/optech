import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Logo and Description */}
        <div className={styles.section}>
          <img src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/08/logo-dark.svg" alt="logo" className={styles.logo} />
          <p className={styles.description}>
            Each demo built with Teba will look different. You can customize
            almost anything in the appearance of your website with only a few.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon}><i class="ri-facebook-fill"></i></a>
            <a href="#" className={styles.socialIcon}><i class="ri-linkedin-fill"></i></a>
            <a href="#" className={styles.socialIcon}><i class="remixicon ri-twitter-fill"></i></a>
            <a href="#" className={styles.socialIcon}><i class="ri-instagram-fill"></i></a>
          </div>
        </div>

        {/*  Links */}
        <div className={styles.section}>
          <h3 className={styles.title}>Quick Links</h3>
          <ul className={styles.list}>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className={styles.section}>
          <h3 className={styles.title}>Services</h3>
          <ul className={styles.list}>
            <li><a href="#">UI/UX Design</a></li>
            <li><a href="#">App Development</a></li>
            <li><a href="#">Digital Marketing</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">Cyber Security</a></li>
          </ul>
        </div>

        {/* Information */}
        <div className={styles.section}>
          <h3 className={styles.title}>Information</h3>
          <ul className={styles.list}>
            <li><a href="#">Working Process</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>Copyright © 2024 MirrorTheme. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
