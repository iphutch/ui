import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import { CommandLine, ViewCommandLine } from "../components/CommandLine/";
import { ModalLogin, ModalHelp } from "../components/Modal/";

import { SidebarSearch } from "../components/Sidebar";
import ModalWelcome from "../components/Modal/ModalWelcome";

class Main extends Component {
  render() {
    return (
      <main className="d-flex">
        <div className="command-line-container d-flex flex-column">
          <Route path="/login" exact component={ModalLogin} />
          <Route path="/help" exact component={ModalHelp} />
          <Switch>
            <h1>hola</h1>
          </Switch>
        </div>
        <SidebarSearch />
        <ModalWelcome />
      </main>
    );
  }
}

export default Main;
