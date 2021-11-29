import React, { useState } from "react";
import NavBar from "../common/navbar";
import LoginModal from "../login/loginPopup";
import ReservationCard from "./reservationCard";
import FlightCard from "../flights/flightCard";

export default function CreateReservation(props){
    const [isShowLogin, setIsShowLogin] = useState(false);

    const handleLoginClicked = () => {
        setIsShowLogin(!isShowLogin);
    }

    const pathname = window.location.pathname

    let userData = JSON.parse(localStorage.getItem("userData"));
    let flightData = JSON.parse(localStorage.getItem("flightId"));

    console.log(userData);

    const handleCreate = () => {

    }
    
    var availableSeats = "";
    let flightId = props.flightDetail.id;
    console.log("flightId: " + flightId);
    function getAvailableSeats(){
        var authToken = "Bearer " + localStorage.getItem("token");

        fetch("http://localhost:8080/api/flights/get-available-seats?flightId=" + props.flightDetail.id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authToken
            },
            mode: 'cors'
            })
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            availableSeats = data;
        })
        .catch(error => {
            //this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
    }
    
    return(
        <div>
            <NavBar handleLoginClick={handleLoginClicked}></NavBar>
            {isShowLogin && <LoginModal isShowLogin={isShowLogin} setIsShowLogin={setIsShowLogin} pathname={pathname}/>}
            <div className="help-page">
                <FlightCard/>
                <ReservationCard availableSeats={availableSeats} getAvailableSeats={getAvailableSeats} handleCreate={handleCreate} userData={userData}/>
            </div>
            

        </div>

    );
}