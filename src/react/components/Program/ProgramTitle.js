import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const ProgramTitle = ({ name, platformName, cliName }) => {
  return (
    <h2>
      What does {name} do?{" "}
      <Button
        color="success"
        size="sm"
        tag={Link}
        to={`/manpages/${platformName}/${name}`}
      >
        view manual page
      </Button>
    </h2>
  );
};

ProgramTitle.propTypes = {
  name: PropTypes.string,
  cliName: PropTypes.string,
  platformName: PropTypes.string
};

export default ProgramTitle;
