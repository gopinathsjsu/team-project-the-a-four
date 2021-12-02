import React, { useState } from 'react'
import NaviBar from "../common/navbar";
import LoginModal from '../login/loginPopup';
import Registration from '../login/register';


export default function UserType(props) {

    const continueGuest = () => {
        window.location.href = './flightPayment'
    }

    // const memberLogin = () => {
    //     window.location.href = './loginPopup'
    // }

    let [isShowLogin, setIsShowLogin] = useState(false);

    const handleLoginClicked = () => {
        setIsShowLogin(!isShowLogin);
    }

    let pathname = window.location.pathname

    return (
        <div>
            <NaviBar handleLoginClick={handleLoginClicked}></NaviBar>
            {isShowLogin && <LoginModal isShowLogin={isShowLogin} setIsShowLogin={setIsShowLogin} pathname={pathname} />}
            <div class="col-md-6" align="center">
                <fieldset>
                    <button id="button" type="submit" id="form-submit" class="btn" onClick={continueGuest}>Continue As Guest</button>
                    {/* <script type="text/javascript">
                                                    document.getElementById("button").onclick = function () {
                                                       window.location.href = './searchPage'
                                                       };
                                                </script> */}
                </fieldset>
            </div>
            <div class="col-md-6" align="center">
                <fieldset>
                    <button id="button" type="submit" id="form-submit" class="btn" onClick={handleLoginClicked}>Login</button>
                </fieldset>
            </div>
        </div>
    )
}

