import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
    username: Yup.string().required("Username is required."),
    password: Yup.string().required("Password is required.")
});

export const RegisterSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format.").required("Email address is required."),
    username: Yup.string().required("Username is required."),
    password: Yup.string().required("Password is required.")
});