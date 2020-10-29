import { Card } from "react-bootstrap";
import React, { useState } from "react";
import { RegistrationForm, LoginForm } from "../../Components/Forms";

export default function Authentication() {
  const [login] = useState(true);

  return (
    <div className="col d-flex justify-content-center">
      <Card className="text-center">
        <Card.Body>
        {login ? <LoginForm /> : <RegistrationForm />}
        </Card.Body>
      </Card>
    </div>
  );
}
