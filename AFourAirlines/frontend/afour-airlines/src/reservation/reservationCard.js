import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import ReservationDetails from './reservationDetails';
import FlightPayment from "../flights/flightPayment";
import Alert from "@material-ui/lab/Alert";

export default function ReservationCard(props){

    let [hasBalance, setHasBalance] = useState(false);
    let [isUseMiles, setUseMiles] = useState(false);
    let [message,setMessage] = useState("");
    function renderPassengerForm(){
        var passForms = [];
        for(var i = 0; i < props.noOfPass; i++){
            passForms.push(<ReservationDetails index={i} renderSeatList={props.renderSeatList} passList={props.passList} setPassList={props.setPassList}/>);
        }
        return passForms;
    }

    function useMileagePoints(){
        setUseMiles(!isUseMiles);
        props.useMilesOption();
        console.log("here too: " + isUseMiles);
        if(!isUseMiles){
            var balancePrice = props.totalPrice - props.mileagePoints;
            var msg = "Please pay the remaining $" + balancePrice + " by credit card.";
            setMessage(msg);
            console.log(message);
        }
        else{
            setMessage("");
        }
    }

return(
    <div>
        <div>
            <div className="">
                <h2>Who's traveling?</h2>
                <p>Traveler names must match government-issued photo ID exactly.</p>
            </div>
            <Form className="form render-passenger">
                <Form.Group>
                {
                    renderPassengerForm()
                }
                </Form.Group>
                <Form.Group>
                    <FlightPayment useMilesOption={useMileagePoints} mileagePoints={props.mileagePoints}/>
                </Form.Group>
                {message && <Alert severity="error">{message}</Alert>}
                <Form.Group>
                    <div className="btn-group">
                        <Button variant="primary" className="pure-u-1-6 btn-spacing" onClick={props.handleCreate}>
                            Book Now
                        </Button>
                    </div>
                </Form.Group>
            </Form>
        </div>
    </div>

);

}


/*
passList = {
    passport: {
        name: 
        seat:
    }
}

passList['passportNumber']
*/