import React, { useState } from "react";
import PropTypes from "prop-types";
import Text from "../Text/Text";
import styles from "./Profile.module.css";
import profilePhoto from "../../assets/coder.png";
import Button from "../../components/Button/Button";
import { FaDownload, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Profile = ({ name, summary1, summary2, showPhoto = true, showCV = true }) => {
  const [showMore, setShowMore] = useState(false);
  const { i18n } = useTranslation();

  const handleDownload = () => {
    const language = i18n.language || "en"; 
    const fileName = language === "pt" ? "CV-RaizaMedina-PT.pdf" : "CV-RaizaMedina-EN.pdf";
    const filePath = `/${fileName}`;

    const link = document.createElement("a");
    link.href = filePath;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.profileSection}>
      <div className={styles.contentContainer}>
        {showPhoto && (
          <div className={styles.photoContainer}>
            <img
              src={profilePhoto}
              alt={name ? `Photo of ${name}` : "Profile photo"}
              className={styles.profilePhoto}
            />
          </div>
        )}

        <div className={styles.textContainer}>
          {name && <Text as="h1" className={styles.name}>{name}</Text>}
          <Text as="p" className={styles.summary1}>{summary1}</Text>

          {summary2 && !showMore && (
            <div className={styles.dropdownContainer}>
              <button className={styles.dropdownButton} onClick={() => setShowMore(true)}>
                <FaChevronDown />
              </button>
            </div>
          )}
        </div>
      </div>

      {showMore && (
        <div className={styles.summary2Container}>
          <Text as="p" className={styles.summary2}>{summary2}</Text>

          <div className={styles.dropdownContainer}>
            <button className={styles.dropdownButton} onClick={() => setShowMore(false)}>
              <FaChevronUp />
            </button>
          </div>
        </div>
      )}

      {showCV && (
        <div className={styles.cvButtonContainer}>
          <Button
            label={
              <>
                <FaDownload /> Download CV
              </>
            }
            onClick={handleDownload}
            className={styles.cvButton}
          />
        </div>
      )}
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
  summary1: PropTypes.string.isRequired,
  summary2: PropTypes.string,
  showPhoto: PropTypes.bool,
  showCV: PropTypes.bool,
};

export default Profile;
