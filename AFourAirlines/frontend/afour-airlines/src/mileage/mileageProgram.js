import React, { useState } from "react";
import {  useParams } from "react-router-dom";
import NavBar from "../common/navbar";
import UserMileage from "../user/userMileage";
import GuestMileage from "./guestMileage.js";
import { useGetUserData } from "../common/getUserData";
import LoginForm from "../login/loginPage"

export default function MileageProgram (props){
    
    const [isShowLogin, setIsShowLogin] = useState(false);

    const handleLoginClicked = () => {
        setIsShowLogin(!isShowLogin);
    }

    let { username } = useParams();
    const { userData } = useGetUserData(username);
    const pathname = window.location.pathname

    return(
        <div>
            <NavBar props={username} handleLoginClick={handleLoginClicked}></NavBar>
            {isShowLogin && <LoginForm isShowLogin={isShowLogin} setIsShowLogin={setIsShowLogin} pathname={pathname}></LoginForm>}
            {!userData.username  && 
                <GuestMileage></GuestMileage>}
            {userData.username &&
                <UserMileage props={username}></UserMileage>
            }
        </div>
        );
}
