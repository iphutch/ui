import React from "react";
import PropTypes from "prop-types";
import Label from "./Label";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faEye from "@fortawesome/fontawesome-free-solid/faEye";

const LabelMetric = ({ metric, value }) => {
  var icon;
  if (metric === "views") {
    icon = <FontAwesomeIcon icon={faEye} />;
  }
  return <Label icon={icon} text={value.toString()} />;
};

LabelMetric.propTypes = {
  value: PropTypes.number,
  metric: PropTypes.string
};

LabelMetric.defaultProps = {
  value: 0
};

export default LabelMetric;
