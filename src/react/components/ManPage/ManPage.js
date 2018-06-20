import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import ManPageTitle from "./ManPageTitle";
import ManPageParagraphs from "./ManPageParagraphs";
import { ProgramDescription, ProgramCommands } from "../Program";

class ManPage extends Component {
  componentDidMount() {
    const { program } = this.props;
    document.title = `${program.name} - kommandr.com`;
  }

  render() {
    const { program } = this.props;
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
  }
}

ManPage.propTypes = {
  program: PropTypes.object
};

export default ManPage;
