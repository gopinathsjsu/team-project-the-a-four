import React, { useState } from "react";
import Axios from "axios";
import {
  Button,
  FormControl,
  FormGroup,
  TextField,
  Input,
  Checkbox
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import FormLabel from "react-bootstrap/esm/FormLabel";

export default function Registration(){
  // Axios.defaults.withCredentials = true;

  // States for registration
  const defaultValues = {
    username: "",
    dob: "",
    password: "",
    first_name: "",
    last_name: "",
    email: "",
    street: "",
    city: "",
    zip_code: "",
    state: "",
    country: "",
    id_number: "",
    contact: "",
    tncCheckbox: false,
    enrollMileage : false,
  };

  let [userData, setUserData] = useState(defaultValues);

  let [enrollMileage, setEnrollMileage] = useState(false);
  let [tncCheckbox, setTncCheckbox] = useState(false);
  const regex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

  // States for checking the errors
  let [submitted, setSubmitted] = useState(false);
  let [hasError, setError] = useState(false);
  let [message, setMessage] = useState("");
  
  const [invalid, setInvalid] = useState({
    username: false,
    dob: false,
    password: false,
    first_name: false,
    last_name: false,
    email: false,
    street: false,
    city: false,
    zip_code: false,
    state: false,
    country: false,
    id_number: false,
    contact: false,
    tncCheckbox: false,
  });
  

  const validateFields = () => {
    if (
      userData.username.trim() === " " ||
      userData.password.trim().length < 5 ||
      userData.first_name.trim() === "" ||
      userData.last_name.trim() === "" ||
      userData.country.trim() === "" ||
      userData.email.trim() === "" ||
      userData.dob.trim() === "" ||
      userData.contact.trim() === ""||
      userData.id_number.trim() === ""
    ) {
      setError(true);
      setMessage("Please fill all required fields");
    } else if (
      userData.email.includes(" ") ||
      userData.password.includes(" ") 
    ) {
      setError(true);
      setMessage("Space character not allowed in email_id and/or password");
    } else if ( userData.username.trim().length > 15 ){
      setError(true);
      setMessage("Username cannot be more that 15 characters");
    } else if(
      userData.dob.includes(" ")
    ) {
      setError(true);
      setMessage("Please select a valid date");
    } else if(!(tncCheckbox)) {
      setError(true);
      setMessage("Please accept the Terms, Conditions and Policies of our Airlines")
    }
    return;
  }


  const handleSubmit = (e) => {
    if (
      userData.username.trim() === " " ||
      userData.password.trim().length < 5 ||
      userData.first_name.trim() === "" ||
      userData.last_name.trim() === "" ||
      userData.country.trim() === "" ||
      userData.email.trim() === "" ||
      userData.dob.trim() === "" ||
      userData.contact.trim() === ""||
      userData.id_number.trim() === ""
    ) {
      setError(true);
      setMessage("Please fill all required fields");
    } else if (
      userData.email.includes(" ") ||
      userData.password.includes(" ") 
    ) {
      setError(true);
      setMessage("Space character not allowed in email_id and/or password");
    } else if ( userData.username.trim().length > 15 ){
      setError(true);
      setMessage("Username cannot be more that 15 characters");
    } else if(
      userData.dob.includes(" ")
    ) {
      setError(true);
      setMessage("Please select a valid date");
    } else if(!(tncCheckbox)) {
      setError(true);
      setMessage("Please accept the Terms, Conditions and Policies of our Airlines")
    } else{
        setError(false);
        setMessage("Success!");
        //TODO: register user API call
      }
  }

  return (
    <div>
      <FormGroup>
        <FormControl>
          <TextField
          helperText={invalid.first_name ? "1-25 characters" : ""}
            id="register-first-name"
            label="First Name"
            type="text"
            required
            onChange={(e) => {
              const validation =
                e.target.value.length > 25 || e.target.value === ""
                  ? true
                  : false;
              setInvalid({ ...invalid, first_name: validation });
              setUserData({...userData, first_name: e.target.value});
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            required
            helperText={invalid.last_name ? "1-25 characters" : ""}
            id="register-last-name"
            label="Last Name"
            type="text"
            error={invalid.last_name}
            onChange={(e) => {
              const validation =
                e.target.value.length > 25 || e.target.value === ""
                  ? true
                  : false;
              setInvalid({ ...invalid, last_name: validation });
              setUserData({...userData, last_name: e.target.value});
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            required
            helperText={invalid.email_id ? "1-45 characters" : ""}
            id="register-email-id"
            label="Email ID"
            type="text"
            error={invalid.email_id}
            onChange={(e) => {
              
              const validation =
                e.target.value.length > 45 || e.target.value === "" || regex.test(e.target.value) 
                  ? true
                  : false;
              setInvalid({ ...invalid, email: validation });
              setUserData({...userData, email: e.target.value});
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
          helperText={invalid.username ? "1-25 characters" : ""}
            id="register-username"
            label="Username"
            type="text"
            required
            onChange={(e) => {
              const validation =
                e.target.value.length > 25 || e.target.value === ""
                  ? true
                  : false;
              setInvalid({ ...invalid, username: validation });
              setUserData({...userData, username: e.target.value});
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            required
            helperText="Minimum 5 & Maximum 25 characters"
            id="register-password"
            label="Password"
            type="password"
            error={invalid.password}
            onChange={(e) => {
              const validation =
                e.target.value.length < 5 ||
                e.target.value.length > 25 ||
                e.target.value === ""
                  ? true
                  : false;
              setInvalid({ ...invalid, password: validation });
              setUserData({...userData, password: e.target.value});
            }}
          />
        </FormControl>
        <FormControl>
          <Input
            id="register-dob"
            label="Date of Birth"
            type="date"
            required
            placeholder="Select a date"
            onChange={(e) => {
              const validation =
                e.target.value.length < 8 ||
                e.target.value.length > 8 ||
                e.target.value === ""
                  ? true
                  : false;
              setInvalid({ ...invalid, dob: validation});
              setUserData({...userData, dob: e.target.value});
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            required
            helperText={invalid.country ? "1-25 characters" : ""}
            id="register-country"
            label="Country"
            type="text"
            error={invalid.country}
            onChange={(e) => {
              const validation =
                e.target.value.length > 25 || e.target.value === ""
                  ? true
                  : false;
              setInvalid({ ...invalid, country: validation });
              setUserData({...userData, country: e.target.value});
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            helperText={invalid.street ? "1-45 characters" : ""}
            id="register-street"
            label="Address"
            type="text"
            error={invalid.street}
            onChange={(e) => {
              const validation =
                e.target.value.length > 45 || e.target.value === ""
                  ? true
                  : false;
              setInvalid({ ...invalid, street: validation });
              setUserData({...userData, street: e.target.value});
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            helperText={invalid.city ? "1-25 characters" : ""}
            id="register-city"
            label="City"
            type="text"
            error={invalid.city}
            onChange={(e) => {
              const validation =
                e.target.value.length > 25 || e.target.value === ""
                  ? true
                  : false;
              setInvalid({ ...invalid, city: validation });
              setUserData({...userData, city: e.target.value});
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            helperText={invalid.state ? "1-45 characters" : ""}
            id="register-state"
            label="State"
            type="text"
            error={invalid.state}
            onChange={(e) => {
              const validation =
                e.target.value.length > 45 || e.target.value === ""
                  ? true
                  : false;
              setInvalid({ ...invalid, state: validation });
              setUserData({...userData, state: e.target.value});
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            helperText={invalid.zip_code ? "1-25 characters" : ""}
            id="register-zip"
            label="Zip code"
            type="text"
            error={invalid.zip_code}
            onChange={(e) => {
              const validation =
                e.target.value.length > 10 || e.target.value === ""
                  ? true
                  : false;
              setInvalid({ ...invalid, zip_code: validation });
              setUserData({...userData, zip_code: e.target.value});
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            required
            helperText={invalid.id_number ? "7 characters" : ""}
            id="register-id-number"
            label="Passport Number"
            type="text"
            error={invalid.country}
            onChange={(e) => {
              const validation =
                e.target.value.length > 7 || e.target.value === ""
                  ? true
                  : false;
              setInvalid({ ...invalid, id_number: validation });
              setUserData({...userData, id_number: e.target.value});
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            helperText={invalid.contact ? "13 characters" : ""}
            id="register-contact"
            label="Phone/Mobile Number"
            type="text"
            error={invalid.contact}
            onChange={(e) => {
              const validation =
                e.target.value.length > 13 || e.target.value === ""
                  ? true
                  : false;
              setInvalid({ ...invalid, contact: validation });
              setUserData({...userData, contact: e.target.value});
            }}
          />
        </FormControl>
        <FormControl className="register-checkbox-div">
          <Checkbox id="register-enroll-checkbox" onChange={(e) => setEnrollMileage(e.currentTarget.checked)}></Checkbox>
          <FormLabel>Enroll in Mileage Program!</FormLabel>
        </FormControl>
        <FormControl className="register-checkbox-div">
          <Checkbox id="register-tnc-checkbox" onChange={(e) => setTncCheckbox(e.currentTarget.checked)}></Checkbox>
          <FormLabel>Read and agree to the Terms, Conditions and Policies of our Airlines!</FormLabel>
        </FormControl>
        <FormControl className="btn-group">
        <div className="">
          <Button variant="contained" color="primary" className="pure-u-1-6 btn-spacing" onClick={(e) => handleSubmit(e)}>
            Register
          </Button>
          </div>
        </FormControl>
        {message && <Alert severity="error">{message}</Alert>}
      </FormGroup>
    </div>
  );
}
