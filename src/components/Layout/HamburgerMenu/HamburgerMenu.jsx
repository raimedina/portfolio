import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "./HamburgerMenu.module.css";
import { useTranslation } from "react-i18next";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const location = useLocation();
  const { lang } = useParams();
  const { t } = useTranslation();

  const navItems = [
    { label: t("navbar.home"), path: "" },
    { label: t("navbar.about"), path: "about" },
    { label: t("navbar.projects"), path: "projects" },
    { label: t("navbar.contact"), path: "contact" },
  ];

  return (
    <div className={styles.hamburgerMenu}>
      <button
        onClick={toggleMenu}
        className={styles.menuButton}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <button
          onClick={closeMenu}
          className={styles.closeButton}
          aria-label="Fechar menu"
        >
          <FaTimes />
        </button>
        <ul>
          {navItems.map((item, index) => {
            const fullPath = `/${lang || "en"}/${item.path}`;
            return (
              <li key={index} className={styles.menuItem}>
                <Link to={fullPath} onClick={closeMenu}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {isOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </div>
  );
};

export default HamburgerMenu;
