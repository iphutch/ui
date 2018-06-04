import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ManPageParagraphs = ({ paragraphs }) => {
  const sections = paragraphs.map((p, idx) => {
    return <p dangerouslySetInnerHTML={{ __html: p.text.trim() }} />;
  });
  return <Fragment>{sections}</Fragment>;
};
ManPageParagraphs.propTypes = {
  manPage: PropTypes.object,
  mode: PropTypes.string
};

export default ManPageParagraphs;
