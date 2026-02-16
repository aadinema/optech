import React from "react";
import styles from "./Topbar.module.css";

const Topbar = () => {
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

      {/* ================= Main Navbar ================= */}
      
    </>
  );
};

export default Topbar;
