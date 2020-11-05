import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useState } from "../../Store/context/user-context";

export const Header = () => {
  const [state, dispatch] = useState();

  console.log("HEADER RENDERING...");
  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>Parlay</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        <Nav className="justify-content-end">
          {state.username}
          {state.isAuthenticated ? (
            <Nav.Link
              eventKey="link1"
              onClick={() => dispatch({ type: "LOGOUT" })}
            >
              Logout
            </Nav.Link>
          ) : (
            <Nav.Link eventKey="link1">Register</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export const Footer = () => (
  <Navbar fixed="bottom" bg="dark" variant="dark">
    <Nav justify className="m-auto">
      <Nav.Item>
        <Navbar.Brand>&copy; Parlay 2020</Navbar.Brand>
      </Nav.Item>
    </Nav>
  </Navbar>
);
