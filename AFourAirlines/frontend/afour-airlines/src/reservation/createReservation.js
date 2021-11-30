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

    console.log(userData);

    const handleCreate = () => {
        console.log(JSON.stringify(passList));
    }

    var availableSeats = JSON.parse(localStorage.getItem("availableSeats"));
    console.log(availableSeats);

    

    function renderSeatList(){
        var seatList = [];
        seatList.push(<option value="0">Select seat</option>);
        for(var i = 0; i < availableSeats.length; i++){
            seatList.push(<option key={availableSeats[i].id} value={availableSeats[i].id}>{availableSeats[i].number}</option>);
        }
        return seatList;
    }

    var seatListElements = renderSeatList()
    
    let passList = [];
    let defaultPass = {
        passNumber: 0,
        firstName: "",
        lastName: "",
        identificationNumber: "",
        seat: "",
    }
    passList.push(defaultPass);

    console.log(passList);
    var noOfPass = localStorage.getItem("noOfPass") ? localStorage.getItem("noOfPass") : 1;


    return(
        <div>
            <NavBar handleLoginClick={handleLoginClicked}></NavBar>
            {isShowLogin && <LoginModal isShowLogin={isShowLogin} setIsShowLogin={setIsShowLogin} pathname={pathname}/>}
            <div className="help-page">
                <FlightCard/>
                <ReservationCard handleCreate={handleCreate} 
                    userData={userData} renderSeatList={seatListElements} noOfPass={noOfPass} passList={passList}/>
            </div>
            

        </div>

    );
}