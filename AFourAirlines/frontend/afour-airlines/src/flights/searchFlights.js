import React, { useState } from 'react'
import { Redirect } from 'react-router';
import NavBar from "../common/navbar";
import LoginModal from "../login/loginPopup";

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
            <NavBar handleLoginClick={handleLoginClicked}></NavBar>
            {isShowLogin && <LoginModal isShowLogin={isShowLogin} setIsShowLogin={setIsShowLogin} pathname={pathname} />}
            <div class="col-md-5 col-md-offset-1" align="center">
                <section id="first-tab-group" class="tabgroup">
                    <div id="tab1">
                        <div class="submit-form">
                            <h4>Search flights for travel:</h4>
                            <form id="form-submit" action="" method="get">
                                <div class="row">
                                    <div class="col-md-6">
                                        <fieldset>
                                            <label for="from">From: </label>                                            
                                                <select value={source_airport} required name='from' onChange={e=>setDepAirport(e.target.value)}>
                                                    <option value="">Select departure location</option>
                                                    <option value="LAX">LAX</option>
                                                    <option value="SFO">SFO</option>
                                                    <option value="SJC">SJC</option>
                                                    <option value="SMF">SMF</option>
                                                    <option value="SAN">SAN</option>
                                                    <option value="SBA">SBA</option>
                                                    <option value="FUL">FUL</option>
                                                    <option value="RIV">RIV</option>
                                                    <option value="HYD">HYD</option>
                                                </select>                                                                 
                                        </fieldset>
                                    </div>
                                    <div class="col-md-6">
                                        <fieldset>
                                            <label for="to">To: </label>
                                            <select value={dest_airport} required name='to' onChange={e => setArrAirport(e.target.value)}>
                                                <option value="">Select arrival location</option>
                                                <option value="LAX">LAX</option>
                                                <option value="SFO">SFO</option>
                                                <option value="SJC">SJC</option>
                                                <option value="SMF">SMF</option>
                                                <option value="SAN">SAN</option>
                                                <option value="SBA">SBA</option>
                                                <option value="FUL">FUL</option>
                                                <option value="RIV">RIV</option>
                                                <option value="HYD">HYD</option>
                                            </select>
                                        </fieldset>
                                    </div>
                                    <div class="col-md-6">
                                        <fieldset>
                                            <label for="departure" value={dep_date}>Departure date: </label>
                                            <input name="deparure" type="date" class="form-control date" id="deparure" placeholder="Select a date" required="" onChange={e => setDepDate(e.target.value)} />
                                        </fieldset>
                                    </div>
                                    <div class="col-md-6">
                                        <fieldset>
                                            <label for="return" value={arr_date}>Return date: </label>
                                            <input name="return" type="date" class="form-control date" id="return" placeholder="Select a date" required="" onChange={e => setArrDate(e.target.value)} />
                                        </fieldset>
                                    </div>
                                    <div class="col-md-6">
                                        <fieldset>
                                            <label for="noOfPass">Number of passengers: </label>
                                            <select required name='noOfPass' value={noOfPass} onChange={e => setNoOfPass(e.target.value)}>
                                                <option value="0">Select number of passengers</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                        </fieldset>
                                    </div>
                                    {/* <div class="col-md-6">
                                        <div class="radio-select">
                                            <div class="row">
                                                <div class="col-md-6 col-sm-6 col-xs-6">
                                                    <label for="round">Round trip</label>
                                                    <input type="radio" name="trip" id="round" value="round" required="required" onchange='this.form.()' />
                                                </div>
                                                <div class="col-md-6 col-sm-6 col-xs-6">
                                                    <label for="oneway">One-way trip</label>
                                                    <input type="radio" name="trip" id="oneway" value="one-way" required="required" onchange='this.form.()' />
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <div class="col-md-6" align="center">
                                        <fieldset>
                                            {/*<button type="submit" id="btn-form-submit" class="btn" align="center" onClick={searchResult}>Search</button>*/}
                                            <button variant="primary" className="pure-u-1-6 btn-spacing" align="center" onClick={searchResult}> Search </button>
                                            {/* <script type="text/javascript">
                                                    document.getElementById("button").onclick = function () {
                                                       window.location.href = './searchPage'
                                                       };
                                                </script> */}
                                        </fieldset>
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


