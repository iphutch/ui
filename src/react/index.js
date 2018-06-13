import React from "react";
import ReactDOM from "react-dom";
import ApolloCLient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { App } from "./containers";

import "bootstrap/dist/css/bootstrap.css";
import "../style/main.scss";
import "codemirror/lib/codemirror.css";

const client = new ApolloCLient({
  uri: "/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
