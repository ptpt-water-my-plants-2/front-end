
import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { GlobalPropsContext } from "../GlobalPropsContext";
import { axiosWithAuth } from "../utils/axiosWithAuth";


// no longer using this component.  Function is directly inserted in navbar
const Logout = ({ isLoggedIn, setIsLoggedIn }) => {
    //const { isLoggedIn, setIsLoggedIn } = useContext(GlobalPropsContext);
    let history = useHistory();

    // axiosWithAuth().post('https://water-my-plants-app2.herokuapp.com/api/auth/logout')
    //.then(res => {
    // console.log(res, "res from logout")
    localStorage.removeItem("token")

    setIsLoggedIn(false)
    console.log(isLoggedIn)
    // window.location.pathname = '/https://localhost:9000/api/auth/login'

    history.push('/login');

    //  })
    // .catch(err => console.log(err))

    return (<div></div>);

}

export default Logout;

