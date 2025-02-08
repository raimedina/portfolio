import React from "react";
import PropTypes from "prop-types";

const TextComponent = ({ as: Component = "p", children, className = "" }) => {
  return <Component className={className}>{children}</Component>;
};

TextComponent.propTypes = {
  as: PropTypes.oneOf(["p", "h1", "h2", "h3", "h4", "h5", "h6"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string, 
};

export default TextComponent;
