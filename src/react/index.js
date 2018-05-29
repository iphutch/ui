import React from "react";
import ReactDOM from "react-dom";

import ApolloCLient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { App } from "./containers";
import gql from "graphql-tag";

import "bootstrap/dist/css/bootstrap.css";
import "../style/main.scss";
import "codemirror/lib/codemirror.css";

const client = new ApolloCLient({
  uri: "http://192.168.99.100:5001/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
