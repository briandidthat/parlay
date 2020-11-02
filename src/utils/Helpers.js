import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      sessionStorage.getItem("token") ? (
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
