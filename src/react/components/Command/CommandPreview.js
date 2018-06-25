import React, { Fragment } from "react";
import PropTypes from "prop-types";
import CommandContent from "./CommandContent";
import {
  LabelContainer,
  LabelPlatform,
  LabelDate,
  LabelMetric,
  LabelUser
} from "../Label";

const CommandTitle = ({ children }) => {
  return <h4 className="command-title">{children}</h4>;
};

const CommandInfo = ({ children }) => {
  return <div className="command-info">{children}</div>;
};

const CommandPreviewMinimal = ({ command }) => {
  return (
    <Fragment>
      <CommandTitle>
        <a href={`/@${command.author.username}/${command.slugTitle}`}>
          {command.title}
        </a>
      </CommandTitle>
      <CommandInfo>
        <LabelContainer inline={true}>
          <LabelUser user={command.author} />
          <LabelPlatform platform={command.program.platformName} />
          <LabelMetric metric="views" value={command.totalViews} />
        </LabelContainer>
      </CommandInfo>
    </Fragment>
  );
};

const CommandPreviewCompact = ({ command }) => {
  return (
    <Fragment>
      <CommandTitle>
        <a href={`/@${command.author.username}/${command.slugTitle}`}>
          {command.program.name} / {command.title}
        </a>
      </CommandTitle>
      <Fragment>
        <CommandContent>{command.rawContent}</CommandContent>
        <CommandInfo>
          <LabelContainer inline={true}>
            <LabelUser user={command.author} />
            <LabelDate timestamp={command.createdAt} />
            <LabelPlatform platform={command.program.platformName} />
            <LabelMetric metric="views" value={command.totalViews} />
          </LabelContainer>
        </CommandInfo>
      </Fragment>
    </Fragment>
  );
};

const CommandPreview = ({ command, mode }) => {
  let preview =
    mode === "minimal" ? (
      <CommandPreviewMinimal command={command} />
    ) : (
      <CommandPreviewCompact command={command} />
    );
  return <div className="command mt-2 mb-2">{preview}</div>;
};

CommandPreview.propTypes = {
  command: PropTypes.object,
  mode: PropTypes.string
};

CommandPreview.defaultProps = {
  mode: "compact"
};
export default CommandPreview;
