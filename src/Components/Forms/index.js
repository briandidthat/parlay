import React from "react";
import { Formik, Form, Field } from "formik";
import { login, register } from "../../Store/actions";
import { RegisterSchema, LoginSchema } from "../../utils/Validation";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./style.css";

export function LoginForm({ dispatch, history }) {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={LoginSchema}
      validateOnChange={true}
      onSubmit={(values, actions) => {
        login(values, dispatch).then(() => {
          actions.setSubmitting(false);
          actions.resetForm();
          history.push("/");
        });
      }}
    >
      {({ errors, touched }) => (
        <Container fluid style={{ textAlign: "center" }}>
          <Form>
            <Row className="mt-2">
              <Col>
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
            <Row className="mt-1">
              <Col>
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
            <Row className="mt-2">
              <Col>
                <Button type="submit" variant="dark">
                  Login
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      )}
    </Formik>
  );
}

export function RegistrationForm({ dispatch, history }) {
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
        let { email, username, password } = values;
        register({ email, username, password }, dispatch).then(() => {
          actions.setSubmitting(false);
          actions.resetForm();
          history.push("/");
        });
      }}
    >
      {({ errors, touched }) => (
        <Container fluid>
          <Form>
            <Row className="mt-2">
              <Col>
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
            <Row className="mt-1">
              <Col>
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
            <Row className="mt-1">
              <Col>
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
            <Row className="mt-1">
              <Col>
                <Field
                  label="Confirm"
                  name="confirmPassword"
                  placeholder="confirm password"
                  type="password"
                  id="confirm"
                />
                {touched.confirmPassword && errors.confirmPassword ? (
                  <div className="error">{errors.confirmPassword}</div>
                ) : null}
              </Col>
            </Row>
            <Row className="mt-2">
              <Col>
                <Button type="submit" variant="dark">
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
