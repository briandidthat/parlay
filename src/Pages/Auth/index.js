import { Card } from "react-bootstrap";
import React, { useState } from "react";
import { RegistrationForm, LoginForm } from "../../Components/Forms";

export default function Authentication() {
  const [login] = useState(false);
  console.log("AUTHPAGE RENDERING...")
  return (
    <div className="col d-flex justify-content-center">
      <Card className="text-center">
        <Card.Header as="h5">{login ? "LOGIN" : "REGISTER"}</Card.Header>
        <Card.Body>{login ? <LoginForm /> : <RegistrationForm />}</Card.Body>
      </Card>
    </div>
  );
}
