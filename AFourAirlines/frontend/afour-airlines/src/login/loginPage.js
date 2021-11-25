import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import closeIcon from "../images/images-close.jpg"

const LoginForm = ({isShowLogin, setIsShowLogin, pathname}) => {

    let [username, setUserName] = useState("");
    let [password, setPassword] = useState("");
    const history = useHistory();
    let [loginStatus, setLoginStatus] = useState(false);
    let [isUserAuthenticated, setUserAuthenticated] = useState(false);

    let [errorMsg, setErrorMsg] = useState("");

    function validateForm(){
        if (username === "" || password === "") {
        setErrorMsg("Fields are required");
        return true;
        }
        return false;
    }

    const modalRef = useRef();

    const closeLoginForm = e => {
        if(modalRef.current === e.target) {
            setIsShowLogin(false);
        }
    }

    const handleJoinNow = (e) => {
        alert('You will redirected to a new page.');
        setIsShowLogin(false);
        window.location.assign("/newUser/Register");
    }

    const authenticate = () =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "username": "esha12345",
        "password": "esha"
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        mode: 'cors'
        };

        fetch("http://localhost:8080/api/users/authenticate", requestOptions)
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            localStorage.setItem('token', data.token);
        })
        .catch(error => {
            //this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });       
    }

    function handleSubmit(event){
        event.preventDefault();
        //debugger;
        validateForm();
        try {
          //await Auth.signIn(username, password);
          //setUserAuthenticated(true);
          authenticate();
          console.log("isUserAuthenticated - " + isUserAuthenticated);
          //if(isUserAuthenticated){

            localStorage.setItem("userName", username);
            localStorage.setItem("token", "abctoken");
            setLoginStatus(true);
            setIsShowLogin(false);
            
          //}
        } catch (e) {
          alert(e.message);
        }
      }

    if(isShowLogin || !loginStatus){
        return(
            <div className="active popup-background" ref={modalRef} onClick={closeLoginForm}>
                <div className="login-form popup-wrapper">
                    <div className="form-box solid popup-content">
                        <form>
                            <h1 className="login-text">Sign In</h1>
                            <label>Username</label><br></br>
                            <input
                                type="text"
                                name="login-username"
                                className="login-box"
                                onChange={(e) => setUserName(e.target.value)}
                            /><br></br>
                            <label>Password</label><br></br>
                            <input 
                                type="password"
                                name="login-password"
                                className="login-box"
                                onChange={(e) => setPassword(e.target.value)}
                            /><br></br>
                            <input type="submit" value="LOGIN" className="login-btn" onClick={handleSubmit}/>
                        </form>
                    </div>
                    
                    <div className="popup-close-button" label="Close" onClick={() => setIsShowLogin(prev => !prev)}>
                        <img src={closeIcon} alt="Close"></img>
                    </div>

                    <div className="form-box solid popup-content popup-side-content">
                        <span>Don't have an account?</span>
                        <br/>
                        <span>
                            <span onClick={handleJoinNow} >Join Now!</span>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return null;
    }
};

export default LoginForm;