import React, { useState } from "react";
import NavBar from "../common/navbar";
import LoginModal from "../login/loginPopup";
import ReservationCard from "./reservationCard";
import FlightCard from "../flights/flightCard";

export default function CreateReservation(props){
    const [isShowLogin, setIsShowLogin] = useState(false);
    let tax = 20;

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
        seatList.push(<option key="0" value="0">Select seat</option>);
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
        dateOfBirth: ""
    }
    passList.push(defaultPass);

    console.log(passList);
    var noOfPass = localStorage.getItem("noOfPass") ? localStorage.getItem("noOfPass") : 1;

    var mileagePoints = 100;

    let flightData = {};
    let flightId = localStorage.getItem("flightId");
    var flightList = JSON.parse(localStorage.getItem("flightList"));
    var totalPrice = 0;
        
        for(var i = 0; i < flightList.length; i++){
            console.log(flightList[i]);
            if(flightList[i].id === parseInt(flightId)){
                console.log("here");
                flightData = flightList[i];
                totalPrice = flightList[i].basePrice*(1 + tax/100);
            }
        }

        let [isUseMiles, setUseMiles] = useState(false);
        function useMilesOption(){
            setUseMiles(!isUseMiles);
        }

        
    
    return(
        <div>
            <NavBar handleLoginClick={handleLoginClicked}></NavBar>
            {isShowLogin && <LoginModal isShowLogin={isShowLogin} setIsShowLogin={setIsShowLogin} pathname={pathname}/>}
            <div className="help-page">
                <FlightCard flightData={flightData} totalPrice={totalPrice}/>
                <ReservationCard handleCreate={handleCreate} totalPrice={totalPrice} useMilesOption={useMilesOption} isUseMiles={isUseMiles}
                    userData={userData} renderSeatList={seatListElements} noOfPass={noOfPass} passList={passList} mileagePoints={mileagePoints}/>
            </div>
        </div>

    );
}