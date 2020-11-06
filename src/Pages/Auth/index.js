import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "../../Store";
import { RegistrationForm, LoginForm } from "../../Components/Forms";

export default function Authentication() {
  const login = useState(false);
  const dispatch = useDispatch();

  console.log("AUTHPAGE RENDERING...");
  return (
    <>
      <div className="col d-flex justify-content-center">
        <Card className="text-center">
          <Card.Header as="h5">{login ? "LOGIN" : "REGISTER"}</Card.Header>
          <Card.Body>
            {login ? (
              <LoginForm dispatch={dispatch} />
            ) : (
              <RegistrationForm dispatch={dispatch} />
            )}
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
