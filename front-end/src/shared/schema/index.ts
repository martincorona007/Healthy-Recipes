import * as yup from "yup";
const schemaLogin = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required("Password is required")
    .max(15),
});
const schemaRegister = yup.object().shape({
  firstName: yup.string().required("First Name required"),
  lastName: yup.string().required("Last Name required"),
  user: yup.string().required("User required"),
  email: yup.string().email().required(),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "Password must be at least 4 characters")
    .max(15),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});
export {schemaLogin,schemaRegister}