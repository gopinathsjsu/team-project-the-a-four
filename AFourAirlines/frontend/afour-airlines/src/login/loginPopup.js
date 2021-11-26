import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button, Form} from 'react-bootstrap';


export default function LoginModal({isShowLogin, setIsShowLogin, pathname}) {

  let [username, setUserName] = useState("");
  let [password, setPassword] = useState("");

  let [errorMsg, setErrorMsg] = useState("");
  
  let [loginStatus, setLoginStatus] = useState(false);
  let [isUserAuthenticated, setUserAuthenticated] = useState(false);

  function validateForm(){
    if (username === "" || password === "") {
    setErrorMsg("Fields are required");
    return true;
    }
    return false;
    }

    const closeLoginForm = e => {
        setIsShowLogin(false);
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
  
  return (
    <div>
      <Modal show={isShowLogin} onHide={closeLoginForm} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group >
              <Form.Label>Username: </Form.Label>
              <Form.Control type="text" onChange={(e) => setUserName(e.target.value)} />           
          </Form.Group>
          <Form.Group >
              <Form.Label>Password: </Form.Label>
              <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} />           
          </Form.Group>
          <Form.Group style={{display: 'grid'}}>
          <div className="btn-group">
            <Button variant="primary" className="pure-u-1-6 btn-spacing" onClick={handleSubmit}>
                Login
            </Button>
            <Button variant="secondary" className="pure-u-1-6 btn-spacing" onClick={closeLoginForm}>
                Close
            </Button>
            </div>
            </Form.Group>
          </Modal.Body>
        <Modal.Footer>
            <div>
                <span>Don't have an account? </span>
                <span onClick={handleJoinNow} >Join Now!</span>
            </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}