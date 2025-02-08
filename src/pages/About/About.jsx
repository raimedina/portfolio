import React from "react";
import { useTranslation } from "react-i18next";
import PyramidProgress from "../../features/PyramidProgress/PyramidProgress";
import ProfileSection from "../../components/Profile/Profile";
import Timeline from "../../components/Timeline/Timeline";
import Popup from "../../components/Popup/Popup";
import styles from "./About.module.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.aboutContainer}>
      <PyramidProgress />
      <ProfileSection 
        name="Raiza Medina" 
        summary1={t("about.summary1")} 
        summary2={t("about.summary2")} 
      />
      <Timeline events={t("about.timeline", { returnObjects: true })} />
      <Popup />
    </div>
  );
};

export default About;
