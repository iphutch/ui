import React, { Fragment } from "react";
import PropTypes from "prop-types";
import _ from "underscore";

const Paragraph = ({ p }) => {
  return <p dangerouslySetInnerHTML={{ __html: p.text.trim() }} />;
};

const Section = ({ name, paragraphs }) => {
  var sectionParagraphs = paragraphs.map((p, idx) => {
    return (
      <div className="section-paragraphs" key={idx}>
        <Paragraph p={p} />
      </div>
    );
  });
  return (
    <div className={`manpage-section-${name.toLowerCase().replace(/ /g, "-")}`}>
      <h2>{name}</h2>
      {sectionParagraphs}
    </div>
  );
};

const ManPageParagraphs = ({ paragraphs }) => {
  var optionsParagraphs = _.where(paragraphs, {
    is_option: true,
    section: "OPTIONS"
  });
  var subcommandsParagraphs = _.where(paragraphs, { section: "COMMANDS" });
  return (
    <Fragment>
      {optionsParagraphs && (
        <Section name="Options" paragraphs={optionsParagraphs} />
      )}
      {subcommandsParagraphs && (
        <Section name="Subcommands" paragraphs={subcommandsParagraphs} />
      )}
    </Fragment>
  );
};
ManPageParagraphs.propTypes = {
  manPage: PropTypes.object,
  mode: PropTypes.string
};

export default ManPageParagraphs;
