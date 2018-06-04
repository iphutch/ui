import React from "react";
import PropTypes from "prop-types";

const SimilarPrograms = ({ program }) => {
  return (
    <div className="similar-commands">
      <h3>Similar Programs</h3>
    </div>
  );
};

SimilarPrograms.propTypes = {
  program: PropTypes.string
};

export default SimilarPrograms;
