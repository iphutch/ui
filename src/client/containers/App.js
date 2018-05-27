import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import PropTypes from "prop-types";

import Header from "../components/Header/Header";

import MainCommands from "./MainCommands";
import MainManpages from "./MainManpages";

import "bootstrap/dist/css/bootstrap.css";
import "../style/main.scss";

const App = props => {
  return (
    <div className="">
      <Header />
      <Container className="mt-4">
        <Switch>
          <Route path="/commands" component={MainCommands} />
          <Route path="/manpages" component={MainManpages} />
        </Switch>
      </Container>
    </div>
  );
};

App.propTypes = {
  data: PropTypes.object
};

export default App;
