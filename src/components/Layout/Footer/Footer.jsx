import React from "react";
import { useTranslation } from "react-i18next";
import Link from "../../Link/Link";
import Text from "../../Text/Text";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = ({
  linkedinUrl = "https://www.linkedin.com/in/raizamedina/",
  githubUrl = "https://github.com/raimedina",
}) => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <Text as="h3" className={styles.name}>{t("footer.name")}</Text>
          <div className={styles.socialIcons}>
            <Link
              to={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label={t("footer.linkedinAria")}
            >
              <FaLinkedin className={styles.icon} />
            </Link>
            <Link
              to={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label={t("footer.githubAria")}
            >
              <FaGithub className={styles.icon} />
            </Link>
          </div>
        </div>

        <Text as="p" className={styles.description}>{t("footer.description")}</Text>
      </div>

      <Text as="p" className={styles.footerNote}>{t("footer.footerNote")}</Text>
    </footer>
  );
};

export default Footer;
