import React from "react";
import PropTypes from "prop-types";
import Label from "./Label";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faLinux from "@fortawesome/fontawesome-free-brands/faLinux";
import faWindows from "@fortawesome/fontawesome-free-brands/faWindows";
import faApple from "@fortawesome/fontawesome-free-brands/faApple";
import faExchangeAlt from "@fortawesome/fontawesome-free-solid/faExchangeAlt";

const LabelPlatform = ({ platform }) => {
  var icon;
  switch (platform) {
    case "linux":
      icon = <FontAwesomeIcon icon={faLinux} />;
      break;
    case "windows":
      icon = <FontAwesomeIcon icon={faWindows} />;
      break;
    case "macos":
      icon = <FontAwesomeIcon icon={faApple} />;
      break;
    default:
      icon = <FontAwesomeIcon icon={faExchangeAlt} />;
  }
  return <Label icon={icon} text={platform} />;
};

LabelPlatform.propTypes = {
  value: PropTypes.number,
  type: PropTypes.string
};

LabelPlatform.defaultProps = {
  value: 0,
  type: "view"
};

export default LabelPlatform;
