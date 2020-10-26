import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GridContainer from "./Components/Grid";
import { Grid } from "@material-ui/core";
import "./App.css";
import { AppRoutes } from "./utils/Routes"

function App() {
  return (
      <Router>
        <AppRoutes />
      </Router>
  );
}

export default App;
