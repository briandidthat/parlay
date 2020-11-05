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



export const getRoles = (token) => {
  let data = token.split('.')[1]; 
  let decoded = window.atob(data);
  let userClaims = JSON.parse(decoded).user_claims;

  return userClaims.roles;
}
