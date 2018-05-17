import React from "react";
import PropTypes from "prop-types";

const Tally = ({ children }) => {
  console.log(children);
  const tallies = children.map((tally, idx) => {
    return (
      <li className="tally" key={idx}>
        {tally}
      </li>
    );
  });

  return <ul className="tally-container">{tallies}</ul>;
};

Tally.propTypes = {
  children: PropTypes.node.isRequired
};

export default Tally;
