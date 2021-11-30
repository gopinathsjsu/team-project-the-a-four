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

        const handleCreate = () => {
            console.log(JSON.stringify(passList));

            var finalPrice = totalPrice + noOfPass*30;
    
            let bookBody = []
            var tempDetails = {};
            for(var i = 1; i < passList.length; i++)
            {
                tempDetails = {
                    "number": passList[i].passNumber,
                    "username": userData.username,
                    "flight": flightData,
                    "seat": {
                        "id": passList[i].seat,
                        "number": "A"+ passList[i].seat,
                        "airplane": flightData.equipment,
                        "flightId": flightId,
                        "reserved": true,
                        "price": 0
                    },
                    "price": finalPrice,
                    "status": "scheduled",
                    "identificationNumber": passList[i].identificationNumber,
                    "firstName": passList[i].firstName,
                    "lastName": passList[i].lastName,
                    "dateOfBirth": passList[i].dateOfBirth
                }
                bookBody.push(tempDetails);
            }
            
            var authToken = "Bearer " + localStorage.getItem('token');

            fetch("http://localhost:8080/api/reservations/create-reservation",{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': authToken
                    },
                    body: JSON.stringify(bookBody),
                    mode: 'cors'
                })
            .then(async response => {
                const resData = await response.json();

                if(!response.ok){
                    const error = (resData && resData.message) || response.statusText;
                    return Promise.reject(error);
                }

                window.location.assign("/");
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
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