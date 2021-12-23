//1. User can create/register as a client and login with the registered credentials.
// MARK

//2. User can create/register as an instructor 
//by entering an additional Auth Code during signup, 
//and can login with the registered credentials.
import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Redirect } from "react-router-dom";
import { GlobalPropsContext } from '../GlobalPropsContext'
import axios from 'axios';
import { loginSchema } from "../../validation/formSchemas";
import * as yup from 'yup';

// Initial log in form values
const initialLogInFormValues = { username: "", password: "" };
const initialLogInFormErrors = { username: "", password: "" };

export default function Login({ getUserInfo, getUsersPlants }) {
    const [loginFormValues, setLogInFormValues] = useState(initialLogInFormValues);
    const { isLoggedIn, setIsLoggedIn, user_id, setUserId } = useContext(GlobalPropsContext);
    const [loginErrors, setLoginErrors] = useState(initialLogInFormErrors);
    // const [disabled, setDisabled] = useState(true);

    let history = useHistory();


    // useEffect(() => {
    //     axios.post('https://water-my-plants-app2.herokuapp.com/api/auth/login', loginFormValues)
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err));
    // }, []);


    const onChange = (e) => {
        const { name, value } = e.target;

        yup.reach(loginSchema, name)
            .validate(value)
            .then(() => {
                setLoginErrors({ ...loginErrors, [name]: "" })
            })
            .catch(err => {
                setLoginErrors({ ...loginErrors, [name]: err.message })
            });

        setLogInFormValues({
            ...loginFormValues,
            [name]: value
        })
    }


    const loginSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('https://water-my-plants-app2.herokuapp.com/api/auth/login', loginFormValues)
            .then((res => {
                localStorage.setItem('token', res.data.token);
                console.log(res, "res")
                if (localStorage.getItem('token')) {
                    setIsLoggedIn(true)
                    setUserId(res.data.user_id)
                    getUserInfo(res.data.user_id).then((res) => {
                        console.log(res, "userInfo from login")
                    });
                    getUsersPlants(res.data.user_id).then((res) => {
                        history.push("/")
                    })
                }
            }))
            .catch(err => {
                console.log(err);
                <Redirect to="/login" />
            })
    }


    // useEffect(() => {
    //     loginSchema
    //         .isValid(loginFormValues)
    //         .then(isSchemaNotValid => {
    //             setDisabled(!isSchemaNotValid)
    //         })
    // }, [])




    return (
        <div>
            <form onSubmit={loginSubmitHandler} className="form">
                {<h1>Login</h1>}
                <input
                    placeholder="username"
                    name="username"
                    label="username"
                    type="text"
                    id="username"
                    onChange={onChange}
                    value={loginFormValues.username}
                />
                <input
                    placeholder="password"
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    onChange={onChange}
                    value={loginFormValues.password}
                />
                <button type="submit">
                    Log In
                </button>
            </form>
            <div className='errors'>
                <p>{loginErrors.username}</p>
                <p>{loginErrors.password}</p>
            </div>
        </div>
    )
}
