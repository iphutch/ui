import React from "react";
import PropTypes from "prop-types";
import { Button, Badge } from "reactstrap";
import { Link } from "react-router-dom";

const ProgramTitle = ({ name, manPage }) => {
  return (
    <h3>
      Program {name}{" "}
      {manPage && (
        <Button color="link" tag={Link} to={`/manpages/${manPage.name}`}>
          <Badge color="success">view manual page</Badge>
        </Button>
      )}
    </h3>
  );
};

ProgramTitle.propTypes = {
  name: PropTypes.string,
  manPage: PropTypes.object
};

export default ProgramTitle;
