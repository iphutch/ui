import React, { Component } from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import CommandPreview from "./CommandPreview";
import gql from "graphql-tag";
import _ from "underscore";

const COMMANDS_QUERY = gql`
  query commands($title: String, $programs: [String], $platforms: [String]) {
    commands(title: $title, programs: $programs, platforms: $platforms) {
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

class CommandList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.query.length !== nextProps.query.length;
  }

  render() {
    const { query } = this.props;
    var title = _.findWhere(query, { key: undefined });
    if (title !== undefined) {
      title = title.value;
    } else {
      title = "";
    }
    const programs = query.filter(q => q.key === "program").map(q => q.value);
    const platforms = query.filter(q => q.key === "platform").map(q => q.value);

    return (
      <Query
        query={COMMANDS_QUERY}
        variables={{ title: title, programs, platforms }}
      >
        {({ loading, error, data: { commands } }) => {
          if (loading) return "loading...";
          if (error) return "Error";
          return commands.map((command, idx) => (
            <CommandPreview key={command.id} command={command} />
          ));
        }}
      </Query>
    );
  }
}

CommandList.propTypes = {
  query: PropTypes.array
};

CommandList.defaultProps = {
  query: []
};

export default CommandList;
