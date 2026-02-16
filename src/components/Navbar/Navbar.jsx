import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topInfo}>
          <span className={styles.topLocation}>
            <i className="fas fa-map-marker-alt"></i> 2774 Oak Drive,
            Plattsburgh, New York
          </span>
        </div>
        <div className={styles.topContact}>
          <span>
            <i className="fas fa-phone-alt"></i> 518-564-3200
          </span>
          <span>
            <i className="fas fa-envelope"></i> optech@example.com
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <header className={styles.navbar}>
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
          <nav
            className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}
          >
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
                      to="/demos/tech-agency"
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
                      to="/demos/startup-home"
                      className={({ isActive }) =>
                        isActive ? styles.activeLink : styles.navLink
                      }
                    >
                      Startup Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/demos/iT-consulting"
                      className={({ isActive }) =>
                        isActive ? styles.activeLink : styles.navLink
                      }
                    >
                      IT Consulting
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/demos/software-company"
                      className={({ isActive }) =>
                        isActive ? styles.activeLink : styles.navLink
                      }
                    >
                      Software Company
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/demos/digital-agency"
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
                      to="/demos/tech-company"
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
                      to="/pages/about"
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
                      Services
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <NavLink
                      to="/pages/team"
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
                      to="/pages/team-Details"
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
                      to="/Pages/utility"
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
                      to="/pages/faqs"
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
                      to="/pages/notFound"
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
                      to="/pages/testimonial"
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
                    <NavLink
                      to="/portfolio" // ✅ FIXED
                      end // 🔥 Important for index route
                      className={({ isActive }) =>
                        isActive ? styles.activeLink : styles.navLink
                      }
                    >
                      Portfolio Grid
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/portfolio/masonry"
                      className={({ isActive }) =>
                        isActive ? styles.activeLink : styles.navLink
                      }
                    >
                      Portfolio Masonry
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/portfolio/12"
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
                      to="/blog"
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
                      to="/blog/blogGrid"
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
                      to="/blog/blogDetails"
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
    </>
  );
};

export default Navbar;
