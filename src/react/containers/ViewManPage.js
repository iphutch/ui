import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { ManPage } from "../components/ManPage";

const MANPAGE_QUERY = gql`
  query manPage($name: String!) {
    manPage(name: $name) {
      id
      name
      source
      nestedCommand
      paragraphs {
        idx
        short
        long
        expectsarg
        nestedCommand
        text
        section
        argument
        is_option
      }
      multicommand
      partialmatch
    }
  }
`;
const ViewManPage = ({ match }) => {
  return (
    <div className="view-manpage">
      <Query query={MANPAGE_QUERY} variables={match.params}>
        {({ loading, error, data: { manPage } }) => {
          if (loading) return "Loading";
          if (error) return `Error!: ${error}`;
          return <ManPage manPage={manPage} mode="view" />;
        }}
      </Query>
    </div>
  );
};

ViewManPage.propTypes = {
  match: PropTypes.object
};
export default ViewManPage;
