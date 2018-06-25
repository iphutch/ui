import React from "react";
import "prismjs";
import "./prism-bash.js";
import PrismCode from "react-prism";
import "prismjs/themes/prism-okaidia.css";

const CommandContent = ({ platform, children }) => {
  var language = platform === "windows" ? "powershell" : "bash";
  return (
    <PrismCode
      component="pre"
      className={`command-content language-${language}`}
    >
      {children}
    </PrismCode>
  );
};

export default CommandContent;
