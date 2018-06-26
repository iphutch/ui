import React from "react";
import PropTypes from "prop-types";
import Label from "./Label";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faLinux from "@fortawesome/fontawesome-free-brands/faLinux";
import faWindows from "@fortawesome/fontawesome-free-brands/faWindows";
import faApple from "@fortawesome/fontawesome-free-brands/faApple";
import faExchangeAlt from "@fortawesome/fontawesome-free-solid/faExchangeAlt";

const LabelPlatform = ({ platform }) => {
  var icon, title;
  switch (platform) {
    case "linux":
      icon = <FontAwesomeIcon icon={faLinux} />;
      title = "Runs on Linux";
      break;
    case "windows":
      icon = <FontAwesomeIcon icon={faWindows} />;
      title = "Runs on Windows";
      break;
    case "macos":
      icon = <FontAwesomeIcon icon={faApple} />;
      title = "Runs on macOS";
      break;
    default:
      icon = <FontAwesomeIcon icon={faExchangeAlt} />;
      title = "Could be run on many OS's";
  }
  return <Label icon={icon} text={platform} title={title} />;
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
