
import React, { useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { GlobalPropsContext } from "../GlobalPropsContext";


const Logout = () => {
    const { setIsLoggedIn } = useContext(GlobalPropsContext);
    console.log('log out');
    let history = useHistory();
    let { params } = useParams();
    console.log(params, "params from logout");

    useEffect(() => {
        // setIsLoggedIn(false);
        history.push('/login');
    });

    return (<div></div>);
}

export default Logout;