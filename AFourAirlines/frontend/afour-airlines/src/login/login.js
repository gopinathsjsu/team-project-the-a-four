import React, { useState } from "react";
import Axios from "axios";
import "../App.css";
import NavBar from "../common/navbar";
import Alert from "@material-ui/lab/Alert";
import {Snackbar } from "@material-ui/core";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router";


export default function Login() {
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
  const [userData, setUserData] = useState(defaultValues);

  const [errorMsg, setErrorMsg] = useState("");
  const [open, setOpen] = useState(false);
  Axios.defaults.withCredentials = true;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function validateForm(){
    if (username === "" || password === "") {
      setErrorMsg("Fields are required");
      return true;
    }
    return false;
  }

  function setUserInfo(){
          userData.username = username;
          userData.first_name ="Esha";
          userData.last_name = "Sah";
          userData.email_id = "esha8sah@gmail.com";
          userData.country = "USA";
          userData.auth_id = 0;
  }

  function handleSubmit(event){
    event.preventDefault();
    validateForm();
    try {
      //await Auth.signIn(username, password);
      setUserAuthenticated(true);
      if(isUserAuthenticated){
        setUserInfo();
        setLoginStatus(true);
      }
      history.push("/" + username);
    } catch (e) {
      alert(e.message);
    }
  }

  const login = () => {
    
    // Axios.post("http://localhost:3001/login", {
    //   user_id: user_id,
    //   password: password,
    // })
    //   .then((response) => {
    //     setLoginStatus(true);
    //   })
    //   .catch((error) => {
    //     setLoginStatus(false);
    //     setFailMsg(error.response.data.err);
    //     setOpen(true);
        
    //   });
  };
  
  
  return (
    <div>
      <NavBar></NavBar>
      <div className="pure-form" style={{ flexDirection: "column" }}>
        <div>
          <h1 style={{ textAlign: "center" }}>Login</h1>
        </div>
        <div className="Login">
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="username">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                autoFocus
                type="username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button block size="lg" type="submit" className="pure-u-1-6" onClick={handleSubmit}>
              Login
            </Button>
          </Form>
        </div>
        <Snackbar anchorOrigin={{ vertical:"top", horizontal:"center" }} open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {errorMsg}
        </Alert>
      </Snackbar>
      </div>
    </div>
  );
}
