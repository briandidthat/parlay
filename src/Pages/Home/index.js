import React from "react";
import { loadState } from "../../Store/actions";
import { Card, Container } from "react-bootstrap";

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
