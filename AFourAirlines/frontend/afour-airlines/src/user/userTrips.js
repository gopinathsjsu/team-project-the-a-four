import React, { useState } from 'react'
import NavBar from "../common/navbar";
import LoginModal from '../login/loginPopup';
import { Button } from 'react-bootstrap';

export default function UserTrips(props) {

    let token = "Bearer " + localStorage.getItem('token');

    let [isShowLogin, setIsShowLogin] = useState(false);

    const handleLoginClicked = () => {
        setIsShowLogin(!isShowLogin);
    }

    const handleClick = (id) => {
        return function (){
            window.location.assign("/reservation/manage?id=" + id);
        }
        
    }

    let pathname = window.location.pathname

    let [errorMsg, setErrorMsg] = useState("");

    //tripsList = JSON.parse(localStorage.getItem("tripsList"));

    const getTripsMarkup = function () {
        fetchData();
        let tripsList = JSON.parse(localStorage.getItem("tripsList"));
        console.log("Trips" + tripsList);
        //<OverlayTrigger placement="top" overlay={renderTooltip}></OverlayTrigger>
        let rows = [];
        for (var i = 0; i < tripsList.length; i++) {
            let cell = []
            console.log(tripsList);
            if (tripsList[i].status === "scheduled") {
                cell.push(<td>{tripsList[i].flight.pnr}</td>);
                cell.push(<td>{tripsList[i].flight.sourceAirport}</td>);
                cell.push(<td>{tripsList[i].flight.destinationAirport}</td>);
                cell.push(<td>{tripsList[i].flight.departureDate}</td>);
                cell.push(<td>{tripsList[i].flight.arrivalDate}</td>);
                cell.push(<td>{tripsList[i].flight.departureTime}</td>);
                cell.push(<td>{tripsList[i].flight.arrivalTime}</td>);
                cell.push(<td>{<Button variant="primary" className={token === null ? 'pure-u-1-6 btn-spacing not-allowed' : 'pure-u-1-6 btn-spacing'}
                 onClick={handleClick(tripsList[i].pnr)} disabled={token === null} tool-tip="">
                    Manage
                </Button>
                }</td>);
            }
            else {
                cell.push(<td></td>);
                cell.push(<td></td>);
                cell.push(<td></td>);
                cell.push(<td></td>);
                cell.push(<td></td>);
                cell.push(<td></td>);
                cell.push(<td></td>);
                cell.push(<td></td>);
            }

            rows.push(<tr>{cell}</tr>)
        }
        return rows;
    }


    const getPTripsMarkup = function () {
        fetchData();
        let tripsList = JSON.parse(localStorage.getItem("tripsList"));
        console.log("Trips" + tripsList);
        //<OverlayTrigger placement="top" overlay={renderTooltip}></OverlayTrigger>
        let rows = [];
        for (var i = 0; i < tripsList.length; i++) {
            let cell = []
            console.log(tripsList);
            if (tripsList[i].status === "scheduled") {
                cell.push(<td></td>);
                cell.push(<td></td>);
                cell.push(<td></td>);
                cell.push(<td></td>);
                cell.push(<td></td>);
                cell.push(<td></td>);
                cell.push(<td></td>);
            }
            else {
                cell.push(<td>{tripsList[i].flight.pnr}</td>);
                cell.push(<td>{tripsList[i].flight.sourceAirport}</td>);
                cell.push(<td>{tripsList[i].flight.destinationAirport}</td>);
                cell.push(<td>{tripsList[i].flight.departureDate}</td>);
                cell.push(<td>{tripsList[i].flight.arrivalDate}</td>);
                cell.push(<td>{tripsList[i].flight.departureTime}</td>);
                cell.push(<td>{tripsList[i].flight.arrivalTime}</td>);
            }

            rows.push(<tr>{cell}</tr>)
        }
        return rows;
    }



    const fetchData = () => {
        let token = "Bearer " + localStorage.getItem('token');

        fetch("http://3.143.245.196:8080/api/reservations/get-reservations-for-user", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
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
                localStorage.setItem("tripsList", JSON.stringify(resData));
                console.log("BBBBB" + JSON.stringify(resData));


            })
            .catch(error => {
                //this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }

    return (
        <div>
            <NavBar handleLoginClick={handleLoginClicked}></NavBar>
            {isShowLogin && <LoginModal isShowLogin={isShowLogin} setIsShowLogin={setIsShowLogin} pathname={pathname} />}
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-5">
                        <h1 className="text-left">My Trips</h1>
                        <div className="table-responsive border p-4 rounded">
                            <h4>Upcoming Flights</h4>
                            {/* {token === null} */}
                            <table className="table ">
                                <thead className="table-borderless table-secondary">
                                    <tr>
                                    <th scope="col">PNR Number</th>
                                        <th scope="col">Departure Airport</th>
                                        <th scope="col">Arrival Airport</th>
                                        <th scope="col">Departure Date</th>
                                        <th scope="col">Arrival Date</th>
                                        <th scope="col">Departure Time</th>
                                        <th scope="col">Arrival Time</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getTripsMarkup()
                                    }
                                </tbody>
                            </table>
                        </div>

                        <div></div>
                        <div className="table-responsive border p-4 rounded">
                            <h4>Past Flights</h4>
                            {/* {token === null} */}
                            <table className="table ">
                                <thead className="table-borderless table-secondary">
                                    <tr>
                                    <th scope="col">PNR NUmber</th>
                                        <th scope="col">Departure Airport</th>
                                        <th scope="col">Arrival Airport</th>
                                        <th scope="col">Departure Date</th>
                                        <th scope="col">Arrival Date</th>
                                        <th scope="col">Departure Time</th>
                                        <th scope="col">Arrival Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getPTripsMarkup()
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