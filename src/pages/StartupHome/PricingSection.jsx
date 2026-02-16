import React from "react";
import styles from "./Styles/PricingSection.module.css";
const PricingSection = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div>
          <h1 className={styles.mainHeading}>Effective & flexible pricing</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.subContainer}>
            <div>
              <h4 className={styles.heading}>Startup</h4>
            </div>
            <div>
              <h2 className={styles.heading2}>
                {" "}
                $99 <span>/month</span>{" "}
              </h2>
            </div>
            <p className={styles.para}>
              Best for Startup business owners who needs website for business.
            </p>
            <button href="#" className={styles.bt}>
              Select This Plan
            </button>
            <div>
              <ul className={styles.list}>
                <li>
                  <i className="remixicon ri-check-line"></i>10 GB disk space
                  availability
                </li>
                <li>
                  <i className="remixicon ri-check-line"></i>50 GB NVMe SSD for
                  use
                </li>
                <li>
                  <i className="remixicon ri-check-line"></i>Free platform
                  access for all
                </li>
                <li>
                  <i className="remixicon ri-check-line"></i>Free lifetime
                  updates facility
                </li>
                <li>
                  <i className="remixicon ri-check-line"></i>Free one year
                  support
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.subContainer1}>
            <div>
              <h4 className={styles.heading}>Startup</h4>
            </div>
            <div>
              <h2 className={styles.subContainerHeading}>
                {" "}
                $99 <span>/month</span>{" "}
              </h2>
            </div>
            <p className={styles.para}>
              Best for Startup business owners who needs website for business.
            </p>
            <button href="#" className={styles.bt1}>
              Select This Plan
            </button>
            <div>
              <ul className={styles.list}>
                <li>
                  <i className="remixicon ri-check-line"></i>10 GB disk space
                  availability
                </li>
                <li>
                  <i className="remixicon ri-check-line"></i>50 GB NVMe SSD for
                  use
                </li>
                <li>
                  <i className="remixicon ri-check-line"></i>Free platform
                  access for all
                </li>
                <li>
                  <i className="remixicon ri-check-line"></i>Free lifetime
                  updates facility
                </li>
                <li>
                  <i className="remixicon ri-check-line"></i>Free one year
                  support
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.subContainer2}>
            <div>
              <h4 className={styles.heading}>Startup</h4>
            </div>
            <div>
              <h2 className={styles.heading2}>
                {" "}
                $99 <span>/month</span>{" "}
              </h2>
            </div>
            <p className={styles.para}>
              Best for Startup business owners who needs website for business.
            </p>
            <button href="#" className={styles.bt}>
              Select This Plan
            </button>
            <div>
              <ul className={styles.list}>
                <li>
                  <i className="remixicon ri-check-line"></i>10 GB disk space
                  availability
                </li>
                <li>
                  <i className="remixicon ri-check-line"></i>50 GB NVMe SSD for
                  use
                </li>
                <li>
                  <i className="remixicon ri-check-line"></i>Free platform
                  access for all
                </li>
                <li>
                  <i className="remixicon ri-check-line"></i>Free lifetime
                  updates facility
                </li>
                <li>
                  <i className="remixicon ri-check-line"></i>Free one year
                  support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingSection;
