import React from "react";
import PropTypes from "prop-types";

const ProgramTitle = ({ name, platformName, cliName }) => {
  return <h2>What does {name} do?</h2>;
};

ProgramTitle.propTypes = {
  name: PropTypes.string,
  cliName: PropTypes.string,
  platformName: PropTypes.string
};

export default ProgramTitle;
