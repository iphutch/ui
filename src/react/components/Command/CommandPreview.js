import React, { Fragment } from "react";
import PropTypes from "prop-types";
import CommandContent from "./CommandContent";
import {
  LabelContainer,
  LabelPlatform,
  LabelDate,
  LabelMetric
} from "../Label";

const CommandTitle = ({ children }) => {
  return <h4 className="command-title">{children}</h4>;
};

const CommandInfo = ({ children }) => {
  return <div className="command-info">{children}</div>;
};

const CommandPreview = ({ command, mode }) => {
  return (
    <div className="command mt-2 mb-2">
      <CommandTitle>
        <a href="">@{command.author.username}</a> /{" "}
        <a href={`/@${command.author.username}/${command.slugTitle}`}>
          {command.title}
        </a>
      </CommandTitle>

      {mode !== "minimal" && (
        <Fragment>
          <CommandContent>{command.rawContent}</CommandContent>

          <CommandInfo>
            <LabelContainer inline={true}>
              <LabelDate timestamp={command.createdAt} />
              <LabelPlatform platform={command.program.platformName} />
              <LabelMetric metric="views" value={command.totalViews} />
            </LabelContainer>
          </CommandInfo>
        </Fragment>
      )}
    </div>
  );
};

CommandPreview.propTypes = {
  command: PropTypes.object,
  mode: PropTypes.string
};

CommandPreview.defaultProps = {
  mode: "compact"
};
export default CommandPreview;
