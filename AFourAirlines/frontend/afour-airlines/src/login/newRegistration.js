import React, { useState } from "react";
import NaviBar from "../common/navbar";
import LoginModal from "../login/loginPopup"
import Registration from "../login/register"

export default function NewRegistration(props){

    const [isShowLogin, setIsShowLogin] = useState(false);

    const handleLoginClicked = () => {
        setIsShowLogin(!isShowLogin);
    }

    const pathname = window.location.pathname

    return(
        <div className={isShowLogin ? "hide-parent" : ""}>
            <NaviBar handleLoginClick={handleLoginClicked}></NaviBar>
            {isShowLogin && <LoginModal isShowLogin={isShowLogin} setIsShowLogin={setIsShowLogin} pathname={pathname}/>}
            <div>
                <div>
                    <h1 className="page-hearder">Get an account by filling few details.</h1>
                </div>
                <div className="popup-content">
                    <Registration></Registration>
                </div>
            </div>
        </div>
    );
}