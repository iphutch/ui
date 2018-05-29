import React from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faWindows from "@fortawesome/fontawesome-free-brands/faWindows";
import faApple from "@fortawesome/fontawesome-free-brands/faApple";
import faLinux from "@fortawesome/fontawesome-free-brands/faLinux";
import faExchangeAlt from "@fortawesome/fontawesome-free-solid/faExchangeAlt";

const Platform = ({ name }) => {
  var icon = undefined;
  switch (name) {
    case "linux":
      icon = <FontAwesomeIcon icon={faLinux} />;
      break;
    case "macos":
      icon = <FontAwesomeIcon icon={faApple} />;
      break;
    case "windows":
      icon = <FontAwesomeIcon icon={faWindows} />;
      break;
    default:
      icon = <FontAwesomeIcon icon={faExchangeAlt} />;
  }
  return icon;
};

Platform.propTypes = {
  name: PropTypes.string
};

export default Platform;
