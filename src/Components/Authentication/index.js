import React from "react";
import { Formik, Form, useField } from "formik";
import { RegisterSchema, LoginSchema } from "../../utils/Validation";
import "./auth.css";

const CustomField = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <>
      <label>
        {label}
        <input {...field} {...props} />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export function LoginForm() {
  return (
    <>
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
          <Form>
            <CustomField
              className="field"
              name="username"
              component={CustomField}
              placeholder="username"
              type="username"
            />
            <CustomField
              className="field"
              name="password"
              component={CustomField}
              placeholder="password"
              type="password"
            />
          </Form>
        )}
      </Formik>
    </>
  );
}

export function RegistrationForm() {
  return (
    <>
      <Formik
        initialValues={{ email: "", username: "", password: "", confirmPassword: "" }}
        validationSchema={RegisterSchema}
        validateOnChange={true}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        {() => (
          <Form>
            <CustomField
              label="Email"
              name="email"
              component={CustomField}
              placeholder="email"
              type="email"
            />
            <CustomField
              label="Username"
              name="username"
              component={CustomField}
              placeholder="username"
              type="text"
            />
            <CustomField
              label="Password"
              name="password"
              component={CustomField}
              placeholder="password"
              type="password"
            />
            <CustomField
              label="Confirm Password"
              name="confirmPassword"
              component={CustomField}
              placeholder="confirm"
              type="password"
            />
          </Form>
        )}
      </Formik>
    </>
  );
}
