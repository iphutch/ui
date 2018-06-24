import React, { Component } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faTerminal from "@fortawesome/fontawesome-free-solid/faTerminal";
import { CommandList } from "../components/Command";
import { ListWithFilterV2 } from "../components/List";

class Content extends Component {
  componentDidMount() {
    document.title = "Commands - kommandr.com";
  }

  render() {
    return (
      <div className="main-commands">
        <h2>
          <FontAwesomeIcon
            icon={faTerminal}
            className="header-nav-button-icon"
          />{" "}
          Commands
        </h2>
        <ListWithFilterV2 render={query => <CommandList query={query} />} />
      </div>
    );
  }
}

export default Content;
