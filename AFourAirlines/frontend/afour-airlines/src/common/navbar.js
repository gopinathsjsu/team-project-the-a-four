import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useGetUserData } from "./getUserData";

function NavBar({ handleLoginClick, props}) { 
    
    const handleLoginClicked = () => {
        handleLoginClick();
    }
    
    const [ userName, setUserName]  = useState("esha");
    const { userData } = useGetUserData(userName);
    
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
                        {!userData.username && <NavLink to="/mileageProgram" params={ userName } className="nav-menu-link" activeClassName="nav-menu-link-active">
                            Mileage Program
                        </NavLink>}
                        {userData.username && <NavLink to="/mileageProgram" params={ userName } className="nav-menu-link" activeClassName="nav-menu-link-active">
                            Mileage Program
                        </NavLink>}
                    </li>
                    {userData.auth_id !== 1 && (
                    <li className="nav-menu-item">
                        <NavLink to="/help" className="nav-menu-link" activeClassName="nav-menu-link-active">
                            Help
                        </NavLink>
                    </li>
                    )}
                    {userData.username && userData.auth_id === 1 && (
                    <li className="nav-menu-item">
                        <NavLink to="/admin" className="nav-menu-link" activeClassName="nav-menu-link-active">
                            Admin
                        </NavLink>
                    </li>
                    )}
                    {!userData.username && (
                    <li className="nav-menu-item">
                        <div>
                            <span onClick={handleLoginClicked} className="nav-menu-link" activeClassName="nav-menu-link-active">
                            Login</span>
                        </div>
                    </li>
                    )}
                    {userData.username && (
                    <li className="nav-menu-item">
                        <NavLink to="/" className="nav-menu-link" activeClassName="nav-menu-link-active">
                            Logout
                        </NavLink>
                    </li>
                    )}
                </ul>
                {userData.username && (
                        <label className="pure-menu-heading" style={{marginLeft:"auto",marginTop:"auto"}}> Hello {userData.first_name} !</label>
                    )}
            </div>
        );
    
} 

export default NavBar;