import React from "react";
import { Container } from "react-bootstrap";
import { Switch, Redirect, Route } from "react-router-dom";
import { Auth, Home, Error } from "../Pages";

function PrivateRoute({ component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") ? (
          React.createElement(component, props)
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

function PublicRoute({ component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") ? (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        ) : (
          React.createElement(component, props)
        )
      }
    />
  );
}

const Routes = () => (
  <Container>
    <Switch>
      <PrivateRoute exact path="/" component={Home} />
      <PublicRoute exact path="/auth" component={Auth} />
      <Route component={Error} />
    </Switch>
  </Container>
);

export default Routes;
