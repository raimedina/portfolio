import React, { useEffect, useState } from "react";
import styles from "./PyramidProgress.module.css";

const PyramidProgress = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      let progress = Math.round((scrollTop / scrollHeight) * 4);
      setCurrentStep(progress);
    };

    handleScroll(); // 🔹 Garante que a pirâmide apareça imediatamente ao carregar
    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePyramidClick = (index) => {
    const scrollAmount = window.innerHeight / 2;

    if (index < 2) {
      window.scrollBy({ top: -scrollAmount, behavior: "smooth" });
    } else {
      window.scrollBy({ top: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.pyramidContainer}>
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className={`${styles.pyramid} ${index < currentStep ? styles.active : ""}`}
          onClick={() => handlePyramidClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default PyramidProgress;
