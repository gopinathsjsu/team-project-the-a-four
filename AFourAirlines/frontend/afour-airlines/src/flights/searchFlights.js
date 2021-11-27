import React, { useState } from 'react'
import NavBar from "../common/navbar";
import LoginModal from "../login/loginPopup";

export default function Search(props) {

    const searchResult = () => {
        window.location.href = './searchPage'
    }

    let [source_airport, setDepAirport] = useState("");
    let [dest_airport, setArrAirport] = useState("");
    let [dep_date, setDepDate] = useState("");
    let [arr_date, setArrDate] = useState("");

    let [errorMsg, setErrorMsg] = useState("");

    function validateForm() {
        if (source_airport === "" || dest_airport === "" || dep_date === "" || arr_date === "") {
            setErrorMsg("Fields are required");
            return true;
        }
        return false;
    }

    const search = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "departure_airport": source_airport,
            "departure_date": dep_date,
            "arrival_airport": dest_airport,
            "arrival_date": arr_date
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            mode: 'cors'
        };

        fetch("http://localhost:8080/api/users/authenticate", requestOptions)
            .then(async response => {
                const data = await response.json();

                //check for error response
                if (!response.ok) {
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
                localStorage.setItem('token', data.token);
                localStorage.setItem("sourceAirport", source_airport);
                localStorage.setItem("destAirport", dest_airport);
                localStorage.setItem("depDate", dep_date);
                localStorage.setItem("arrDate", arr_date);

                console.log("sourceAirport: " + source_airport + "destAirport: " + dest_airport + "depDate" + dep_date + "arrDate" + arr_date);
                if (source_airport && dest_airport && dep_date && arr_date) {
                    var authToken = "Bearer " + data.token;
                    fetch("http://localhost:8080/api/flights/get-flights?sourceAirport=" + source_airport + "?destAirport=" + dest_airport + "?depDate=" + dep_date + "?arrDate=" + arr_date, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Authorization': authToken
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

                            localStorage.setItem("flightData", JSON.stringify(resData));
                            console.log(resData.role);
                            if (resData.role === "ADMIN") {
                                window.location.assign("/admin/home");
                            }
                            else {
                                window.location.assign(pathname);
                            }

                        })
                        .catch(error => {
                            //this.setState({ errorMessage: error.toString() });
                            console.error('There was an error!', error);
                        });
                }

            })
            .catch(error => {
                //this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }



    // let [isShowLogin, setIsShowLogin] = useState(false);

    // const handleLoginClicked = () => {
    //     setIsShowLogin(!isShowLogin);
    // }

    // const pathname = window.location.pathname

    function handleSubmit(event) {
        event.preventDefault();
        validateForm();
        try {
            authenticate();
        } catch (e) {
            alert(e.message);
        }
    }



    console.log(props);
    return (
        <div>
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
                                            <select required name='from' onchange='this.form.()'>
                                                <option value="">Select departure location</option>
                                                <option value="Los Angeles">LAX</option>
                                                <option value="San Francisco">SFO</option>
                                                <option value="San Jose">SJC</option>
                                                <option value="Sacramento">SMF</option>
                                                <option value="San Diego">SAN</option>
                                                <option value="Santa Barbara">SBA</option>
                                                <option value="Fullerton">FUL</option>
                                                <option value="Riverside">RIV</option>
                                                <option value="San Bernardino">SBD</option>
                                            </select>
                                        </fieldset>
                                    </div>
                                    <div class="col-md-6">
                                        <fieldset>
                                            <label for="to">To: </label>
                                            <select required name='to' onchange='this.form.()'>
                                                <option value="">Select departure location</option>
                                                <option value="Los Angeles">LAX</option>
                                                <option value="San Francisco">SFO</option>
                                                <option value="San Jose">SJC</option>
                                                <option value="Sacramento">SMF</option>
                                                <option value="San Diego">SAN</option>
                                                <option value="Santa Barbara">SBA</option>
                                                <option value="Fullerton">FUL</option>
                                                <option value="Riverside">RIV</option>
                                                <option value="San Bernardino">SBD</option>
                                            </select>
                                        </fieldset>
                                    </div>
                                    <div class="col-md-6">
                                        <fieldset>
                                            <label for="departure">Departure date: </label>
                                            <input name="deparure" type="date" class="form-control date" id="deparure" placeholder="Select a date" required="" onchange='this.form.()' />
                                        </fieldset>
                                    </div>
                                    <div class="col-md-6">
                                        <fieldset>
                                            <label for="return">Return date: </label>
                                            <input name="return" type="date" class="form-control date" id="return" placeholder="Select a date" required="" onchange='this.form.()' />
                                        </fieldset>
                                    </div>
                                    <div class="col-md-6">
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
                                    </div>
                                    <div class="col-md-6">
                                        <fieldset>
                                            <button type="submit" id="btn-form-submit" class="btn" onClick={searchResult}>Search</button>
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
    )

}
            
    
