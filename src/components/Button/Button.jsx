import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import styles from "./Button.module.css";

const Button = ({
  label, 
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
  disabled = false,
  loading = false,
  className = "",
  ...props
}) => {
  const { t } = useTranslation(); 

  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className={styles.spinner} role="status" aria-label={t("button.loading")} />
      ) : (
        label
      )}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
