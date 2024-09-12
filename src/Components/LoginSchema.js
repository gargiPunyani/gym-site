import * as Yup from "yup";


export const LoginSchema = Yup.object().shape({
    email: Yup.string().email()
    .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
         "Invalid Email" )
         .required("Required"),

    password: Yup.string().min(6)
    .max(12)
    .matches(
        "^(?=.*\\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$",
        "Must Contain 4 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
    .required("Required")
})