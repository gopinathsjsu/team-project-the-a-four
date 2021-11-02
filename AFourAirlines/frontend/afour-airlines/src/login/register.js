import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../App.css";
import NavBar from "../common/navbar";
import {
  Button,
  FormControl,
  FormGroup,
  FormHelperText,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Registration = () => {
  Axios.defaults.withCredentials = true;
  const [message, setMessage] = useState("");
  const [membershipType, setMembershipType] = useState([]);
  const [invalid, setInvalid] = useState({
    // user_id: false,
    password: false,
    first_name: false,
    last_name: false,
    email_id: false,
    zip_code: false,
    street: false,
    city: false,
  });
  const defaultValues = {
    // user_id: "",
    password: "",
    first_name: "",
    last_name: "",
    email_id: "",
    zip_code: "",
    street: "",
    city: "",
    membership_type: 0,
  };
  const [userDetails, setUserDetails] = useState(defaultValues);
  const history = useHistory();

  useEffect(() => {
    axios.get("http://localhost:3001/getMembershipTypes").then((response) => {
      if (response.data) {
        setMembershipType(response.data);
        console.log(response);
      }
    });
  }, []);

  const register = () => {
    if (
      userDetails.password.trim().length < 5 ||
      userDetails.first_name.trim() === "" ||
      userDetails.last_name.trim() === "" ||
      userDetails.city.trim() === "" ||
      userDetails.street.trim() === "" ||
      userDetails.email_id.trim() === "" ||
      userDetails.zip_code.length < 5
    ) {
      setMessage("Please fill all fields");
    } else if (
      userDetails.email_id.includes(" ") ||
      userDetails.zip_code.includes(" ") ||
      userDetails.password.includes(" ")
    ) {
      setMessage("Space character not allowed in zip_code, password, email_id");
    } else {
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
            helperText={invalid.street ? "1-25 characters" : ""}
            id="register-street"
            label="Street"
            type="text"
            error={invalid.street}
            onChange={(e) => {
              const validation =
                e.target.value.length > 25 || e.target.value === ""
                  ? true
                  : false;
              setInvalid({ ...invalid, street: validation });
              setUserDetails({ ...userDetails, street: e.target.value });
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            required
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
              setUserDetails({ ...userDetails, city: e.target.value });
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            required
            helperText="5 digit zip code"
            id="register-zip-code"
            label="ZIP Code"
            type="number"
            error={invalid.zip_code}
            onChange={(e) => {
              const validation =
                e.target.value.length !== 5 || e.target.value === ""
                  ? true
                  : false;
              setInvalid({ ...invalid, zip_code: validation });
              setUserDetails({ ...userDetails, zip_code: e.target.value });
            }}
          />
        </FormControl>
        <FormControl>
          <Select
            id="register-member-type"
            value={userDetails.membership_type}
            onChange={(e) => {
              setUserDetails({
                ...userDetails,
                membership_type: membershipType[e.target.value].type_id,
              });
            }}
            defaultValue={0}
            inputProps={{ "aria-label": "Without label" }}
          >
            {membershipType.map((each, index) => {
              return (
                <MenuItem key={each.type_id} value={index}>
                  {each.name}
                </MenuItem>
              );
            })}
          </Select>
          {membershipType.map((each) => {
            return (
              <FormHelperText key={each.type_id}>
                {each.name + ": " + each.description}
              </FormHelperText>
            );
          })}
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