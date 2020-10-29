import { Card } from "react-bootstrap";
import React, { useState } from "react";
import { RegistrationForm, LoginForm } from "../../Components/Authentication";

export default function Authentication() {
  const [login] = useState(false);

  return (
    <div className="col d-flex justify-content-center">
      <Card>
        {login ? <LoginForm /> : <RegistrationForm />}
      </Card>
    </div>
  );
}
