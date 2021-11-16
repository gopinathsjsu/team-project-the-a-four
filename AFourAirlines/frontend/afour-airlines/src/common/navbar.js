import React from "react";
import { NavLink } from "react-router-dom";
import { useGetUserData } from "./getUserData";
import { useParams } from "react-router-dom";

const NavBar = (props) => {    
    const { userName } = useParams();
        const { userData } = useGetUserData(userName);
        const checkActive = (match, location) => {
            if(!location) return false;
            const {pathname} = location;
            console.log(pathname);
            return pathname === "/";
        }
        
        return(
            <div className="nav-horizontal" style={{display:"flex"}}>
                <ul className="nav-menu">
                    <li className="nav-menu-item">
                        <NavLink  to="/" className="nav-menu-link" activeClassName="nav-menu-link-active" isActive={checkActive}>
                            Search Flights
                        </NavLink>
                    </li>
                    <li className="nav-menu-item">
                        {!userData.username && <NavLink to="/mileageProgram" className="nav-menu-link" activeClassName="nav-menu-link-active">
                            Mileage Program
                        </NavLink>}
                        {userData.username && <NavLink to="/mileageProgram" className="nav-menu-link" activeClassName="nav-menu-link-active">
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
                        <NavLink to="/login" className="nav-menu-link" activeClassName="nav-menu-link-active">
                            Login
                        </NavLink>
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