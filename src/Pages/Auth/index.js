import React, { useState } from "react";
import { RegistrationForm, LoginForm } from "../../Components/Authentication";

export default function Authentication() {
  const [login, setLogin] = useState(true);

  return (
    <>
      {login ? (
        <>
          <LoginForm />
        </>
      ) : (
        <>
          <RegistrationForm />
        </>
      )}
    </>
  );
}



