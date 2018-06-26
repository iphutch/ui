import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import CommandPreview from "./CommandPreview";
import gql from "graphql-tag";
import _ from "underscore";

const COMMANDS_QUERY = gql`
  query commands(
    $title: String
    $programs: [String]
    $platforms: [String]
    $sortBy: String
  ) {
    commands(
      title: $title
      programs: $programs
      platforms: $platforms
      sortBy: $sortBy
    ) {
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
    const { query, sortBy } = this.props;
    return (
      query.length !== nextProps.query.length || sortBy !== nextProps.sortBy
    );
  }

  render() {
    const { query, sortBy } = this.props;
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
        variables={{ title: title, programs, platforms, sortBy }}
      >
        {({ loading, error, data: { commands } }) => {
          if (loading) return "loading...";
          if (error) return "Error";
          if (commands.length === 0) {
            return (
              <h3>
                It looks like your search didn't get any results... Try a
                different query
              </h3>
            );
          } else {
            return (
              <Fragment>
                <div className="label-container">
                  Showing results for {commands.length} commands
                </div>

                {commands.map((command, idx) => (
                  <CommandPreview key={command.id} command={command} />
                ))}
              </Fragment>
            );
          }
        }}
      </Query>
    );
  }
}

CommandList.propTypes = {
  query: PropTypes.array,
  sortBy: PropTypes.string
};

CommandList.defaultProps = {
  query: [],
  sortBy: "most_popular"
};

export default CommandList;
