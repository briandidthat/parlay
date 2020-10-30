import React from "react";
import { Card, Container } from "react-bootstrap";

export default function Error({ location }) {
  return (
    <Container>
      <Card className="text-center">
        <Card.Header>
          <h5>404</h5>
        </Card.Header>
        <Card.Body>
          <h2>No match found for {location.pathname}</h2>
        </Card.Body>
      </Card>
    </Container>
  );
}
