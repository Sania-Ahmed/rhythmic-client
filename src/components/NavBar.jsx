/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const NavBar = ({ handleDarkMode, darkMode }) => {
    const { user,logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logOut()
        .then(
            navigate('/')
        )
    }
    return (
        <div className="navbar bg-base-100 fixed top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/classes"><li>Classes</li></Link>
                        <Link to="/instructors"><li>Instructors</li></Link>
                        {user && <Link to="/dashboard/dashHome"><li>Dashboard</li></Link>}
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-purple-500 font-semibold normal-case text-xl">Rhythmic</a>
            </div>
            <div className="navbar-end">
                
                    {
                        user ? <div className="flex">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <img className="w-10 rounded-full" src={user.photoURL} />
                            </label>
                            <button onClick={handleLogout} className="btn btn-ghost ml-2">Logout</button>
                        </div>
                            : <Link to="/login"><button className="btn btn-ghost">Login</button></Link>
                    }


               
                <button onClick={handleDarkMode} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        {
                            darkMode
                                ? <FaSun className="h-5 w-5"></FaSun> : <FaMoon className="h-5 w-5"></FaMoon>

                        }

                    </div>
                </button>
            </div>
        </div>
    );
};

export default NavBar;