import { Grid, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { RegistrationForm, LoginForm } from "../../Components/Authentication";

export default function Authentication() {
  const [login, setLogin] = useState(false);

  return (
    <>
      <Grid container justify="center" alignItems="center" className="grid">
        <Paper elevation={3}>
          {login ? (
            <Grid item sm spacing={3}>
              <LoginForm />
            </Grid>
          ) : (
            <Grid item sm spacing={3}>
              <RegistrationForm />
            </Grid>
          )}
        </Paper>
      </Grid>
    </>
  );
}
