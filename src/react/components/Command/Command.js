import React from "react";
import PropTypes from "prop-types";
import CommandContent from "./CommandContent";
import {
  LabelContainer,
  LabelPlatform,
  LabelDate,
  LabelMetric
} from "../Label";
import { Program } from "../Program";

const CommandTitle = ({ children }) => {
  return <h2 className="command-title">{children}</h2>;
};

const CommandInfo = ({ children }) => {
  return <div className="command-info">{children}</div>;
};

const Command = ({ command, mode }) => {
  return (
    <div className="command mt-2 mb-2">
      <CommandTitle>
        @{command.author.username} / {command.title}
      </CommandTitle>
      <CommandContent>{command.rawContent}</CommandContent>
      <CommandInfo>
        <LabelContainer inline={true}>
          <LabelDate timestamp={command.createdAt} />
          <LabelPlatform platform={command.program.platformName} />
          <LabelMetric metric="views" value={command.totalViews} />
        </LabelContainer>
      </CommandInfo>
      <Program program={command.program} />
    </div>
  );
};

Command.propTypes = {
  command: PropTypes.object,
  mode: PropTypes.string
};

Command.defaultProps = {
  mode: "compact"
};
export default Command;
