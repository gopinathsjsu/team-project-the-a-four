import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../App.css";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  TextField,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";
import { useHistory } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

const Registration = () => {
  Axios.defaults.withCredentials = true;
  const [message, setMessage] = useState("");
  const [dob, setDate] = useState(new Date());
  const [invalid, setInvalid] = useState({
    // user_id: false,
    password: false,
    first_name: false,
    last_name: false,
    email_id: false,
    country: false,
  });
  const defaultValues = {
    // user_id: "",
    password: "",
    first_name: "",
    last_name: "",
    email_id: "",
    country: "",
  };
  const [userDetails, setUserDetails] = useState(defaultValues);
  const history = useHistory();

  

  const register = () => {
    if (
      userDetails.password.trim().length < 5 ||
      userDetails.first_name.trim() === "" ||
      userDetails.last_name.trim() === "" ||
      userDetails.country.trim() === "" ||
      userDetails.email_id.trim() === "" ||
      userDetails.dob.trim() === ""
    ) {
      setMessage("Please fill all fields");
    } else if (
      userDetails.email_id.includes(" ") ||
      userDetails.password.includes(" ")
    ) {
      setMessage("Space character not allowed in email_id and/or password");
    } else if(
      userDetails.dob.includes(" ")
    ){
      setMessage("Please select a valid date");
    }else {
      Axios.post("http://localhost:3001/register", {
        userDetails
      })
        .then((response) => {
          setMessage(
            'Your User ID is "' +
              response.data.user_id +
              '" Contact admin for approval'
          );
        })
        .catch((error) => {
          setMessage(error.response.data.err);
        });
    }
  };


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
            error={invalid.first_name}
            onChange={(e) => {
              const validation =
                e.target.value.length > 25 || e.target.value === ""
                  ? true
                  : false;
              setInvalid({ ...invalid, first_name: validation });
              setUserDetails({ ...userDetails, first_name: e.target.value });
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
              setUserDetails({ ...userDetails, last_name: e.target.value });
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            required
            helperText={invalid.email_id ? "1-25 characters" : ""}
            id="register-email-id"
            label="Email ID"
            type="text"
            error={invalid.email_id}
            onChange={(e) => {
              const validation =
                e.target.value.length > 25 || e.target.value === ""
                  ? true
                  : false;
              setInvalid({ ...invalid, email_id: validation });
              setUserDetails({ ...userDetails, email_id: e.target.value });
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
              setUserDetails({ ...userDetails, password: e.target.value });
            }}
          />
        </FormControl>
        <FormControl>
          <Input
            id="register-dob"
            label="Date of Birth"
            type="date"
            required
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
              setUserDetails({ ...userDetails, country: e.target.value });
            }}
          />
        </FormControl>
        <FormControl>
        <div>
          <div className="pure-u-1-6"></div>
          <Button variant="contained" color="primary" className="pure-u-1-6" onClick={register}>
            Register
          </Button>
          <div className="pure-u-1-6"></div>
          <Button variant="contained" color="primary" className="pure-u-1-6" onClick={history.goBack}>
            Cancel
          </Button>
          </div>
        </FormControl>
        {message && <Alert severity="error">{message}</Alert>}
      </FormGroup>
    </div>
  );
}

export default Registration;