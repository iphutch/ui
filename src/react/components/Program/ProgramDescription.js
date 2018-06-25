import React from "react";
import PropTypes from "prop-types";

const ProgramDescription = ({ description }) => {
  return (
    <div className="program-description">
      <p>{description}</p>
    </div>
  );
};

ProgramDescription.propTypes = {
  description: PropTypes.string
};

export default ProgramDescription;
