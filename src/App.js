import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./Store";
import { Footer, Header } from "./Components/Navbar";
import Routes from "./utils/Routes";
import "./App.css";
import { SWRConfig } from "swr";
import axios from "axios";

export default function App() {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (...args) => axios.get(...args).then((res) => res.data),
      }}
    >
      <StateProvider>
        <Router>
          <Header />
          <div id="content">
            <Routes />
          </div>
          <Footer />
        </Router>
      </StateProvider>
    </SWRConfig>
  );
}
