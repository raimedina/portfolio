import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Popup.module.css";
import { MdWavingHand } from "react-icons/md";

const Popup = () => {
  const { t } = useTranslation();

  return (
    <a
      href="https://wa.me/5553981227770?text=Olá,%20tenho%20uma%20sugestão!"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.bubbleContainer}
      aria-label={t("popup.ariaLabel")}
    >
      <div className={styles.bubble}>
        <span>{t("popup.message")}</span>
        <MdWavingHand className={styles.handIcon} />
      </div>
    </a>
  );
};

export default Popup;
