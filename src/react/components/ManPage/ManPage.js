import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import ManPageTitle from "./ManPageTitle";
import ManPageParagraphs from "./ManPageParagraphs";
import { ProgramDescription, ProgramCommands } from "../Program";
import { Nav, NavLink } from "reactstrap";

class ManPage extends Component {
  componentDidMount() {
    const { program } = this.props;
    document.title = `${program.name} - kommandr.com`;
  }

  render() {
    const { program } = this.props;
    var categories = [
      <NavLink href="#related-commands" key={0}>
        Related Commands
      </NavLink>
    ];
    if (program.manPage) {
      categories.push(
        <NavLink href="#usage" key={1}>
          Usage and options
        </NavLink>
      );
    }
    return (
      <Fragment>
        <ManPageTitle title={program.name} />
        <ProgramDescription description={program.shortDescription} />
        <Nav>
          <span style={{ fontWeight: "bold", padding: "0.5rem 0rem" }}>
            Jump to:
          </span>
          {categories}
        </Nav>
        <ProgramCommands program={program.cliName} mode="compact" />
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
