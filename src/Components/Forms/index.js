import React from "react";
import { Formik, Form, Field } from "formik";
import { RegisterSchema, LoginSchema } from "../../utils/Validation";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./style.css";

export function LoginForm() {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={LoginSchema}
      validateOnChange={true}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values));
        actions.setSubmitting(false);
      }}
    >
      {({ errors, touched }) => (
        <Container fluid style={{ textAlign: "center" }}>
          <Form>
            <Row>
              <Col>
                <label htmlFor="username">Username</label>
                <Field
                  name="username"
                  placeholder="username"
                  type="text"
                  id="username"
                />
                {touched.username && errors.username ? (
                  <div className="error">{errors.username}</div>
                ) : null}
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="password">Password</label>
                <Field
                  name="password"
                  placeholder="password"
                  type="password"
                  id="password"
                />
                {touched.password && errors.password ? (
                  <div className="error">{errors.password}</div>
                ) : null}
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Button type="submit">Login</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      )}
    </Formik>
  );
}

export function RegistrationForm() {
  console.log("REGISTERFORM RENDERING...");
  return (
    <Formik
      initialValues={{
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={RegisterSchema}
      validateOnChange={true}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values));
        // let { email, username, password } = values;
        actions.setSubmitting(false);
      }}
    >
      {({ errors, touched }) => (
        <Container fluid>
          <Form>
            <Row>
              <Col>
                <label htmlFor="email">Email</label>
                <Field
                  name="email"
                  placeholder="email"
                  type="email"
                  id="email"
                />
                {touched.email && errors.email ? (
                  <div className="error">{errors.email}</div>
                ) : null}
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="username">Username</label>
                <Field
                  name="username"
                  placeholder="username"
                  type="text"
                  id="username"
                />
                {touched.username && errors.username ? (
                  <div className="error">{errors.username}</div>
                ) : null}
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="password">Password</label>
                <Field
                  name="password"
                  placeholder="password"
                  type="password"
                  id="password"
                />
                {touched.password && errors.password ? (
                  <div className="error">{errors.password}</div>
                ) : null}
              </Col>
            </Row>
            <Row>
              <Col>
                <label htmlFor="confirm">Confirm</label>
                <Field
                  label="Confirm"
                  name="confirmPassword"
                  placeholder="confirm"
                  type="password"
                  id="confirm"
                />
                {touched.confirmPassword && errors.confirmPassword ? (
                  <div className="error">{errors.confirmPassword}</div>
                ) : null}
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <Button type="submit" variant="primary">
                  Register
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      )}
    </Formik>
  );
}
