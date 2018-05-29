import React from "react";
import { Query } from "react-apollo";
import Command from "./Command";

import gql from "graphql-tag";

const COMMANDS_QUERY = gql`
  query commands($query: String) {
    commands(query: $query) {
      id
      title
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

const CommandList = ({ query }) => {
  return (
    <Query query={COMMANDS_QUERY} variables={query}>
      {({ loading, error, data: { commands } }) => {
        if (loading) return "loading...";
        if (error) return "Error";
        return commands.map((command, idx) => (
          <Command key={idx} command={command} />
        ));
      }}
    </Query>
  );
};

export default CommandList;
