import React from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import ProgramPreview from "./ProgramPreview";

const SIMILAR_PROGRAMS_QUERY = gql`
  query programs($cliName: String!, $platformName: String, $k: Int!) {
    programs: similarPrograms(
      cliName: $cliName
      platformName: $platformName
      k: $k
    ) {
      id
      cliName
      name
      totalViews
      shortDescription
      platformName
    }
  }
`;
const SimilarPrograms = ({ program, platformName }) => {
  return (
    <div className="similar-commands">
      <h3>Similar Programs</h3>
      <Query
        query={SIMILAR_PROGRAMS_QUERY}
        variables={{ cliName: program, platformName, k: 6 }}
      >
        {({ loading, error, data: { programs } }) => {
          if (loading) return "Loading";
          if (error) return `Error: ${error}`;
          return programs.map((program, idx) => (
            <ProgramPreview key={program.id} program={program} mode="minimal" />
          ));
        }}
      </Query>
    </div>
  );
};

SimilarPrograms.propTypes = {
  program: PropTypes.string,
  platformName: PropTypes.string
};

export default SimilarPrograms;
