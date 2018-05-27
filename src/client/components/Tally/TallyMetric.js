import React, { Fragment } from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faEye from "@fortawesome/fontawesome-free-solid/faEye";

const TallyMetric = ({ type, value }) => {
  return (
    <Fragment>
      <FontAwesomeIcon icon={faEye} /> <span className="metric">{value}</span>
    </Fragment>
  );
};

TallyMetric.propTypes = {
  value: PropTypes.number,
  type: PropTypes.string
};

TallyMetric.defaultProps = {
  value: 0,
  type: "view"
};

export default TallyMetric;
