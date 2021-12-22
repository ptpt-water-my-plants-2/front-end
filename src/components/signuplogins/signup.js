// 1. `user` can sign-up / create an account by providing 
// a unique `username`, a valid mobile `phoneNumber` and a `password`.

import "../../App.css"
import { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";
//import { GlobalPropsContext } from '../GlobalPropsContext';
import { signupSchema } from "../../validation/formSchemas";
import * as yup from 'yup';

const initialsignUpFormValues = {
    firstName: '',
    lastName: '',
    username: '',
    phoneNumber: '',
    password: ''
}

const initialSignUpFormErrors = {
    firstName: '',
    lastName: '',
    username: '',
    phoneNumber: '',
    password: '',
}

// submit is disabled until inputs validated
// this should be set to true once validation is set up
const initialDisabled = false;


export default function Signup() {
    const [signUpFormValues, setSignUpFormValues] = useState(initialsignUpFormValues);
    const [signUpFormValueErrors, setSignUpFormValueErrors] = useState(initialSignUpFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled);
    let history = useHistory();



    // controls the form input changes via state
    const onChange = (e) => {
        const { name, value } = e.target;

        //checks validation with yup, run form errors
        yup.reach(signupSchema, name)
            .validate(value)
            .then(() => {
                setSignUpFormValueErrors({ ...signUpFormValueErrors, [name]: "" })
            })
            .catch(err => {
                setSignUpFormValueErrors({ ...signUpFormValueErrors, [name]: err.message })
            })


        console.log(signUpFormValues)

        setSignUpFormValues({
            ...signUpFormValues, [name]: value
        })
    }

    // adjusts `disabled` when `formValues` change

    useEffect(() => {
        signupSchema.isValid(signUpFormValues)
            .then(isSchemaValid => {
                setDisabled(!isSchemaValid) //disable the submt button if not valid
            })
    }, [signUpFormValues])

    //   useEffect(() => {
    //     schema.isValid(loginFormValues)
    //         .then(isSchemaValid => {
    //             setDisabled(!isSchemaValid) //disable the submt button if not valid
    //         })
    // }, [loginFormValues])


    //checks validation with yup, run form errors
    // yup.reach(schema, name)
    //   .validate(value)
    //   .then(() => {
    //     setSignUpFormErrors({ ...signUpformErrors, [name]: "" })
    //   })
    //   .catch(err => {
    //     setSignUpFormErrors({ ...signUpformErrors, [name]: err.message })
    //   })

    // possibly trim these if yu haven't elsewhere
    let registerWithTheseFormValues = {
        firstName: signUpFormValues.firstName,
        lastName: signUpFormValues.lastName,
        username: signUpFormValues.username,
        phoneNumber: signUpFormValues.phoneNumber,
        password: `${(signUpFormValues.password === signUpFormValues.retypePassword) ? signUpFormValues.password : ""}`
    }

    const registerNewUser = (e) => {
        e.preventDefault();
        console.log("submit clicked for register user")
        axios.post('https://water-my-plants-app2.herokuapp.com/api/auth/register', registerWithTheseFormValues)
            .then((res) => {
                console.log(res, "res from registering new user")
                alert(`Welcome ${registerWithTheseFormValues.firstName}! Please login to begin your plant care!`)
                history.push("/login")
            })
            .catch((err) => {
                console.log(err, "error in registering new user")
            })
    }


    return (
        <div>
            <div>
                <form onSubmit={registerNewUser} className="form">
                    {<h1>Sign Up</h1>}
                    <input
                        placeholder="First Name"
                        name="firstName"
                        label="firstName"
                        type="text"
                        id="firstName"
                        onChange={onChange}
                        value={signUpFormValues.firstName}
                    />
                    <input
                        placeholder="Last Name"
                        name="lastName"
                        label="lastName"
                        type="text"
                        id="lastName"
                        onChange={onChange}
                        value={signUpFormValues.lastName}
                    />
                    <input
                        placeholder="username"
                        name="username"
                        label="username"
                        type="text"
                        id="username"
                        onChange={onChange}
                        value={signUpFormValues.username}
                    />

                    <input
                        placeholder="8675309"
                        name="phoneNumber"
                        label="phoneNumber"
                        type="phoneNumber"
                        id="phoneNumber"
                        onChange={onChange}
                        value={signUpFormValues.phoneNumber}
                    />
                    <input
                        placeholder="password"
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        onChange={onChange}
                        value={signUpFormValues.password}
                    />
                    {/* <input
                        placeholder="re-type password"
                        name="retypePassword"
                        label="retypePassword"
                        type="password"
                        id="password"
                        onChange={onChange}
                        value={signUpFormValues.retypePassword}
                    /> */}
                    <button type="submit" disabled={disabled}>
                        Sign Up!
                    </button>
                </form>
            </div>
        </div>
    )
}


