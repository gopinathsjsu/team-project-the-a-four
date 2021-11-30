import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ handleLoginClick, props}) { 
        
    let userName = localStorage.getItem("userName");
    let token = localStorage.getItem("token");
    let password = localStorage.getItem("password");
    //this will happend only incase of redirecting from successfull registeration
    if(userName && !(token || token === "") && password)
    {
        // console.log("token: " + token);
        // console.log("password: " + password);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "username": userName,
        "password": JSON.parse(localStorage.getItem("userData")).password,
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        mode: 'cors'
        };

        fetch("http://localhost:8080/api/users/authenticate", requestOptions)
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            localStorage.setItem('token', data.token);
            localStorage.removeItem('password');
        })
        .catch(error => {
            //this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });  
    }
    


    let role = "GUEST";
    if(localStorage.getItem("userData")){
        role = JSON.parse(localStorage.getItem("userData")).role
    }
    //let role = JSON.parse(localStorage.getItem("userData")).role;

    const handleLogout = () => {
        // localStorage.setItem("userName", "");
        // localStorage.setItem("token", "");
        // localStorage.setItem("userData", "");
        // localStorage.setItem("displayData", "");
        window.localStorage.clear();
        window.location.assign("/");
    }
    
    const checkActive = (match, location) => {
        if(!location) return false;
        const {pathname} = location;

        return pathname === "/";
    }
    

        return(
            <div className="nav-horizontal" style={{display:"flex"}}>
                <ul className="nav-menu">
                    {(role !== "ADMIN") && (<li className="nav-menu-item">
                        <NavLink to="/" className="nav-menu-link" activeClassName="nav-menu-link-active" isActive={checkActive}>
                            Search Flights
                        </NavLink>
                    </li>)}
                    {(role !== "ADMIN") && (<li className="nav-menu-item">
                        <NavLink to="/mileageProgram/" className="nav-menu-link" activeClassName="nav-menu-link-active">
                            Mileage Program
                        </NavLink>
                    </li>)}
                    {(role !== "ADMIN") && (
                    <li className="nav-menu-item">
                        <NavLink to="/travel/help" className="nav-menu-link" activeClassName="nav-menu-link-active">
                            Help
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
                    {(role !== "ADMIN") && userName && (
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
                    {(role !== "ADMIN") && (<li className="nav-menu-item">
                        <NavLink to="/user/userTrips" className="nav-menu-link" activeClassName="nav-menu-link-active" isActive={checkActive}>
                            My Trips
                        </NavLink>
                        {token === null && <p align="right">*Login to reserve</p>}
                    </li>)}
                    {(role === "ADMIN") && (
                    <li className="nav-menu-item">
                        <NavLink to="/admin/home" className="nav-menu-link" activeClassName="nav-menu-link-active">
                            Admin
                        </NavLink>
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