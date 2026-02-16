import React, { useState } from "react";
import styles from "./Styles/FaqSection.module.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  "What Is The Design Process For Branding?",
  "How Much Does Logo Design Services Cost?",
  "How Long Will It Take To Complete My Project?",
  "What Is Included In A Round Of Revisions?",
  "Are we too small for managed IT services?",
  "Why can't we print on both sides of the paper?",
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className={styles.mainConatiner}>
        <div className={styles.container}>
          {faqData.map((question, index) => (
            <div key={index} className={styles.faqItem}>
              <div
                className={styles.questionContainer}
                onClick={() => toggleFAQ(index)}
              >
                <h5 className={styles.questionHead}>{`Q${
                  index + 1
                }. ${question}`}</h5>
                <button className={styles.iconButton}>
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </button>
              </div>
              <div
                className={`${styles.content} ${
                  openIndex === index ? styles.open : ""
                }`}
              >
                <p>
                  Each demo built with Teba will look different. You can
                  customize almost anything in the appearance of your website
                  with only a few clicks. Each demo built with Teba will look
                  different.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*  questions container */}
      <div className={styles.questionSubContainer}>
        <h2 className={styles.heading}>Still have questions?</h2>
        <p className={styles.paragraph}>
          Each demo built with Teba will look different. You can customize
          almost anything in the appearance of your website with only
        </p>
        <button className={styles.bt}>Back To Homepage</button>
      </div>
    </>
  );
};

export default FaqSection;
