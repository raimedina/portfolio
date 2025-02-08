import React from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../Navbar/Navbar";
import Link from "../../Link/Link";
import LanguageSwitcherDropdown from "../../Language/LanguageSwitcherDropdown";
import ThemeToggle from "../../ThemeToggle/ThemeToggle";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import styles from "./Header.module.css";
import Text from "../../Text/Text";

const Header = () => {
  const { t, i18n } = useTranslation();
  const title = t("header.title") || "Raiza Medina"; 

  return (
    <header className={styles.header} aria-label={t("header.ariaLabel", { title })}>
      <div className={styles.logo}>
        <Link to={`/${i18n.language || "en"}`} ariaLabel={t("header.ariaLabel", { title })}>
          <Text as="h1" className={styles.title}>{title}</Text>
        </Link>
      </div>

      <nav className={styles.navbar}>
        <Navbar />
      </nav>

      <div className={styles.actions}>
        <LanguageSwitcherDropdown />
        <ThemeToggle />
        <div className={styles.hamburgerWrapper}>
          <HamburgerMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
