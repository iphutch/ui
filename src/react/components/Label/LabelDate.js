import React from "react";
import PropTypes from "prop-types";
import Label from "./Label";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faCalendarAlt from "@fortawesome/fontawesome-free-solid/faCalendarAlt";
import moment from "moment";

const LabelDate = ({ timestamp }) => {
  return (
    <Label
      icon={<FontAwesomeIcon icon={faCalendarAlt} />}
      text={moment(timestamp).fromNow()}
      title={timestamp}
    />
  );
};

LabelDate.propTypes = {
  timestamp: PropTypes.string
};

export default LabelDate;
