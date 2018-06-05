import React from "react";
import PropTypes from "prop-types";
import { LabelContainer, LabelPlatform, LabelMetric } from "../Label";
import { Link } from "react-router-dom";

const ProgramPreview = ({ program }) => {
  return (
    <div className="program-preview">
      <Link to={`/manpages/${program.platformName}/${program.name}`}>
        {`${program.cliName} - ${program.shortDescription}`}
      </Link>
      <LabelContainer inline={true}>
        <LabelPlatform platform={program.platformName} />
        <LabelMetric metric="views" value={program.totalViews} />
      </LabelContainer>
    </div>
  );
};

ProgramPreview.propTypes = {
  program: PropTypes.object
};

export default ProgramPreview;
