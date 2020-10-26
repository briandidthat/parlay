import React from "react";
import { Formik, Form, Field } from "formik";
import { RegisterSchema } from "../../utils/Validation";

export default function RegistrationForm({ register }) {
  return (
    <>
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        validationSchema={RegisterSchema}
        validateOnChange={true}
      >
        {({ values, errors, touched, resetForm }) => {
          <Form>
              
          </Form>;
        }}
      </Formik>
    </>
  );
}
