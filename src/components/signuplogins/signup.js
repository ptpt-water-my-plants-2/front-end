// 1. `user` can sign-up / create an account by providing 
// a unique `username`, a valid mobile `phoneNumber` and a `password`.

import "../../App.css"
import { useState, useContext } from "react";
import { useHistory } from "react-router";
//import { GlobalPropsContext } from '../GlobalPropsContext';


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
const initialDisabled = true;


export default function Signup() {
    const [signUpFormValues, setSignUpFormValues] = useState(initialsignUpFormValues);
    const [signUpFormValueErrors, setSignUpFormValueErrors] = useState(initialSignUpFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled);
    let history = useHistory();



    // controls the form input changes via state
    const onChange = (e) => {
        setSignUpFormValues({
            ...signUpFormValues, [e.target.name]: e.target.value
        })
    }

    // adjusts `disabled` when `formValues` change
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



    return (
        <div>
            <div>
                <form onSubmit="" className="form">
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
                        placeholder="youremail@email.com"
                        name="email"
                        label="email"
                        type="email"
                        id="email"
                        onChange={onChange}
                        value={signUpFormValues.email}
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


