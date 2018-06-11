import React, { Fragment } from "react";
import PropTypes from "prop-types";
import _ from "underscore";

const Paragraph = ({ p }) => {
  return <p dangerouslySetInnerHTML={{ __html: p.text.trim() }} />;
};

const Section = ({ name, paragraphs }) => {
  var sectionParagraphs = paragraphs.map((p, idx) => {
    return (
      <div className="section-paragraphs">
        <Paragraph p={p} />
      </div>
    );
  });
  return (
    <div className={`manpage-section-${name.toLowerCase().replace(/ /g, "-")}`}>
      <h3>{name}</h3>
      {sectionParagraphs}
    </div>
  );
};

const ManPageParagraphs = ({ paragraphs }) => {
  var sections = _.uniq(_.pluck(paragraphs, "section"));
  sections = sections.map((section, idx) => {
    return (
      <Section
        name={section}
        paragraphs={_.where(paragraphs, { section })}
        key={idx}
      />
    );
  });
  return <Fragment>{sections}</Fragment>;
};
ManPageParagraphs.propTypes = {
  manPage: PropTypes.object,
  mode: PropTypes.string
};

export default ManPageParagraphs;
