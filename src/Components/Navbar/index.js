import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export const Header = () => (
  <Navbar fixed="top" bg="dark" variant="dark">
    <Navbar.Brand href="#home">Parlay</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link eventKey="link1">LINK 1</Nav.Link>
        <Nav.Link eventKey="link2">LINK 2</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export const Footer = () => (
  <Navbar fixed="bottom" bg="dark" variant="dark">
    <Navbar.Text style={{ textAlign: "center" }}>
      &copy; Parlay 2020
    </Navbar.Text>
  </Navbar>
);
