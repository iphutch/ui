import React from "react";
import PropTypes from "prop-types";

const ManPageTitle = ({ title }) => {
  return <h2>{title}</h2>;
};
ManPageTitle.propTypes = {
  title: PropTypes.string
};

export default ManPageTitle;
