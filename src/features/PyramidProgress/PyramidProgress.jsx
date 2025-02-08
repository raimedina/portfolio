import React, { useEffect, useState } from "react";
import styles from "./PyramidProgress.module.css";

const PyramidProgress = () => {
  const [currentStep, setCurrentStep] = useState(0); 

  useEffect(() => {
    const handleScroll = () => {
     
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const progress = Math.min(Math.floor((scrollTop / scrollHeight) * 6), 6);
      setCurrentStep(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.pyramidContainer}>
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className={`${styles.pyramid} ${index < currentStep ? styles.active : ""}`}
        ></div>
      ))}
    </div>
  );
};

export default PyramidProgress;
