import React, { useState } from 'react'
import NavBar from "../common/navbar";
import LoginModal from '../login/loginPopup';
import {Button} from 'react-bootstrap';

export default function UserTrips(props) {

    let flightId = localStorage.getItem("flightId");

    let token = localStorage.getItem("token");
    let [isShowLogin, setIsShowLogin] = useState(false);

    const handleLoginClicked = () => {
        setIsShowLogin(!isShowLogin);
    }

    let pathname = window.location.pathname

    let [name, setFlightName] = useState("");
    let [source_airport, setDepAirport] = useState("");
    let [dest_airport, setArrAirport] = useState("");
    let [dep_date, setDepDate] = useState("");
    let [arr_date, setArrDate] = useState("");
    let [dep_time, setDepTime] = useState("");
    let [arr_time, setArrTime] = useState("");
    let [source_terminal, setSouTerminal] = useState("");
    let [source_gate, setSouGate] = useState("");
    let [dest_terminal, setDestTerminal] = useState("");
    let [dest_gate, setDestGate] = useState("");

    let [errorMsg, setErrorMsg] = useState("");


    const searchResult = (e) => {
        e.preventDefault();
        if (name === "" || source_airport === "" || dest_airport === "" 
            || dep_date === "" || arr_date === "" || dep_time === ""
            || arr_time === "" || source_terminal === ""
            || source_gate === "" || dest_terminal === "" || dest_gate === "") {
            setErrorMsg("Fields are required");
        } else {
            console.log("in searchResult method.")
            console.log("sourceAirport: " + source_airport + "destinationAirport: " + dest_airport + "departureDateString" + dep_date + "arrivalDateString" + arr_date);
            if (source_airport && dest_airport && dep_date && arr_date) {
                //var authToken = "Bearer " + data.token;

                // selectElement = document.querySelector('#select1');
                // output = selectElement.value;
                // document.querySelector('.output').textContent = output;

                fetch("http://localhost:8080/api/flights/get-flights?sourceAirport=" 
                        + source_airport + "&destinationAirport=" + dest_airport + "&departureDateString=" 
                            + dep_date + "&arrivalDateString=" + arr_date, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        //'Authorization': authToken
                    },
                    mode: 'cors'
                })
                    .then(async innerResponse => {
                        const resData = await innerResponse.json(); 

                        if (!innerResponse.ok) {
                            // get error message from body or default to response statusText
                            const error = (resData && resData.message) || innerResponse.statusText;
                            return Promise.reject(error);
                        }
                        console.log("asdsad" + JSON.stringify(resData));
                        //flightList = resData;
                        localStorage.setItem("flightList", JSON.stringify(resData));
                        localStorage.setItem("noOfPass", noOfPass);
                        window.location.assign("/flights/flightsList");
                        //if (JSON.stringify(resData).length > 0) {
                            //setTimeout(function() {
                            //    window.location.assign("/flights/flightsList");
                             // }, 5000);
                        //}
                            
                        // }

                    })
                    .catch(error => {
                        //this.setState({ errorMessage: error.toString() });
                        console.error('There was an error!', error);
                    });
            }
        }
    }



    return (
        <div>
            <NavBar handleLoginClick={handleLoginClicked}></NavBar>
            {isShowLogin && <LoginModal isShowLogin={isShowLogin} setIsShowLogin={setIsShowLogin} pathname={pathname} />}
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-5">
                        <h1 className="text-left">Flights List</h1>
                        <div className="table-responsive border p-4 rounded">
                            <h4>Flight Search Result</h4>
                            {token === null && <p align="right">*Login to reserve</p>}
                            <table className="table ">
                                <thead className="table-borderless table-secondary">
                                    <tr>
                                        <th scope="col">No.</th>
                                        <th scope="col">Departure Airport</th>
                                        <th scope="col">Arrival Airport</th>
                                        <th scope="col">Departure Time</th>
                                        <th scope="col">Arrival Time</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getFlightsMarkup()
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}