import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSystemState } from "../../Store";
import { logout } from "../../Store/actions";

export const Header = () => {
  const [state, dispatch] = useSystemState();
  const history = useHistory();

  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>Parlay</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        <Nav className="justify-content-end">
          {state.isAuthenticated ? (
            <Nav.Link
              eventKey="link1"
              onClick={() => {
                Promise.all([logout(dispatch), history.push("/auth")]);
              }}
            >
              Logout
            </Nav.Link>
          ) : null}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export const Footer = () => {
  return (
    <Navbar fixed="bottom" bg="dark" variant="dark">
      <Nav justify className="m-auto">
        <Nav.Item>
          <Navbar.Brand>&copy; Parlay 2020</Navbar.Brand>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};
