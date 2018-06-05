import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import PropTypes from "prop-types";

import Header from "../components/Header/Header";
import MainCommands from "./MainCommands";
import ViewManPage from "./ViewManPage";
import ViewCommand from "./ViewCommand";

const App = props => {
  return (
    <Fragment>
      <Header />
      <Container className="mt-3">
        <Switch>
          <Route path="/" exact component={MainCommands} />
          <Route path="/@:username/:slugTitle" component={ViewCommand} />
          <Route path="/manpages/:platformName/:name" component={ViewManPage} />
        </Switch>
      </Container>
    </Fragment>
  );
};

App.propTypes = {
  data: PropTypes.object
};

export default App;
