import React from "react";
import { useTheme } from "../../context/ThemeContext";
import styles from "./ThemeToggle.module.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`${styles.toggleWrapper} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
      onClick={toggleTheme}
      aria-label="Alternar Tema"
    >
      <div className={styles.icon}>
        {theme === "light" ? "☀️" : "🌙"}
      </div>
    </div>
  );
};

export default ThemeToggle;