import React from "react";
import { useTranslation } from "react-i18next";
import Section from "../../components/Section/Section";
import ResponsiveCard from "../../components/Card/ResponsiveCard";
import Popup from "../../components/Popup/Popup";
import ContactForm from "../../components/Contact/ContactForm";
import PyramidProgress from "../../features/PyramidProgress/PyramidProgress";
import styles from "./Home.module.css";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";
import { useTheme } from "../../context/ThemeContext";
import componentLibrary from "../../assets/componentLibrary.png";
import invoiceAppLight from "../../assets/invoiceAppLightMode.png";
import invoiceAppDark from "../../assets/invoiceAppDarkMode.png";

const Home = () => {
  const { t } = useTranslation();
  const elementsRef = useAnimateOnScroll({
    observedClass: styles.observedSection,
    animationClassRight: "animateRight",
    animationClassLeft: "animateLeft",
  });

  const { theme } = useTheme();


  const projects = t("projects.list", { returnObjects: true });


  const cards = projects.map((project, index) => ({
    ...project,
    imageSrcLight: index === 0 ? componentLibrary : invoiceAppLight,
    imageSrcDark: index === 0 ? componentLibrary : invoiceAppDark,
  }));

  return (
    <div className={styles.home}>
      <PyramidProgress />
      <Section />
      <Popup />
      <section
        className={`${styles.cardsSection} ${styles.observedSection} animateLeftTarget`}
        ref={(el) => el && elementsRef.current.push(el)}
      >
        <div className={styles.cardsContainer}>
          {cards.map((card, index) => (
            <ResponsiveCard
              key={index}
              imageSrcLight={card.imageSrcLight}
              imageSrcDark={card.imageSrcDark}
              title={card.title}
              text={card.text}
              showButton={true}
              reverse={index % 2 !== 0}
              link="/projects"
              external={false}
            />
          ))}
        </div>
      </section>
      <section
        className={`${styles.contactSection} ${styles.observedSection} animateRightTarget`}
        ref={(el) => el && elementsRef.current.push(el)}
      >
        <ContactForm />
      </section>
    </div>
  );
};

export default Home;
