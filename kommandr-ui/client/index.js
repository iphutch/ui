import React from "react";
import ReactDOM from "react-dom";

import ApolloCLient from "apollo-client";
import { ApolloProvider, createNetworkInterface } from "react-apollo";

import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./containers/App";

import "bootstrap/dist/css/bootstrap.css";
import "./style/main.scss";
import "codemirror/lib/codemirror.css";

const networkInterface = createNetworkInterface({
  opts: {
    credentials: "include"
  },
  uri: "http://localhost:5001/graphql"
});

const client = new ApolloCLient({
  networkInterface: networkInterface,
  dataIdFromObject: o => o.__typename + ":" + o.id
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
