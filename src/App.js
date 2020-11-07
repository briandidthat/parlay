import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./utils/Helpers";
import { StateProvider } from "./Store";
import { Auth, Home, Error } from "./Pages";
import { Footer, Header } from "./Components/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <StateProvider>
        <Header />
        <div id="content">
          <Router>
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <PublicRoute exact path="/auth" component={Auth} />
              <PrivateRoute exact path="/dashboard" type="" component={Error} />
              <Route component={Error} />
            </Switch>
          </Router>
        </div>
        <Footer />
      </StateProvider>
    </>
  );
}

export default App;
