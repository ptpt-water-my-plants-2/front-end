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
//import PrivateRoute from './components/PrivateRoute'
import { GlobalPropsContext } from './components/GlobalPropsContext';
import { axiosWithAuth } from './components/utils/axiosWithAuth';


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
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState("Plantguy"); // set this to username once backend is seeding
  const [user_id, setUserId] = useState();
  const [usersPlants, setUsersPlants] = useState(initialFakePlantData);  // seed soon from backend
  const [IsFetchingUserInfo, setIsFetchingUserInfo] = useState(false);



  //GET USER INFO FROM USER ID
  useEffect(() => {
    async function getUserInfo() {
      setIsFetchingUserInfo(true);

      try {
        const res = await axiosWithAuth().get(`https://water-my-plants-app2.herokuapp.com/api/users/${user_id}`);
        console.log(res, "get user info res")

      }
      catch (err) {
        console.log("error: ", err);
      }

      setIsFetchingUserInfo(false);
    }
    getUserInfo();
  }, user_id)


  return (

    <Router>
      <div className="App">
        <GlobalPropsContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser, user_id, setUserId, usersPlants }}>

          <NavBar />
          <Switch>
            <Route exact path="/signup"><Signup /></Route>

            <Route exact path="/login"><Login /></Route>

            <Route exact path="/addnewplant"> <AddPlant /></Route>
            <Route path="/edituserprofile"> <EditUserProfile /></Route>
            <Route exact path="/editplant"> <EditPlant /></Route>

            <Route path="/details/:id"> <PlantDetails /></Route>

            <Route exact path="/"><Home /></Route>

            {/* <PrivateRoute exact path="/" component={Home} /> */}
          </Switch>

        </GlobalPropsContext.Provider>
      </div>
    </Router>

  );
}

export default App;
