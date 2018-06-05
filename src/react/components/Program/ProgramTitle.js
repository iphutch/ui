import React from "react";
import PropTypes from "prop-types";
import { Button, Badge } from "reactstrap";
import { Link } from "react-router-dom";

const ProgramTitle = ({ name, platformName, cliName }) => {
  return (
    <h3>
      Program {name}{" "}
      <Button color="link" tag={Link} to={`/manpages/${platformName}/${name}`}>
        <Badge color="success">view manual page</Badge>
      </Button>
    </h3>
  );
};

ProgramTitle.propTypes = {
  name: PropTypes.string,
  cliName: PropTypes.string,
  platformName: PropTypes.string
};

export default ProgramTitle;
