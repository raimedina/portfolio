import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaGlobeAmericas } from "react-icons/fa";
import styles from "./LanguageSwitcherDropdown.module.css";

const languages = [
  { code: "en", label: "English" },
  { code: "pt", label: "Português" },
  { code: "es", label: "Español" },
];

const LanguageSwitcherDropdown = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  
  const currentLang = lang || i18n.language || "en";

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    const currentPath = location.pathname.split("/").slice(2).join("/") || "";
    navigate(`/${lng}/${currentPath}`);
    setIsOpen(false);
  };

  return (
    <div className={styles.languageSwitcher}>
      <button
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={styles.languageButton}
      >
        <FaGlobeAmericas className={styles.icon} />
        <span className={styles.languageLabel}>
          {currentLang.toUpperCase()}
        </span>
        <IoIosArrowDown className={`${styles.arrowIcon} ${isOpen ? styles.rotate : ""}`} />
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu} role="menu">
          {languages.map(({ code, label }) => (
            <li
              key={code}
              onClick={() => changeLanguage(code)}
              role="menuitem"
              className={i18n.language === code ? styles.activeItem : ""}
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcherDropdown;
