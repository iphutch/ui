import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Label = ({ icon, text, title }) => {
  return (
    <Fragment>
      <span className="label-icon">{icon}</span>
      <span className="label-text" title={title}>
        {text}
      </span>
    </Fragment>
  );
};

Label.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string
};

export default Label;
