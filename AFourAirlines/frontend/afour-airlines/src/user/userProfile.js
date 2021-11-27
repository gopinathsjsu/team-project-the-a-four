import React, { useState } from "react";
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import NavBar from "../common/navbar";
import { useGetUserData } from "../common/getUserData";
import UserDetails from "../user/userDetails";

export default function UserProfile () {
    const [isShowLogin, setIsShowLogin] = useState(false);

    const handleLoginClicked = () => {
        setIsShowLogin(!isShowLogin);
    }

    let username = localStorage.getItem("userName");
    let { userData } = useGetUserData(username);
    
        return (
            <div>
                <NavBar handleLoginClick={handleLoginClicked}></NavBar>
                <div className="popup-content">
                    <Container>
                        <Row>
                            <Col>
                                <h1 className="page-hearder">User Profile</h1>
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

