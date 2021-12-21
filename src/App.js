import './App.css';
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


import Login from './components/signuplogins/login';
import Signup from './components/signuplogins/signup'
import NavBar from './components/Navbars/navbar';
import Home from './components/home'
import AddPlant from './components/Plants/addplant'
import EditPlant from './components/Plants/editplant'
import EditUserProfile from './components/UserProfile/edituserprofile'
import PlantDetails from './components/Plants/plantdetails'
import PrivateRoute from './components/PrivateRoute'
import { GlobalPropsContext } from './components/GlobalPropsContext';
import { axiosWithAuth } from './components/utils/axiosWithAuth';
import Logout from './components/signuplogins/logout';


const initialFakePlantData = [
  {
    'plantId': 1,
    'nickname': 'Corny',
    'species': 'Corn Plant',
    'h20Frequency': 10, // EVERY 10 DAYS
    // 'howMuchWater': '1/4 cup',
    // 'image': ''
  },
  {
    'plantId': 2,
    'nickname': 'Spidy',
    'species': 'Spider Plant',
    'h20Frequency': 7, // 7 DAYS
    // 'howMuchWater': '2 cups',
    // 'image': ''
  },
  {
    'plantId': 3,
    'nickname': 'Orchid',
    'species': 'Orchid Species',
    'h20Frequency': 7,  // 7 DAYS
    // 'howMuchWater': '1/4 cup',
    // 'image': ''
  },
]


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // set this to username once backend is seeding
  const [user_id, setUserId] = useState(null);
  const [usersPlants, setUsersPlants] = useState(null);
  const [IsFetchingUsersPlants, setIsFetchingUsersPlants] = useState(false)
  const [IsFetchingUserInfo, setIsFetchingUserInfo] = useState(false);

  console.log(user_id, "user_id")
  console.log(isLoggedIn, "isLoggedIn")

  // BUILD THIS TO KEEP USER LOGGED IN by token when they don't click logout
  useEffect(() => {
    //api call to check token
    //post request tpass in token
    // backend router needs to validate token and then send back user_id that belongs to token
    // loclalstorage.getitem.(:token)
    //if response then isLoggedIn = true
    //setUserId   setUserPlants
    //
  }, [])

  //GET USER INFO FROM USER ID
  async function getUserInfo(id) {
    setIsFetchingUserInfo(true);

    try {
      const res = await axiosWithAuth().get(`https://water-my-plants-app2.herokuapp.com/api/users/${id}`);
      console.log(res, "get user info res")
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
      console.log(res, "get users plants-- res")
      setUsersPlants(res.data) // this is an array of objects
    }
    catch (err) {
      console.log("error: ", err);
    }
    setIsFetchingUsersPlants(false);
  }



  return (

    <Router>
      <div className="App">
        <GlobalPropsContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser, user_id, setUserId, usersPlants, IsFetchingUsersPlants }}>

          <NavBar />
          <Switch>
            <Route exact path="/signup"><Signup /></Route>

            <Route exact path="/login"><Login getUsersPlants={getUsersPlants} getUserInfo={getUserInfo} user_id={user_id} setUserId={setUserId} /></Route>

            <Route exact path="/logout"><Logout setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} setUserId={setUserId} /></Route>

            <Route exact path="/addnewplant"> <AddPlant /></Route>
            <Route path="/edituserprofile"> <EditUserProfile /></Route>
            <Route exact path="/editplant"> <EditPlant /></Route>

            <Route path="/details/:id"> <PlantDetails /></Route>

            {/* <Route exact path="/"><Home /></Route> */}

            <PrivateRoute exact path="/" component={Home} />
          </Switch>

        </GlobalPropsContext.Provider>
      </div>
    </Router>

  );
}

export default App;
