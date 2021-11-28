import React, { useState } from 'react'
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

    let [errorMsg, setErrorMsg] = useState("");

    function validateForm() {
        if (source_airport === "" || dest_airport === "" || dep_date === "" || arr_date === "") {
            setErrorMsg("Fields are required");
            return true;
        }
        return false;
    }

    const searchResult = () => {
        console.log("in searchResult method.")
        console.log("sourceAirport: " + source_airport + "destAirport: " + dest_airport + "depDate" + dep_date + "arrDate" + arr_date);
        if (source_airport && dest_airport && dep_date && arr_date) {
            //var authToken = "Bearer " + data.token;
            fetch("http://localhost:8080/api/flights/get-flights?sourceAirport=" + source_airport + "?destAirport=" + dest_airport + "?depDate=" + dep_date + "?arrDate=" + arr_date, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
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

                    localStorage.setItem("flightList", JSON.stringify(resData));
                    // console.log(resData.role);
                    // if (resData.role === "ADMIN") {
                    //     window.location.assign("/admin/home");
                    // }
                    // else {
                    window.location.assign("/flights/flightsList");
                    // }

                })
                .catch(error => {
                    //this.setState({ errorMessage: error.toString() });
                    console.error('There was an error!', error);
                });
        }
    }



    let [isShowLogin, setIsShowLogin] = useState(false);

    const handleLoginClicked = () => {
        setIsShowLogin(!isShowLogin);
    }

    const pathname = window.location.pathname

    function handleSubmit(event) {
        event.preventDefault();
        validateForm();
        // try {
        //     authenticate();
        // } catch (e) {
        //     alert(e.message);
        // }
    }



    console.log(props);
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
                                            <select required name='from' onchange={(e) => setDepAirport(e.target.value)}>
                                                <option value="">Select departure location</option>
                                                <option value="LAX">LAX</option>
                                                <option value="SFO">SFO</option>
                                                <option value="SJC">SJC</option>
                                                <option value="SMF">SMF</option>
                                                <option value="SAN">SAN</option>
                                                <option value="SBA">SBA</option>
                                                <option value="FUL">FUL</option>
                                                <option value="RIV">RIV</option>
                                                <option value="Hyd">Hyd</option>
                                            </select>
                                        </fieldset>
                                    </div>
                                    <div class="col-md-6">
                                        <fieldset>
                                            <label for="to">To: </label>
                                            <select required name='to' onchange={(e) => setArrAirport(e.target.value)}>
                                            <option value="">Select arrival location</option>
                                                <option value="LAX">LAX</option>
                                                <option value="SFO">SFO</option>
                                                <option value="SJC">SJC</option>
                                                <option value="SMF">SMF</option>
                                                <option value="SAN">SAN</option>
                                                <option value="SBA">SBA</option>
                                                <option value="FUL">FUL</option>
                                                <option value="RIV">RIV</option>
                                                <option value="Hyd">Hyd</option>
                                            </select>
                                        </fieldset>
                                    </div>
                                    <div class="col-md-6">
                                        <fieldset>
                                            <label for="departure">Departure date: </label>
                                            <input name="deparure" type="date" class="form-control date" id="deparure" placeholder="Select a date" required="" onchange={(e) => setDepDate(e.target.value)} />
                                        </fieldset>
                                    </div>
                                    <div class="col-md-6">
                                        <fieldset>
                                            <label for="return">Return date: </label>
                                            <input name="return" type="date" class="form-control date" id="return" placeholder="Select a date" required="" onchange={(e) => setArrDate(e.target.value)} />
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


