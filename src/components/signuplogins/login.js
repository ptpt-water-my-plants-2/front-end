//1. User can create/register as a client and login with the registered credentials.
// MARK

//2. User can create/register as an instructor 
//by entering an additional Auth Code during signup, 
//and can login with the registered credentials.
import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router";
import { GlobalPropsContext } from '../GlobalPropsContext'
import axios from 'axios';


// Initial log in form values
const initialLogInFormValues = { username: "", password: "" };


export default function Login() {
    const [loginFormValues, setLogInFormValues] = useState(initialLogInFormValues);
    const { user, setIsLoggedIn } = useContext(GlobalPropsContext);
    const [loginError, setLoginError] = useState(false);

    let history = useHistory();

    useEffect(() => {
        axios.post('https://water-my-plants-app2.herokuapp.com/api/auth/login', loginFormValues)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }, []);

    const onChange = (e) => {
        setLogInFormValues({
            ...loginFormValues, 
            [e.target.name]: e.target.value
        })
    }
    
    console.log(loginFormValues);

    const loginSubmitHandler = (e) => {
        e.preventDefault();
        // setIsLoading(true);
        // console.log(isLoading);
        // if (user === true) {
        //     if (loginFormValues.username !== "lambda" && loginFormValues.password !== "school") {
        //         setLoginError(true);
        //     } else {
        //         setLoginError(false);
        //         setIsLoggedIn(true);
        //         history.push("/")
        //     }
        // }
        axios.post('https://water-my-plants-app2.herokuapp.com/api/auth/login', loginFormValues)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }



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
                    LogIn
                </button>
            </form>
        </div>
    )
}
