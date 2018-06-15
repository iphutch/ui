import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ManPageTitle from "./ManPageTitle";
import ManPageParagraphs from "./ManPageParagraphs";
import { ProgramDescription, ProgramCommands } from "../Program";

const ManPage = ({ program, mode }) => {
  return (
    <Fragment>
      <ManPageTitle title={program.name} />
      <ProgramDescription description={program.shortDescription} />
      <ProgramCommands program={program.name} mode="compact" />
      {program.manPage && (
        <ManPageParagraphs paragraphs={program.manPage.paragraphs} />
      )}
    </Fragment>
  );
};
ManPage.propTypes = {
  program: PropTypes.object,
  mode: PropTypes.string
};

export default ManPage;
