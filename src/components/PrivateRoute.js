import React, { useContext } from "react";
import { Route, Redirect } from "react-router";
//import { GlobalPropsContext } from './GlobalPropsContext';


// this is going to a few things
// 1. wrap the plain Route component and pass the props through
// 2. check to see if the user is logged in, if yes, render component
// 3. if user is not logged in, we redirect to login

const PrivateRoute = ({ component: Component, ...rest }) => {
    // const { setIsLoggedIn, getUserInfo, getUsersPlants } = useContext(GlobalPropsContext);
    return (<Route
        {...rest}
        render={
            (props) => {
                if (localStorage.getItem('token')) {

                    return <Component {...props} />
                } else {
                    return <Redirect to='/login' />
                }
            }
        } />)
}

export default PrivateRoute


