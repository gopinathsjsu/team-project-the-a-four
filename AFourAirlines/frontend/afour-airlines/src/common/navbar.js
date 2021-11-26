import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ handleLoginClick, props}) { 
        
    let userName = localStorage.getItem("userName");
    //let userData = useGetUserData(userName);

    const handleLogout = () => {
        localStorage.setItem("userName", "");
        localStorage.setItem("token", "");
        window.location.assign("/");
    }
    
    const checkActive = (match, location) => {
        console.log(match);

        if(!location) return false;
        const {pathname} = location;
        console.log(pathname);

        return pathname === "/";
    }
    

        return(
            <div className="nav-horizontal" style={{display:"flex"}}>
                <ul className="nav-menu">
                    <li className="nav-menu-item">
                        <NavLink to="/" className="nav-menu-link" activeClassName="nav-menu-link-active" isActive={checkActive}>
                            Search Flights
                        </NavLink>
                    </li>
                    <li className="nav-menu-item">
                        <NavLink to="/mileageProgram/" className="nav-menu-link" activeClassName="nav-menu-link-active">
                            Mileage Program
                        </NavLink>
                    </li>
                    {userName !== "admin" && (
                    <li className="nav-menu-item">
                        <NavLink to="/travel/help" className="nav-menu-link" activeClassName="nav-menu-link-active">
                            Help
                        </NavLink>
                    </li>
                    )}
                    {(userName === "admin") && (
                    <li className="nav-menu-item">
                        <NavLink to="/admin/home" className="nav-menu-link" activeClassName="nav-menu-link-active">
                            Admin
                        </NavLink>
                    </li>
                    )}
                    {!userName && (
                    <li className="nav-menu-item">
                        <NavLink to="/newUser/Register" className="nav-menu-link" activeClassName="nav-menu-link-active">
                            Register
                        </NavLink>
                    </li>
                    )}
                    {userName && (
                    <li className="nav-menu-item">
                        <NavLink to="/user/UserProfile/" className="nav-menu-link" activeClassName="nav-menu-link-active">
                            My Profile
                        </NavLink>
                    </li>
                    )}
                    {!userName && (
                    <li className="nav-menu-item">
                        <div>
                            <span onClick={handleLoginClick} className="nav-menu-link">
                            Login</span>
                        </div>
                    </li>
                    )}                    
                    {userName && (
                    <li className="nav-menu-item">
                        <div>
                            <span onClick={handleLogout} className="nav-menu-link">
                            Logout</span>
                        </div>
                    </li>
                    )}
                </ul>
                {userName && (
                        <label className="nav-user-greeting"> Hello {userName} !</label>
                    )}
            </div>
        );
    
} 

export default NavBar;