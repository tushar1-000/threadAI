import * as yup from "yup";

export const signupSchema = yup.object({
  name: yup.string().min(2, "Min 2 chars").max(30, "Max 30 chars").required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(5, "Min 5 chars").max(30, "Max 30 chars").required("Password is required"),
  confirmPassword: yup
    .string()
    .min(5, "Min 5 chars")
    .max(30, "Max 30 chars")
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Password doesn't match"),
});



export type SignUpInput = yup.InferType<typeof signupSchema>;