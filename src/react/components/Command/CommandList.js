import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import CommandPreview from "./CommandPreview";
import gql from "graphql-tag";

const COMMANDS_QUERY = gql`
  query commands($query: String, $name: String) {
    commands(query: $query, name: $name) {
      id
      title
      slugTitle
      rawContent
      forkFrom
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

const CommandList = ({ query, name }) => {
  console.log(query);
  return (
    <Query query={COMMANDS_QUERY} variables={{ query, name }}>
      {({ loading, error, data: { commands } }) => {
        if (loading) return "loading...";
        if (error) return "Error";
        return commands.map((command, idx) => (
          <CommandPreview key={command.id} command={command} />
        ));
      }}
    </Query>
  );
};

CommandList.propTypes = {
  query: PropTypes.string,
  name: PropTypes.string
};

CommandList.defaultProps = {
  query: "",
  name: ""
};

export default CommandList;
