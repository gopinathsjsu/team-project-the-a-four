import React, { useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from "../common/navbar";
import UserDetails from "../user/userDetails";

export default function UserProfile () {
    const [isShowLogin, setIsShowLogin] = useState(false);
    let headerText = "User Profile";

    const handleLoginClicked = () => {
        setIsShowLogin(!isShowLogin);
    }

    let userData = JSON.parse(localStorage.getItem("userData"));
    
    if(userData.role === "ADMIN"){
        userData = JSON.parse(localStorage.getItem("displayData"));
        headerText = "Manage User Profile";
    }
    
        return (
            <div>
                <NavBar handleLoginClick={handleLoginClicked}></NavBar>
                <div className="popup-content">
                    <Container>
                        <Row>
                            <Col>
                                <h1 className="page-hearder">{headerText}</h1>
                                <div>
                                    <UserDetails userData={userData}/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
}

