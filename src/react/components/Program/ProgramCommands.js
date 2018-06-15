import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import { CommandPreview } from "../Command";
import gql from "graphql-tag";

const COMMANDS_QUERY = gql`
  query commands($name: String) {
    commands(name: $name) {
      id
      title
      slugTitle
      rawContent
      totalViews
      createdAt
      author {
        id
        username
      }
      program {
        id
        name
        platformName
      }
    }
  }
`;
const ProgramCommands = ({ program, mode }) => {
  return (
    <div className="similar-commands mt-2">
      <h2> Recommended Commands </h2>{" "}
      <Query query={COMMANDS_QUERY} variables={{ name: program }}>
        {({ loading, error, data: { commands } }) => {
          if (loading) return "Loading";
          if (error) return `Error: ${error}`;
          return commands.map((command, idx) => (
            <CommandPreview key={command.id} command={command} mode={mode} />
          ));
        }}
      </Query>
    </div>
  );
};

ProgramCommands.propTypes = {
  program: PropTypes.string,
  mode: PropTypes.string
};

ProgramCommands.defaultProps = {
  mode: "minimal"
};

export default ProgramCommands;
