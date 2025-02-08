import React from "react";
import { useLocation, useParams } from "react-router-dom";
import NavbarItem from "./NavbarItem";
import styles from "./Navbar.module.css";
import { useTranslation } from "react-i18next";

const Navbar = () => {
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
    <nav className={styles.navbar} aria-label="Main Navigation">
      <ul className={styles.navList}>
        {navItems.map((item, index) => {
          const fullPath = `/${lang || "en"}/${item.path}`;
          return (
            <NavbarItem
              key={index}
              label={item.label}
              path={fullPath}
              isActive={location.pathname === fullPath}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
