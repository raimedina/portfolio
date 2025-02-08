import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/ThemeContext";
import { useNavigate, useParams } from "react-router-dom";
import Text from "../Text/Text";
import Button from "../Button/Button";
import styles from "./ResponsiveCard.module.css";

const ResponsiveCard = ({
  imageSrcLight,
  imageSrcDark,
  title,
  text,
  showButton = false,
  reverse = false,
  link = "", 
  external = false, 
}) => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const imageSrc = theme === "dark" ? imageSrcDark : imageSrcLight;
  const { lang } = useParams();

  const handleButtonClick = () => {
    if (external) {
      window.open(link, "_blank");
    } else {
      const fullPath = `/${lang || "en"}${link.startsWith("/") ? link : `/${link}`}`; 
      navigate(fullPath);
    }
  };

  return (
    <div className={`${styles.card} ${reverse ? styles.reverse : ""}`}>
      <img src={imageSrc} alt={title} className={styles.image} />
      <div className={styles.content}>
        <Text as="h2" className={styles.title}>
          {title}
        </Text>
        <Text as="p" className={styles.text}>
          {text}
        </Text>
        {showButton && (
          <Button
            label={t("card.buttonText")} 
            variant="primary"
            size="medium"
            className={styles.button}
            onClick={handleButtonClick}
          />
        )}
      </div>
    </div>
  );
};

ResponsiveCard.propTypes = {
  imageSrcLight: PropTypes.string.isRequired,
  imageSrcDark: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  showButton: PropTypes.bool,
  reverse: PropTypes.bool,
  link: PropTypes.string,
  external: PropTypes.bool,
};

export default ResponsiveCard;
