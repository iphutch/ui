import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faBook from "@fortawesome/fontawesome-free-solid/faBook";
const Content = props => {
  return (
    <div>
      <h2>
        <FontAwesomeIcon icon={faBook} className="header-nav-button-icon" />{" "}
        Manual Pages
      </h2>
    </div>
  );
};

export default Content;
