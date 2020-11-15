import React from "react";
import { Card, Container } from "react-bootstrap";
import { useUserState } from "../../Store";

export default function Profile() {
  const state = useUserState();

  return (
    <Container>
      <Card className="text-center">
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </Card>
    </Container>
  );
}
