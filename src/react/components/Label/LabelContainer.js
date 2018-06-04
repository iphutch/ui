import React from "react";
import PropTypes from "prop-types";

const LabelContainer = ({ children, inline }) => {
  const labels = children.map((label, idx) => {
    return (
      <li className="label" key={idx}>
        {label}
      </li>
    );
  });
  return <ul className="label-container">{labels}</ul>;
};

LabelContainer.propTypes = {
  children: PropTypes.node.isRequired,
  inline: PropTypes.bool
};

LabelContainer.defaultProps = {
  inline: true
};

export default LabelContainer;
