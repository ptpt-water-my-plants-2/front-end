import { useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router"
import "../../App.css"
import { GlobalPropsContext } from "../GlobalPropsContext";



export default function NavBar() {
    const { isLoggedIn, setIsLoggedIn } = useContext(GlobalPropsContext);
    let history = useHistory();

    // logout function 
    const logout = () => {
        localStorage.removeItem("token")

        setIsLoggedIn(false)

        history.push('/login');
    }


    return (
        <div className="navBar">
            <nav className="computerNav">
                <ul>
                    {/* Home shown for User*/}
                    {(isLoggedIn === true) && <li><Link to="/">Home</Link></li>}


                    {/* createPlant available when user logged in */}
                    {(isLoggedIn === true) && <li><Link to="/addnewplant">Add a Plant</Link></li>}

                    {/* User sees link for user settings logged in */}
                    {(isLoggedIn === true) && <li><Link to="/edituserprofile">Profile</Link></li>}


                    {/* login shown only when not logged in */}
                    {(isLoggedIn === false) && <li><Link to="/login">Login</Link></li>}

                    {/* logout shown when loggedin */}
                    {(isLoggedIn === true) && <li><button onClick={logout} >Logout</button></li>}

                    {/* signup shown when not loggedin */}
                    {(isLoggedIn === false) && <li><Link to="/signup">Signup</Link> </li>}
                </ul>
            </nav>
            <nav className="mobileNav">
                <ul>
                    {/* Home shown for User*/}
                    {(isLoggedIn === true) && <li><Link to="/"><i class="fas fa-home"></i></Link></li>}


                    {/* createPlant available when user logged in */}
                    {(isLoggedIn === true) && <li><Link to="/addnewplant"><i class="fas fa-plus"></i></Link></li>}
                    {/* <FontAwesomeIcon icon="fa-solid fa-plus" /> ---use with react*/}

                    {/* User sees link for user settings logged in */}
                    {(isLoggedIn === true) && <li><Link to="/edituserprofile"><i class="fas fa-address-card"></i></Link></li>}


                    {/* login shown only when not logged in */}
                    {(isLoggedIn === false) && <li><Link to="/login">Login</Link></li>}

                    {/* logout shown when loggedin */}
                    {(isLoggedIn === true) && <li><button onClick={logout} >Logout</button></li>}

                    {/* signup shown when not loggedin */}
                    {(isLoggedIn === false) && <li><Link to="/signup">Signup</Link> </li>}
                </ul>
            </nav>
        </div>
    )
}