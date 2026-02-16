import React from "react";
import styles from "./Portfolio.module.css"
import ProjectsSection from "../../../pages/StartupHome/ProjectsSection.jsx";
import WorkTogether from "../../Home/WorkTogether/WorkTogether.jsx";

 

const PortfolioGrid = () => {
  return (
    <>
      {" "}
      <div className={styles.container}>
        <h1 className={styles.title}>Portfolio Grid</h1>
        <p className={styles.subtitle}>
          Home <span className={styles.subtitle2}>&gt;</span> Portfolio Grid
        </p>
       
      </div>
     <ProjectsSection />
     <WorkTogether />
    </>
  );
};

export default PortfolioGrid;
