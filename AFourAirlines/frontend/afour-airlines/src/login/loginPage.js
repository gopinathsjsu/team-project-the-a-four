import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import { useHistory } from "react-router-dom";
import closeIcon from "../images/images-close.jpg"

const LoginForm = ({isShowLogin, setIsShowLogin, pathname}) => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const [loginStatus, setLoginStatus] = useState(false);
    const [isUserAuthenticated, setUserAuthenticated] = useState(false);

    const defaultValues = {
        username: "",
        first_name: "",
        last_name: "",
        email_id: "",
        country: "",
        auth_id: 0,
    };
    //const [userData, setUserData] = useState(defaultValues);

    const [errorMsg, setErrorMsg] = useState("");

    function validateForm(){
        if (username === "" || password === "") {
        setErrorMsg("Fields are required");
        return true;
        }
        return false;
    }

    // function setUserInfo(){
    //         userData.username = username;
    //         userData.first_name ="Esha";
    //         userData.last_name = "Sah";
    //         userData.email_id = "esha8sah@gmail.com";
    //         userData.country = "USA";
    //         userData.auth_id = 0;
    // }

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

    function handleSubmit(event){
        event.preventDefault();
        validateForm();
        try {
          //await Auth.signIn(username, password);
          setUserAuthenticated(true);
          if(isUserAuthenticated){
            setLoginStatus(true);
            setIsShowLogin(false);
            //console.log(pathname)
            if(pathname === "/"){
                history.push("/" + username);
            }
            else{
                history.push(pathname + username);
            }
          }
        } catch (e) {
          alert(e.message);
        }
      }

    if(isShowLogin || !loginStatus){
        return(
            <div className="active popup-background" ref={modalRef} onClick={closeLoginForm}>
                <animated.div style={animation}>
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
                </div>
                </animated.div>
            </div>
        );
    }
    else{
        return null;
    }
};

export default LoginForm;