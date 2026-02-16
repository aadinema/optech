import React from 'react'
import styles from "./Styles/AboutContent.module.css"
const AboutContent = () => {
  return (
    <>
         <div className={styles.container}>
        <div className={styles.left}>
        <div className={styles.primaryImage}>
          <img
            src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/thumb1-1.png"
            alt="img1"
            className={styles.image1}
          />
          <img
            src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/shape1.svg"
            alt="img2"
            className={styles.image3}
            
          />
        </div>
        <div className={styles.secondaryImage}>
          <img
            src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/shape2.svg"
            alt="img3"
            className={styles.image4}
            
          />
          <img
            src="https://wps.mirrortheme.com/optech/wp-content/uploads/2024/09/thumb2-1.png"
            alt="img4"
            className={styles.image2}
          />
        </div>
        </div>

        <div className={styles.right}>
          <h1 className={styles.heading}>
            Exclusive technology to <br /> provide IT solutions
          </h1>
          <p className={styles.paragraph}>
            Each demo built with Teba will look different. You can customize
            almost anything in the appearance of your website with only a few
            clicks. Each demo built with Teba will look different.
          </p>
          <div >
                     <ul className={styles.list}>
                       <li>
                         <i className="remixicon ri-check-line"></i>Easily Build Custom Reports And Dashboards
                       </li>
                       <li>
                         <i className="remixicon ri-check-line"></i>Legacy Software Modernization
                       </li>
                       <li>
                         <i className="remixicon ri-check-line"></i>Software For The Open Enterprise
                       </li>
                      
                     </ul>
                   </div>
          <button className={styles.primaryButton}>More About Us</button>
        </div>
      </div>
    </>
  )
}

export default AboutContent