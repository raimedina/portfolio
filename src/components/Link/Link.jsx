import React from "react";
import { Link as RouterLink } from "react-router-dom"; 
import PropTypes from "prop-types"; 
import styles from "./Link.module.css";

const Link = ({ to = "/", children, className = "", ariaLabel, ...props }) => {
  return (
    <RouterLink
      to={to} 
      className={`${styles.link} ${className}`}
      aria-label={ariaLabel}
      {...props} 
    >
      {children} 
    </RouterLink>
  );
};

Link.propTypes = {
  to: PropTypes.string.isRequired, 
  children: PropTypes.node.isRequired, 
  className: PropTypes.string,
  ariaLabel: PropTypes.string, 
};

export default Link;
