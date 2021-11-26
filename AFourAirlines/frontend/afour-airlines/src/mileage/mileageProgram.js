import React, { useState } from "react";
import NavBar from "../common/navbar";
import UserMileage from "./userMileage";
import GuestMileage from "./guestMileage.js";
import LoginModal from "../login/loginPopup"

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
            {isShowLogin && <LoginModal isShowLogin={isShowLogin} setIsShowLogin={setIsShowLogin} pathname={pathname}/>}
            {!username  && 
                <GuestMileage></GuestMileage>}
            {username &&
                <UserMileage></UserMileage>
            }
        </div>
        );
}
