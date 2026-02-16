import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      {/* Main Navbar */}
      <div className={styles.mainNavbar}>
        <div className={styles.logo}>
          <img
            src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/08/logo-dark.svg"
            alt="logo"
          />
        </div>
        {/* Hamburger Menu */}
        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
        {/* Navigation Links */}
        <nav className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <span className={styles.navLink}>Demos</span>
              <ul className={styles.dropdown}>
                <li>
                  <NavLink
                    to="/demos/main-demo"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : styles.navLink
                    }
                  >
                    Main Demo
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/demos/it-solutions"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : styles.navLink
                    }
                  >
                    IT Solutions
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/demos/Tech-Agency"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : styles.navLink
                    }
                  >
                    Tech Agency
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    to="/demos/Startup-Home"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : styles.navLink
                    }
                  >
                    Startup Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/demos/IT-Consulting"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : styles.navLink
                    }
                  >
                    IT Consulting
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/demos/Software-Company"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : styles.navLink
                    }
                  >
                    Software Company
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/demos/Digital-Agency"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : styles.navLink
                    }
                  >
                    Digital Agency
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    to="/demos/Tech-Company"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : styles.navLink
                    }
                  >
                    Tech Company
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className={styles.navItem}>
              <span className={styles.navLink}>Pages</span>
              <ul className={styles.dropdown}>
                <li>
                  {" "}
                  <NavLink
                    to="/Pages/About-Us"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : styles.navLink
                    }
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    to="/Pages/Services"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : styles.navLink
                    }
                  >
                    Service
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    to="/Pages/Team"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : styles.navLink
                    }
                  >
                    Team
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    to="/Pages/Team-Details"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : styles.navLink
                    }
                  >
                    Team Details
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    to="/Pages/Utility"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : styles.navLink
                    }
                  >
                    Utility
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    to="/Pages/Faqs"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : styles.navLink
                    }
                  >
                    Faqs
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    to="/Pages/404"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : styles.navLink
                    }
                  >
                    404
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    to="/Pages/Testimonial"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : styles.navLink
                    }
                  >
                    Testimonial
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className={styles.navItem}>
              <span className={styles.navLink}>Portfolio</span>
              <ul className={styles.dropdown}>
                <li>
                  {" "}
                  <NavLink
                    to="/Portfolio/Portfolio-Grid"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : styles.navLink
                    }
                  >
                    Portfolio Grid
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    to="/Portfolio/Portfolio-Masonry"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : styles.navLink
                    }
                  >
                    Portfolio Masonry
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    to="/Portfolio/Portfolio-Details"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : styles.navLink
                    }
                  >
                    Portfolio Details
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className={styles.navItem}>
              <span className={styles.navLink}>Blog</span>
              <ul className={styles.dropdown}>
                <li>
                  {" "}
                  <NavLink
                    to="/Blog"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : styles.navLink
                    }
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    to="/Blog/Blog-Grid"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : styles.navLink
                    }
                  >
                    Blog Grid
                  </NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink
                    to="/Blog/Blog-Details"
                    className={({ isActive }) =>
                      isActive ? styles.activeLink : styles.navLink
                    }
                  >
                    Blog Details
                  </NavLink>
                </li>
              </ul>
            </li>
            
            <li className={styles.navItem}>
              <span className={styles.navLink}>
                {" "}
                <NavLink
                  to="/Contact-Us"
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : styles.navLink
                  }
                >
                  Contact Us
                </NavLink>
              </span>
            </li>
          </ul>
          {/* Navbar Actions */}
          <div className={styles.actions}>
            <i
              className={`fas fa-search ${styles.searchIcon}`}
              aria-hidden="true"
            ></i>
            <button className={styles.btn}>Get in Touch</button>
            <div className={styles.hambugerBt}>
              <button className={styles.ln}>Learn More</button>
              <button className={styles.ct}>Contact Us</button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
