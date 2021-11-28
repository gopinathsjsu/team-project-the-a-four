import React, { useState } from "react";
import NavBar from "../common/navbar";
import LoginModal from "../login/loginPopup";

export default function CreateReservation(props){
    const [isShowLogin, setIsShowLogin] = useState(false);

    const handleLoginClicked = () => {
        setIsShowLogin(!isShowLogin);
    }

    const pathname = window.location.pathname
    
    return(
        <div>
            <NavBar handleLoginClick={handleLoginClicked}></NavBar>
            {isShowLogin && <LoginModal isShowLogin={isShowLogin} setIsShowLogin={setIsShowLogin} pathname={pathname}/>}

        </div>

    );
}