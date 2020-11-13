import React, { useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import { useUserState } from "../../Store";
import API from "../../utils/API";

export default function Home() {
  const state = useUserState();

  useEffect(() => {
    API.loadHome(localStorage.getItem("token"))
      .then((vals) => {
        console.log(vals.data);
      })
      .catch((err) => {
        alert(JSON.stringify(err.message, null, 2));
      });
  }, []);

  return (
    <Container>
      <Card className="text-center">
        <pre>{JSON.stringify(state, null, 2)}</pre>
      </Card>
    </Container>
  );
}
