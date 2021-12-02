import React, { useState } from "react";
import NaviBar from "../common/navbar";
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
            <NaviBar props={username} handleLoginClick={handleLoginClicked}></NaviBar>
            {isShowLogin && <LoginModal isShowLogin={isShowLogin} setIsShowLogin={setIsShowLogin} pathname={pathname} />}
            {!username &&
                <GuestMileage></GuestMileage>}
            {username &&
                <div>
                    <UserMileage></UserMileage>
                    <GuestMileage></GuestMileage>
                </div>
            }
        </div>
        );
}
