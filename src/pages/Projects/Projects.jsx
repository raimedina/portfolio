import React from "react";
import { useTranslation } from "react-i18next";
import Footer from "../../components/Layout/Footer/Footer";
import ResponsiveCard from "../../components/Card/ResponsiveCard";
import Popup from "../../components/Popup/Popup";
import PyramidProgress from "../../features/PyramidProgress/PyramidProgress";
import styles from "./Projects.module.css";
import componentLibrary from "../../assets/componentLibrary.png";
import invoiceAppLight from "../../assets/invoiceAppLightMode.png";
import invoiceAppDark from "../../assets/invoiceAppDarkMode.png";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";

const Projects = () => {
  const { t } = useTranslation();
  
  const cards = t("projects.list", { returnObjects: true });

  const images = [
    {
      imageSrcLight: componentLibrary,
      imageSrcDark: componentLibrary,
    },
    {
      imageSrcLight: invoiceAppLight,
      imageSrcDark: invoiceAppDark,
    }
  ];

  const elementsRef = useAnimateOnScroll({
    observedClass: styles.card, 
    animationClassRight: "animateRight", 
    animationClassLeft: "animateLeft", 
  });

  return (
    
    <div className={styles.pageContainer}>
      
      <div className={styles.cardsContainer}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              index % 2 === 0 ? "animateRightTarget" : "animateLeftTarget"
            }`}
            ref={(el) => (elementsRef.current[index] = el)} 
          >
            <ResponsiveCard
              imageSrcLight={images[index].imageSrcLight}
              imageSrcDark={images[index].imageSrcDark}
              title={card.title}
              text={card.text}
              showButton={true}
              reverse={index % 2 !== 0} 
              link="https://github.com/raimedina" 
              external={true}
            />
          </div>
        ))}
      </div>
      <PyramidProgress />
      <Popup />
    </div>
  );
};

export default Projects;
