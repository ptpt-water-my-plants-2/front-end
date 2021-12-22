import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
    username: Yup
        .string()
        .required("Username is needed"),
    password: Yup
        .string()
        .required("Password is required")
})

export const signupSchema = Yup.object().shape({
    firstName: Yup
        .string()
        .required("First name is required"),
    lastName: Yup
        .string()
        .required("Last name is required"),
    username: Yup
        .string()
        .required("Username is needed"),
    phoneNumber: Yup
        .string()
        .required("Phone number is needed")
        .min(10, 'Must have 10 numbers'),
    password: Yup
        .string()
        .required("Password is required")
        .min(4, "Password must be at least 4 characters long") 
})

export const editUserSchema = Yup.object().shape({
    password: Yup
        .string()
        .required("Password is required")
        .min(4, "Password must be at least 4 characters long"),
    phoneNumber: Yup
        .string()
        .required("Phone number is needed")
        .min(10, 'Must have 10 numbers')
})

export const addPlantSchema = Yup.object().shape({
    nickname: Yup
        .string()
        .required("nickname is required"),
    species: Yup
        .string()
        .required("species is required"),
    h2OFrequency: Yup
        .string()
        .required("Enter a number")
})

export const editPlantSchema = Yup.object().shape({
    nickname: Yup
        .string()
        .required("nickname is required"),
    species: Yup
        .string()
        .required("species is required"),
    h2OFrequency: Yup
        .string()
        .required("Enter a number")
})