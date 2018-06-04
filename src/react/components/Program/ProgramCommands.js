import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import { CommandPreview } from "../Command";
import gql from "graphql-tag";

const COMMANDS_QUERY = gql`
  query commands($query: String) {
    commands(query: $query) {
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
const ProgramCommands = ({ program }) => {
  return (
    <div className="similar-commands mt-2">
      <h3>Similar Commands</h3>
      <Query query={COMMANDS_QUERY} variables={{ query: program }}>
        {({ loading, error, data: { commands } }) => {
          if (loading) return "Loading";
          if (error) return `Error: ${error}`;
          return commands.map((command, idx) => (
            <CommandPreview key={command.id} command={command} mode="minimal" />
          ));
        }}
      </Query>
    </div>
  );
};

ProgramCommands.propTypes = {
  program: PropTypes.string
};

export default ProgramCommands;
