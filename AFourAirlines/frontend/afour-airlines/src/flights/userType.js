import React from 'react'
import NavBar from "../common/navbar";
import LoginModal from '../login/loginPopup';
import Registration from '../login/register';

export default function UserType(props) {

    const continueGuest = () => {
        window.location.href = './flightPayment'
    }

    const memberLogin = () => {
        window.location.href = './loginPopup'
    }

    return (
        <div>
            <NavBar></NavBar>
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
                    <button id="button" type="submit" id="form-submit" class="btn" onClick={memberLogin}>Login</button>
                </fieldset>
            </div>
        </div>
    )
}

