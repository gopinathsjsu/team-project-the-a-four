import React, { useState } from "react";
import Axios from "axios";
import "../App.css";
import NavBar from "../common/navbar";
import Alert from "@material-ui/lab/Alert";
import {Snackbar } from "@material-ui/core";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [failMsg, setFailMsg] = useState("");
  const [open, setOpen] = useState(false);
  Axios.defaults.withCredentials = true;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function validateForm(){
    return username.length > 0 && password.length > 0;
  }

  function handleSubmit(event){
    event.preventDefault();
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
            <Button block size="lg" type="submit" className="pure-u-1-6" onClick={login}>
              Login
            </Button>
          </Form>
        </div>
        <Snackbar anchorOrigin={{ vertical:"top", horizontal:"center" }} open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {failMsg}
        </Alert>
      </Snackbar>
      </div>
    </div>
  );
}
