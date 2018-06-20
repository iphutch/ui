import React from "react";
import PropTypes from "prop-types";
import { Badge } from "reactstrap";

const Paragraph = ({ p }) => {
  return <p dangerouslySetInnerHTML={{ __html: p.text.trim() }} />;
};

const ManPageSection = ({ name, paragraphs, counter }) => {
  var sectionParagraphs = paragraphs.map((p, idx) => {
    return (
      <div className="section-paragraphs" key={idx}>
        <Paragraph p={p} />
      </div>
    );
  });
  return (
    <div className={`manpage-section-${name.toLowerCase().replace(/ /g, "-")}`}>
      <h2>
        {name} {counter && <Badge color="dark">~{paragraphs.length}</Badge>}
      </h2>
      {sectionParagraphs}
    </div>
  );
};

ManPageSection.propTypes = {
  name: PropTypes.string,
  paragraphs: PropTypes.array,
  counter: PropTypes.bool
};

ManPageSection.defaultProps = {
  counter: true
};

export default ManPageSection;
