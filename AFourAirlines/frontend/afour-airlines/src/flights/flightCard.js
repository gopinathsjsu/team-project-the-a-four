import React from "react";
import { Form } from "react-bootstrap";
import planeIcon from "../images/plane-icon.png";

export default function FlightCard(props){   
        return (
            <div className="baggage-policy-container">
                <div>
                    <h2>Flight detials:</h2>
                </div>
                <div >
                    <Form className="form pass-form">
                        <Form.Group className="xx-l-font">
                            <Form.Label>{props.flightData.sourceAirport}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <img src={planeIcon} alt="plane-icon"/>
                        </Form.Group>
                        <Form.Group className="xx-l-font">
                            <Form.Label>{props.flightData.destinationAirport}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>{props.flightData.departureDate}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>{props.flightData.arrivalDate}</Form.Label>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>{props.flightData.noOfPass}</Form.Label>
                        </Form.Group>
                        <Form.Group className="xx-l-font">
                            <Form.Label>${props.totalPrice}</Form.Label>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        );
}