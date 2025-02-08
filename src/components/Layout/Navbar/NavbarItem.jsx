import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";

const NavbarItem = ({ label = "Item", path = "/", isActive = false }) => (
  <li className={`${styles.navItem} ${isActive ? styles.active : ""}`}>
    <Link to={path} className={styles.navLink}>
      {label}
    </Link>
  </li>
);

NavbarItem.propTypes = {
  label: PropTypes.string,
  path: PropTypes.string,
  isActive: PropTypes.bool,
};

export default NavbarItem;