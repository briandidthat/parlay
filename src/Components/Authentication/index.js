import React from "react";
import { Formik, Form } from "formik";
import { CustomField } from "../Input";
import { RegisterSchema, LoginSchema } from "../../utils/Validation";
import { Col, Container, Row } from "react-bootstrap";

export function LoginForm() {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={LoginSchema}
      validateOnChange={true}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {() => (
        <Container fluid style={{ textAlign: "center" }}>
          <Form>
            <Row>
              <Col>
                <h1>Login</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <CustomField
                  className="field"
                  name="username"
                  component={CustomField}
                  placeholder="username"
                  type="username"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <CustomField
                  className="field"
                  name="password"
                  component={CustomField}
                  placeholder="password"
                  type="password"
                />
              </Col>
            </Row>
          </Form>
        </Container>
      )}
    </Formik>
  );
}

export function RegistrationForm() {
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
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {() => (
        <Container fluid style={{ textAlign: "center" }}>
          <Form>
            <Row>
              <Col>
                <h1>Register</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <CustomField
                  label="Email"
                  name="email"
                  component={CustomField}
                  placeholder="email"
                  type="email"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <CustomField
                  label="Username"
                  name="username"
                  component={CustomField}
                  placeholder="username"
                  type="text"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <CustomField
                  label="Password"
                  name="password"
                  component={CustomField}
                  placeholder="password"
                  type="password"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <CustomField
                  label="Confirm"
                  name="confirmPassword"
                  component={CustomField}
                  placeholder="confirm"
                  type="password"
                />
              </Col>
            </Row>
          </Form>
        </Container>
      )}
    </Formik>
  );
}
