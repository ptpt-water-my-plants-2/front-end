import './App.css';
import { useState } from "react"
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

const fakeUser = {
    username: 'idkw',
    password: '1234',
    phoneNumber: '123-555-6666'
};

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
  const [user, setUser] = useState(fakeUser); // set this to username once backend is seeding
  const [usersPlants, setUsersPlants] = useState(initialFakePlantData);  // seed soon from backend
  //const [isFetchingPlants, setIsFetchingPlants] = useState(false);


  //*******will be used once api is ready for getting classes******
  // const client = axios.create({
  //   baseURL: "https://reqres.in"
  // });

  // useEffect(() => {
  //   async function getAllPlants() {
  //     setIsFetchingPlants(true);

  //     try {
  //       const res = await client.get("/api/unknown");
  //       //setAllPlants(res.data);

  //     }
  //     catch (err) {
  //       console.log("error: ", err);
  //     }

  //     setIsFetchingPlants(false);
  //   }
  //   getAllPlants();
  // }, [])


  return (

    <Router>
      <div className="App">
        <GlobalPropsContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser, usersPlants }}>

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
