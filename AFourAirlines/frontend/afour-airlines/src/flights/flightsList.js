import React, { Component, useState } from 'react'
import NavBar from "../common/navbar";
//import FlightData from '../models/flightData';
import { useGetFlightData } from '../common/getFlightData'
import LoginModal from '../login/loginPopup';
import {Button} from 'react-bootstrap';

export default function FlightsList(props) {
    let flightID = "";

    let token = localStorage.getItem("token");

    const selectFlight = function (e) {
        console.log("flightID " + e);
    }

    const submitButton = function (i) {
        if (localStorage.getItem("token").length > 0) {
            return
            (
                // <a type="button"
                //     className="btn btn-success btn-just-icon btn-sm"
                //     href={"/select/" + flightList[i].id}>Select</a>

                <Button key={flightList[i].id} variant="primary" className="pure-u-1-6 btn-spacing" onClick={(e) => selectFlight(e.target.key)}>
                    Select
                </Button>
            );
        }
        else {
            return ("");
        }
    }

    let flightList = JSON.parse(localStorage.getItem("flightList"));
    const getFlightsMarkup = function () {
        let rows = [];
        for (var i = 0; i < flightList.length; i++) {
            let cell = []
            cell.push(<td>{flightList[i].id}</td>);
            cell.push(<td>{flightList[i].sourceAirport}</td>);
            cell.push(<td>{flightList[i].destinationAirport}</td>);
            cell.push(<td>{flightList[i].departureTime}</td>);
            cell.push(<td>{flightList[i].arrivalTime}</td>);
            cell.push(<td>{<Button key={flightList[i].id} variant="primary" className="pure-u-1-6 btn-spacing" onClick={(e) => selectFlight(e.target.key)} disabled={token === null}>
                                Select
                            </Button>}</td>);
            rows.push(<tr>{cell}</tr>)
        }
        return rows;
    }
    console.log(" printing flights");
    console.log(flightList);

    /**
     *                                         <tr>
                                                <td>{flightList[0].id}</td>
                                                <td>{flightList[0].sourceAirport}</td>
                                                <td>{flightList[0].destinationAirport}</td>
                                                <td>{flightList[0].departureTime}</td>
                                                <td>{flightList[0].arrivalTime}</td>
                                                <td>
                                                    <a type="button"
                                                        className="btn btn-success btn-just-icon btn-sm"
                                                        href={"/select/" + flightList[0].id}>Select</a>
                                                </td>
                                            </tr>
     */
    // class FlightsList extends Component {
    //     constructor(props) {
    //         super(props);
    //         this.state = {
    //             username: props.usename,
    //             auth_id: props.auth_id,
    //             membership: props.membership,
    //             flightData: FlightData
    //             //get flight data function. Define it in either common or here. For now I can have it fetch from the model folder
    //             //add props for all the user inputs
    //             //use useParams based on the mileageProgram. This will allow you to get parameters from the URL
    //         }
    //     }

    // render() {


    let [isShowLogin, setIsShowLogin] = useState(false);

    const handleLoginClicked = () => {
        setIsShowLogin(!isShowLogin);
    }

    let pathname = window.location.pathname

    return (
        <div>
            <NavBar handleLoginClick={handleLoginClicked}></NavBar>
            {isShowLogin && <LoginModal isShowLogin={isShowLogin} setIsShowLogin={setIsShowLogin} pathname={pathname} />}
            <div className="container">
                <h4 align="right">Login to reserve</h4>
                <div className="row">
                    <div className="col-md-12 mb-5">
                        <h1 className="text-left">Flights List</h1>
                        <div className="table-responsive border p-4 bg-light rounded">
                            <p className="text-left font-weight-bold">Flight Search Result</p>
                            <table className="table table-hover">
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
//}

//export default FlightsList;