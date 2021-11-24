import React, { useState } from "react";
import {  useParams } from "react-router-dom";
import NavBar from "../common/navbar";
import UserMileage from "./userMileage";
import GuestMileage from "./guestMileage.js";
import { useGetUserData } from "../common/getUserData";
import LoginForm from "../login/loginPage"

export default function MileageProgram (props){
    
    const [isShowLogin, setIsShowLogin] = useState(false);

    const handleLoginClicked = () => {
        setIsShowLogin(!isShowLogin);
    }

    let username = localStorage.getItem("userName");
    
    const pathname = window.location.pathname

    return(
        <div>
            <NavBar props={username} handleLoginClick={handleLoginClicked}></NavBar>
            {isShowLogin && <LoginForm isShowLogin={isShowLogin} setIsShowLogin={setIsShowLogin} pathname={pathname}></LoginForm>}
            {!username  && 
                <GuestMileage></GuestMileage>}
            {username &&
                <UserMileage></UserMileage>
            }
        </div>
        );
}
