import * as yup from 'yup';

export const LoginValidate= yup.object().shape({
    email: yup.string().trim().email().required("Email is required"),
    password: yup.string().trim().min(6).max(20).required("Password is required"),
});