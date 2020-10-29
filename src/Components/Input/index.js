import React from "react";
import { useField } from "formik";
import "./style.css";

export const CustomField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
  
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
  