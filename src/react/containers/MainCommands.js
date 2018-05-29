import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faTerminal from "@fortawesome/fontawesome-free-solid/faTerminal";
import { CommandList } from "../components/Command";
import { ListWithFilter } from "../components/List";

const Content = props => {
  return (
    <div className="main-commands">
      <h2>
        <FontAwesomeIcon icon={faTerminal} className="header-nav-button-icon" />{" "}
        Commands
      </h2>
      <ListWithFilter render={query => <CommandList query={query} />} />
    </div>
  );
};

export default Content;
