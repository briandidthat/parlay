import React from "react";
import { Formik, Form, useField } from "formik";
import { RegisterSchema, LoginSchema } from "../../utils/Validation";

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
              name="username"
              component={CustomField}
              placeholder="text"
            />
            <CustomField
              name="password"
              component={CustomField}
              placeholder="password"
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
        initialValues={{ email: "", username: "", password: "" }}
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
              name="email"
              component={CustomField}
              placeholder="email"
            />
            <CustomField
              name="username"
              component={CustomField}
              placeholder="text"
            />
            <CustomField
              name="password"
              component={CustomField}
              placeholder="password"
            />
          </Form>
        )}
      </Formik>
    </>
  );
}
