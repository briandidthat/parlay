import React from "react";
import { Card, Container } from "react-bootstrap";
import { loadState } from "../../utils/Helpers";

export default function Home() {
  const state = loadState();

  return (
    <Container>
      <Card className="text-center">
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </Card>
    </Container>
  );
}
