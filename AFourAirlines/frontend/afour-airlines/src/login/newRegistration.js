import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../common/navbar";
import LoginForm from "../login/loginPage"
import Registration from "../login/register"

export default function NewRegistration(props){

    const [isShowLogin, setIsShowLogin] = useState(false);

    const handleLoginClicked = () => {
        setIsShowLogin(!isShowLogin);
    }

    const pathname = window.location.pathname
    let { username } = useParams();

    return(
        <div className={isShowLogin ? "hide-parent" : ""}>
            <NavBar props={username} handleLoginClick={handleLoginClicked}></NavBar>
            {isShowLogin && <LoginForm isShowLogin={isShowLogin} setIsShowLogin={setIsShowLogin} pathname={pathname}></LoginForm>}
            <div>
                <div>
                    <h1 style={{ textAlign: "center" }}>Get an account by filling few details.</h1>
                </div>
                <div className="popup-content">
                    <Registration></Registration>
                </div>
            </div>
        </div>
    );
}