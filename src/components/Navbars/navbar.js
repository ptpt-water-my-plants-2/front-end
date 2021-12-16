import { useContext } from "react";
import { Link } from "react-router-dom";
import "../../App.css"
import { GlobalPropsContext } from "../GlobalPropsContext";



export default function NavBar() {
    const { isLoggedIn } = useContext(GlobalPropsContext);


    return (
        <div className="navBar">
            <nav>
                <ul>
                    {/* Home shown for User*/}
                    {(isLoggedIn === true) && <li><Link to="/">Home</Link></li>}


                    {/* createPlant available when user logged in */}
                    {(isLoggedIn === true) && <li><Link to="/addnewplant">Add a Plant</Link></li>}

                    {/* User sees link for user settings logged in */}
                    {(isLoggedIn === true) && <li><Link to="/edituserprofile">Edit Profile</Link></li>}


                    {/* login shown only when not logged in */}
                    {(isLoggedIn === false) && <li><Link to="/login">Login</Link></li>}

                    {/* logout shown when loggedin */}
                    {(isLoggedIn === true) && <li><Link to="/login">Logout </Link> </li>}

                    {/* signup shown when not loggedin */}
                    {(isLoggedIn === false) && <li><Link to="/signup">Signup</Link> </li>}
                </ul>
            </nav>
        </div>
    )
}