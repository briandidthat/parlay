import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ component, ...rest }) => (
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

export const storeToken = (token) => {
  localStorage.setItem("token", token);
};

export const clearToken = () => {
  if (localStorage.getItem("token")) {
    localStorage.removeItem("token");
  };
};

export const getUserClaims = (token) => {
  let data = token.split(".")[1];
  let decoded = window.atob(data);
  let userClaims = JSON.parse(decoded).user_claims;

  return userClaims;
};
