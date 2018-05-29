import React from "react";
import "prismjs";
import "./prism-bash.js";
import PrismCode from "react-prism";
import { Tally, TallyMetric } from "../Tally";
import { Platform } from "../Platform";
import "prismjs/themes/prism-okaidia.css";
const CommandTitle = ({ children }) => {
  return <h4 className="command-title">{children}</h4>;
};

const CommandInfo = ({ children }) => {
  return <div className="command-info">{children}</div>;
};

const CommandContent = ({ platform, children }) => {
  var language = platform === "windows" ? "powershell" : "bash";
  return (
    <PrismCode component="pre" className={`language-${language}`}>
      {children}
    </PrismCode>
  );
};

const Command = ({ command }) => {
  return (
    <div className="command mt-2 mb-2">
      <CommandTitle>
        <a href="">@{command.author.username}</a> /
        <a href="#">{command.title}</a>
      </CommandTitle>

      <CommandContent>{command.rawContent}</CommandContent>

      <CommandInfo>
        <Tally>
          <TallyMetric type="view" value={5} />
          <TallyMetric type="view" value={5} />
        </Tally>
        <Platform name={command.program.platformName} />
      </CommandInfo>
    </div>
  );
};

export default Command;
