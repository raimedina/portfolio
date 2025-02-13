import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import coderImage from "../../assets/coder.png";
import Text from "../Text/Text";
import Button from "../Button/Button";
import styles from "./Section.module.css";

import {
  FaDownload,
  FaReact,
  FaJsSquare,
  FaCss3Alt,
  FaSass,
  FaGitAlt,
} from "react-icons/fa";
import { SiRedux, SiTypescript } from "react-icons/si";
import { DiScrum } from "react-icons/di";

const Section = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();

  const handleDownload = () => {
    const language = i18n.language || "en";
    const fileName =
      language === "pt" ? "CV-RaizaMedina-PT.pdf" : "CV-RaizaMedina-EN.pdf";
    const filePath = `/${fileName}`;

    const link = document.createElement("a");
    link.href = filePath;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={styles.section}>
      <div className={styles.textContainer}>
        <Text as="h2" className={styles.role}>
          {t("section.role")}
        </Text>

        <Text as="p" className={styles.summary}>
          {t("section.summary1")}
        </Text>
        <Text as="p" className={styles.summary}>
          {t("section.summary2")}
        </Text>

        <div className={styles.techStack}>
          {[
            FaReact,
            FaJsSquare,
            FaCss3Alt,
            SiRedux,
            FaSass,
            SiTypescript,
            FaGitAlt,
            DiScrum,
          ].map((Icon, index) => (
            <Icon key={index} className={styles.techIcon} />
          ))}
          <Button
            label={
              <>
                <FaDownload /> {t("section.cvButton")}
              </>
            }
            onClick={handleDownload}
            className={styles.cvButton}
          />
        </div>

        <Button
          label={t("section.moreDetails")}
          variant="primary"
          size="medium"
          className={styles.moreDetailsButton}
          onClick={() => navigate(`/${lang || "en"}/about`)} // Agora usa o idioma correto
        />
      </div>

      <div className={styles.imageContainer}>
        <img
          className={styles.coderImage}
          src={coderImage}
          alt="Frontend Developer"
        />
      </div>
    </section>
  );
};

export default Section;
