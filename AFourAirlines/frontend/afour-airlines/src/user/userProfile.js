import React, { useState } from "react";
import { Container,Row,Col,Form ,Button} from 'react-bootstrap';
import NavBar from "../common/navbar";
import {  useParams } from "react-router-dom";
import { useGetUserData } from "../common/getUserData";
import LoginForm from "../login/loginPage"

export default function UserProfile () {
    const [isShowLogin, setIsShowLogin] = useState(false);

    const handleLoginClicked = () => {
        setIsShowLogin(!isShowLogin);
    }

    let username = localStorage.getItem("userName");
    const { userData } = useGetUserData(username);

    const pathname = window.location.pathname
    
        return (
            <div>
                <NavBar props={username} handleLoginClick={handleLoginClicked}></NavBar>
                {isShowLogin && <LoginForm isShowLogin={isShowLogin} setIsShowLogin={setIsShowLogin} pathname={pathname}></LoginForm>}
                <div className="popup-content">
                    <Container>
                        <Row>
                            <Col>
                                <h1>User Profile</h1>
                                <Form className="form">
                                    <Form.Group>
                                        <Form.Label>Username</Form.Label>
                                        <Form.Control type="text" defaultValue={userData.username}/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" defaultValue={userData.first_name + " " + userData.last_name}/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" defaultValue={userData.email_id}/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Contact Number</Form.Label>
                                        <Form.Control type="text" defaultValue={userData.contact_number}/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Profile image</Form.Label>
                                        <Form.Control type="file" name="profileImage"/>
                                    </Form.Group>
                                    <Button variant="primary">Update Details</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
}
