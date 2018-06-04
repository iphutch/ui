import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ManPageTitle from "./ManPageTitle";
import ManPageParagraphs from "./ManPageParagraphs";

const ManPage = ({ manPage, mode }) => {
  return (
    <Fragment>
      <ManPageTitle title={manPage.name} />
      <ManPageParagraphs paragraphs={manPage.paragraphs} />
    </Fragment>
  );
};
ManPage.propTypes = {
  manPage: PropTypes.object,
  mode: PropTypes.string
};

export default ManPage;
