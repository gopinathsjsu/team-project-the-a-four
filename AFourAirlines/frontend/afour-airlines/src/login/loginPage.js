import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
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

    const animation = useSpring({
        config:{
            duration:250,
            opacity: isShowLogin ? 1 : 0,
            transform: isShowLogin ? `translateY(0%)` : `translateY(-100%)`
        }
    });

    const closeLoginForm = e => {
        if(modalRef.current === e.target) {
            setIsShowLogin(false);
        }
    }

    const handleJoinNow = (e) => {
        alert('You will redirected to a new page.');
        setIsShowLogin(false);
        history.push("/newUser/Register");
    }

    function handleSubmit(event){
        //event.preventDefault();
        debugger;
        validateForm();
        try {
          //await Auth.signIn(username, password);
          setUserAuthenticated(true);
          console.log("isUserAuthenticated - " + isUserAuthenticated);
          //if(isUserAuthenticated){

            localStorage.setItem("userName", username);
            localStorage.setItem("token", "abctoken");
            setLoginStatus(true);
            setIsShowLogin(false);
            console.log("username " + localStorage.getItem("userName"));
            
            window.location.reload();
            
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