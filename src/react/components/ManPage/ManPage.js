import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ManPageTitle from "./ManPageTitle";
import ManPageParagraphs from "./ManPageParagraphs";

const ManPage = ({ program, mode }) => {
  return (
    <Fragment>
      <ManPageTitle title={program.name} />
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
