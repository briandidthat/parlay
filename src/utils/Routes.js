import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Auth from "../Pages/Auth";
import { Home } from "../Pages/Home";

export const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/auth" component={Auth} />
  </Switch>
);
