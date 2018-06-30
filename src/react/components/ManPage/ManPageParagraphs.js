import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ManPageSection from "./ManPageSection";

const ManPageParagraphs = ({ paragraphs }) => {
  // get any paragraph whose section name include "option"
  var sypnopsysParagraphs = paragraphs.filter(p =>
    p.section.match(/synopsis/i)
  );
  var optionsParagraphs = paragraphs.filter(
    p => p.is_option && p.section.match(/option|description/i)
  );
  // get any paragraph whose section name include the "command"
  var subcommandsParagraphs = paragraphs.filter(p =>
    p.section.match(/command/i)
  );
  return (
    <Fragment>
      <a name="usage" />
      {sypnopsysParagraphs.length > 0 && (
        <ManPageSection
          name="Synopsis"
          paragraphs={sypnopsysParagraphs}
          counter={false}
        />
      )}
      {optionsParagraphs.length > 0 && (
        <ManPageSection name="Options" paragraphs={optionsParagraphs} />
      )}
      {subcommandsParagraphs.length > 0 && (
        <ManPageSection name="Subcommands" paragraphs={subcommandsParagraphs} />
      )}
    </Fragment>
  );
};
ManPageParagraphs.propTypes = {
  manPage: PropTypes.object,
  mode: PropTypes.string
};

export default ManPageParagraphs;
