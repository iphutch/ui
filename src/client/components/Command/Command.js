import React from "react";
import { Tally, TallyMetric } from "../Tally";

const CommandTitle = ({ children }) => {
  return <h3 className="command-title">{children}</h3>;
};

const CommandInfo = ({ children }) => {
  return <div className="command-info">{children}</div>;
};

const CommandContent = ({ children }) => {
  return <div className="command-content">{children}</div>;
};

const Command = ({ data }) => {
  return (
    <div className="command mt-2 mb-2">
      <CommandTitle>
        <a href="#">{data.title}</a>
      </CommandTitle>
      <CommandInfo>asdfsd</CommandInfo>
      <CommandContent>asdffsdfsadafs</CommandContent>
      <Tally>
        <TallyMetric type="view" value={5} />
        <TallyMetric type="view" value={5} />
      </Tally>
    </div>
  );
};

export default Command;
