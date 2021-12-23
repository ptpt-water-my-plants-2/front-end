import './App.css';
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Redirect } from "react-router";
import { useHistory } from 'react-router';

import Login from './components/signuplogins/login';
import Signup from './components/signuplogins/signup'
import NavBar from './components/Navbars/navbar';
import Home from './components/home'
import AddPlant from './components/Plants/addplant'
import EditUserProfile from './components/UserProfile/edituserprofile'
import PlantDetails from './components/Plants/plantdetails'
import PrivateRoute from './components/PrivateRoute'
import { GlobalPropsContext } from './components/GlobalPropsContext';
import axiosWithAuth from './components/utils/axiosWithAuth';
import Logout from './components/signuplogins/logout';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // set this to username once backend is seeding
  const [user_id, setUserId] = useState(null);
  const [usersPlants, setUsersPlants] = useState(null);
  const [IsFetchingUsersPlants, setIsFetchingUsersPlants] = useState(false)
  const [IsFetchingUserInfo, setIsFetchingUserInfo] = useState(false);

  // BUILD THIS TO KEEP USER LOGGED IN by token when they don't click logout
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLoggedIn(true)
      axiosWithAuth().post('https://water-my-plants-app2.herokuapp.com/api/auth/')
        .then((res => {
          setIsLoggedIn(true)
          setUserId(res.data)
          getUserInfo(res.data)
          getUsersPlants(res.data)

        }))
        .catch(err => {
          console.log(err);
          <Redirect to="/login" />
        })
    } else {
      return <Redirect to='/login' />
    }
  }, [])



  //GET USER INFO FROM USER ID
  async function getUserInfo(id) {
    setIsFetchingUserInfo(true);

    try {
      const res = await axiosWithAuth().get(`https://water-my-plants-app2.herokuapp.com/api/users/${id}`);
      setUser(res.data[0])
    }
    catch (err) {
      console.log("error: ", err);
    }

    setIsFetchingUserInfo(false);
  }

  //get plants that belong to user
  async function getUsersPlants(id) {
    setIsFetchingUsersPlants(true);

    try {
      const res = await axiosWithAuth().get(`https://water-my-plants-app2.herokuapp.com/api/users/${id}/users-plants`);
      setUsersPlants(res.data) // this is an array of objects
      setIsFetchingUsersPlants(false);
    }
    catch (err) {
      console.log("error: ", err);
    }

  }



  return (

    <Router>
      <div className="App">
        <GlobalPropsContext.Provider value={{ IsFetchingUserInfo, isLoggedIn, setIsLoggedIn, user, setUser, user_id, setUserId, usersPlants, IsFetchingUsersPlants, getUsersPlants, getUserInfo }}>

          <NavBar />
          <Switch>
            <Route exact path="/signup"><Signup /></Route>

            <Route exact path="/login"><Login getUsersPlants={getUsersPlants} getUserInfo={getUserInfo} user_id={user_id} setUserId={setUserId} /></Route>

            <Route exact path="/logout"><Logout setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setUserId={setUserId} /></Route>

            <PrivateRoute exact path="/addnewplant"><AddPlant /></PrivateRoute>

            <PrivateRoute path="/edituserprofile"><EditUserProfile /></PrivateRoute>

            <PrivateRoute path="/details/:id"><PlantDetails /></PrivateRoute>

            <PrivateRoute exact path="/" component={Home} />
          </Switch>

        </GlobalPropsContext.Provider>
      </div>
    </Router>

  );
}

export default App;
