import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./Store";
import { Footer, Header } from "./Components/Navbar";
import Routes from "./utils/Routes";
import "./App.css";

export default function App() {
  return (
    <StateProvider>
      <Router>
        <Header />
        <div id="content">
          <Routes />
        </div>
        <Footer />
      </Router>
    </StateProvider>
  );
}
