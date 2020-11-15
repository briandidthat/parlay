import React, { useEffect } from "react";
import { useSystemState } from "../../Store";
import { Card, Container } from "react-bootstrap";
import { LOAD_STATE } from "../../Store/actions/types";

export default function Home() {
  const [state, dispatch] = useSystemState();

  useEffect(() => {
    dispatch({ type: LOAD_STATE });
  }, [dispatch]);

  return (
    <Container>
      <Card className="text-center">
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </Card>
    </Container>
  );
}
