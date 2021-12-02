import React, { useState } from 'react'
import { Redirect } from 'react-router';
import NaviBar from "../common/navbar";
import LoginModal from "../login/loginPopup";
import {Button, Form} from 'react-bootstrap';

export default function Search(props) {

    // const searchResult = () => {
    //     window.location.href = './flightsList'
    // }

    let [source_airport, setDepAirport] = useState("");
    let [dest_airport, setArrAirport] = useState("");
    let [dep_date, setDepDate] = useState("");
    let [arr_date, setArrDate] = useState("");
    let [noOfPass, setNoOfPass] = useState(0);

    let [errorMsg, setErrorMsg] = useState("");

    // function validateForm() {
    //     if (source_airport === "" || dest_airport === "" || dep_date === "" || arr_date === "") {
    //         setErrorMsg("Fields are required");
    //         return true;
    //     }
    //     return false;
    // }

    const searchResult = (e) => {
        e.preventDefault();
        if (source_airport === "" || dest_airport === "" || dep_date === "" || arr_date === "") {
            setErrorMsg("Fields are required");
        } else {
            console.log("in searchResult method.")
            console.log("sourceAirport: " + source_airport + "destinationAirport: " + dest_airport + "departureDateString" + dep_date + "arrivalDateString" + arr_date);
            if (source_airport && dest_airport && dep_date && arr_date) {
                //var authToken = "Bearer " + data.token;

                // selectElement = document.querySelector('#select1');
                // output = selectElement.value;
                // document.querySelector('.output').textContent = output;

                fetch("http://3.143.245.196:8080/api/flights/get-flights?sourceAirport=" 
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



    let [isShowLogin, setIsShowLogin] = useState(false);

    const handleLoginClicked = () => {
        setIsShowLogin(!isShowLogin);
    }

    let pathname = window.location.pathname

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     validateForm();
    //     // try {
    //     //     authenticate();
    //     // } catch (e) {
    //     //     alert(e.message);
    //     // }
    // }




    return (
        <div align="center">
            <NaviBar handleLoginClick={handleLoginClicked}></NaviBar>
            {isShowLogin && <LoginModal isShowLogin={isShowLogin} setIsShowLogin={setIsShowLogin} pathname={pathname} />}
            <div class="search-flight-form-container" align="center">
                <section id="first-tab-group" class="tabgroup">
                    <div id="tab1">
                        <div class="submit-form">
                            <h4>Search flights for travel:</h4>
                            <form id="form-submit" action="" method="get">
                                <div class="row">
                                    <div class="col-md-6">
                                        <Form.Group >
                                            <Form.Label>From: </Form.Label>
                                            <Form.Select value={source_airport} required name='from' onChange={e=>setDepAirport(e.target.value)}>
                                                    <option value="">Select Departure Airport</option>
                                                    <option value="LAX">LAX</option>
                                                    <option value="SFO">SFO</option>
                                                    <option value="SJC">SJC</option>
                                                    <option value="SMF">SMF</option>
                                                    <option value="SAN">SAN</option>
                                                    <option value="SBA">SBA</option>
                                                    <option value="FUL">FUL</option>
                                                    <option value="RIV">RIV</option>
                                                    <option value="HYD">HYD</option>
                                            </Form.Select>         
                                        </Form.Group>
                                    </div>
                                    <div class="col-md-6">
                                        <Form.Group >
                                            <Form.Label>To: </Form.Label>
                                            <Form.Select value={dest_airport} required name='to' onChange={e=>setArrAirport(e.target.value)}>
                                                    <option value="">Select Destination Airport</option>
                                                    <option value="LAX">LAX</option>
                                                    <option value="SFO">SFO</option>
                                                    <option value="SJC">SJC</option>
                                                    <option value="SMF">SMF</option>
                                                    <option value="SAN">SAN</option>
                                                    <option value="SBA">SBA</option>
                                                    <option value="FUL">FUL</option>
                                                    <option value="RIV">RIV</option>
                                                    <option value="HYD">HYD</option>
                                            </Form.Select>         
                                        </Form.Group>
                                    </div>
                                    <div class="col-md-6">
                                        <fieldset>
                                            <label for="departure" value={dep_date}>Departure date: </label>
                                            <input name="deparure" type="date" class="form-control date" id="deparure" placeholder="Select a date" required="" onChange={e => setDepDate(e.target.value)} />
                                        </fieldset>
                                    </div>
                                    <div class="col-md-6">
                                        <fieldset>
                                            <label for="return" value={arr_date}>Arrival date: </label>
                                            <input name="return" type="date" class="form-control date" id="return" placeholder="Select a date" required="" onChange={e => setArrDate(e.target.value)} />
                                        </fieldset>
                                    </div>
                                    <div class="col-md-6">
                                        <Form.Group >
                                            <Form.Label>Number of passengers: </Form.Label>
                                            <Form.Select required name='noOfPass' value={noOfPass} onChange={e => setNoOfPass(e.target.value)}>
                                                <option value="0">Select number of passengers</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </Form.Select>         
                                        </Form.Group>
                                    </div>
                                    <div class="col-md-6">
                                        <Form.Group >
                                            <Form.Label>Trip Type: </Form.Label>
                                            <Form.Select>
                                                <option value="0">Select Trip Type</option>
                                                <option value="one-way">One-Way</option>
                                                <option value="round-trip">Round Trip</option>
                                            </Form.Select>         
                                        </Form.Group>
                                    </div>
                                    <div align="center">
                                    <Button variant="secondary" className="pure-u-1-6 btn-spacing"  align="center" onClick={searchResult}>
                                            Search
                                    </Button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );

}


