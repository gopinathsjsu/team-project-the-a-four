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
  Axios.defaults.withCredentials = true;

  // States for registration
  const [username, setUsername] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDate] = useState(new Date());
  const [country, setCountry] = useState('');
  const [contact, setContact] = useState('');
  const [id_number, setIDNumber] = useState('');
  const [enrollMileage, setEnrollMileage] = useState(false);
  const [tncCheckbox, setTncCheckbox] = useState(false);
  const regex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [hasError, setError] = useState(false);
  const [message, setMessage] = useState("");
  const history = useHistory();
  
  const [invalid, setInvalid] = useState({
    username: false,
    dob: false,
    password: false,
    first_name: false,
    last_name: false,
    email: false,
    country: false,
    id_number: false,
    contact: false,
  });
  

  const validateFields = () => {
    if (
      username.trim() === " " ||
      password.trim().length < 5 ||
      first_name.trim() === "" ||
      last_name.trim() === "" ||
      country.trim() === "" ||
      email.trim() === "" ||
      dob.trim() === "" ||
      contact.trim() === ""||
      id_number.trim() === ""
    ) {
      setError(true);
      setMessage("Please fill all fields");
    } else if (
      email.includes(" ") ||
      password.includes(" ") 
    ) {
      setError(true);
      setMessage("Space character not allowed in email_id and/or password");
    } else if ( username.trim().length > 15 ){
      setError(true);
      setMessage("Username cannot be more that 15 characters");
    } else if(
      dob.includes(" ")
    ) {
      setError(true);
      setMessage("Please select a valid date");
    } else if(!(tncCheckbox)) {
      setError(true);
      setMessage("Please accept the Terms, Conditions and Policies of our Airlines")
    }
  }


  const handleSubmit = (e) => {
      validateFields();

      if(hasError){
        //setMessage("Has error");
      }
      else{
        setMessage("Success!");
        //register();
      }
  }

  const register = () => {
      Axios.post("http://localhost:3001/register", {
        
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
            onChange={(e) => {
              const validation =
                e.target.value.length > 25 || e.target.value === ""
                  ? true
                  : false;
              setInvalid({ ...invalid, first_name: validation });
              setFirstName(e.target.value);
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
              setLastName(e.target.value);
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
              setEmail(e.target.value);
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
              setUsername(e.target.value);
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
              setPassword(e.target.value);
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
              setDate(e.target.value);
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
              setCountry(e.target.value );
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
              setIDNumber(e.target.value );
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            required
            helperText={invalid.contact ? "10 characters" : ""}
            id="register-contact"
            label="Phone/Mobile Number"
            type="text"
            error={invalid.contact}
            onChange={(e) => {
              const validation =
                e.target.value.length > 10 || e.target.value === ""
                  ? true
                  : false;
              setInvalid({ ...invalid, contact: validation });
              setContact(e.target.value );
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
          <Button variant="contained" color="primary" className="pure-u-1-6 btn-spacing" onClick={handleSubmit}>
            Register
          </Button>
          <Button variant="contained" color="tertiary" className="pure-u-1-6 btn-spacing" onClick={history.goBack}>
            Cancel
          </Button>
          </div>
        </FormControl>
        {message && <Alert severity="error">{message}</Alert>}
      </FormGroup>
    </div>
  );
}
