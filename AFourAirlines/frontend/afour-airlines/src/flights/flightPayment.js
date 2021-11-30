import React from 'react'
import 'react-credit-cards/es/styles-compiled.css';
import CardPayment from "../reservation/cardPayment";
import {
    FormGroup,
    FormControl,
    Checkbox
  } from "@material-ui/core";
import FormLabel from "react-bootstrap/esm/FormLabel";


export default function FlightPayment (props){
        return (
            <div className="baggage-policy-container" style={{'border-top': "solid 0.25px",
                'padding-top': "3%"}}>
                <h2>Select payment methods:</h2>
                <div className="pass-form-popup-content">
                    <FormGroup>
                        <FormControl className="register-checkbox-div" style={{'font-size': "large"}}>
                            <FormLabel>You have {props.mileagePoints} milage points.</FormLabel>
                        </FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormControl className="register-checkbox-div">
                            <Checkbox id="register-enroll-checkbox" onChange={props.useMilesOption}></Checkbox>
                            <FormLabel>Use mileage points</FormLabel>
                        </FormControl>
                    </FormGroup>
                </div>
                <div className="pass-form-popup-content">
                    <p style={{'font-size': "large"}}>Credit Card Details: </p>
                    <CardPayment/>
                </div>
            </div>
        );
}

