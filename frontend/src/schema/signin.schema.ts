import * as yup from "yup";

export const signinSchema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(5, "Min 5 chars").max(30, "Max 30 chars").required("Password is required"),
});
