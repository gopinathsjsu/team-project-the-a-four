import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
function NaviBar({ handleLoginClick, props}) { 
        
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

        fetch("http://3.143.245.196:8080/api/users/authenticate", requestOptions)
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

    const handleLogout = () => {
        window.localStorage.clear();
        window.location.assign("/");
    }
    
    const checkActive = (match, location) => {
        if(!location) return false;
        const {pathname} = location;

        return pathname === "/";
    }
    

        return(
        <div>
  <Navbar expand="lg" bg="dark" variant="dark">
    <Container fluid>
    <Navbar.Brand href="#home">A-4 Airlines</Navbar.Brand>
    <Nav className="me-auto">
        {(role !== "ADMIN") && <Nav.Link href="/">Search Flights</Nav.Link>}
        {(role !== "ADMIN") && <Nav.Link href="/mileageProgram">Mileage Program</Nav.Link>}
        {(role !== "ADMIN") && <Nav.Link href="/travel/help">Help</Nav.Link>}
        {!userName && <Nav.Link href="/newUser/Register">Register</Nav.Link>}
        {userName && (role !== "ADMIN") && <Nav.Link href="/user/userTrips">My Trips</Nav.Link>}
        {(role === "ADMIN") && <Nav.Link href="/admin/home">Admin</Nav.Link>}
    </Nav>
    {userName && <Navbar.Text style={{paddingRight: "15px"}}> Signed in as: {userName}</Navbar.Text>}
        {!userName && <Button variant="outline-success" className="d-flex justify-content-end" onClick={handleLoginClick}>Login</Button>}
        {userName && <Button variant="outline-danger" className="d-flex justify-content-end" onClick={handleLogout}>Logout</Button>}
    </Container>
  </Navbar>
            {/*<div className="nav-horizontal">
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
                    {userName && (role !== "ADMIN") && (<li className="nav-menu-item">
                        <NavLink to="/user/userTrips" className="nav-menu-link" activeClassName="nav-menu-link-active">
                            My Trips
                        </NavLink>
                    </li>)}
                    {!userName && (
                    <li className="nav-menu-item">
                        <div>
                            <span onClick={handleLoginClick} className="nav-menu-link">
                            Login</span>
                        </div>
                    </li>
                    )}
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
                </div>*/} </div>
        );
    
} 

export default NaviBar;