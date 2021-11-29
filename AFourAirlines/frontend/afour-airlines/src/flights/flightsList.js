import React, { useState } from 'react'
import NavBar from "../common/navbar";
import LoginModal from '../login/loginPopup';
import {Button} from 'react-bootstrap';

export default function FlightsList(props) {
    
    let flightId = localStorage.getItem("flightId");

    let token = localStorage.getItem("token");

    const selectFlight = function (e) {
        console.log("flightID " + e.target.value);
        localStorage.setItem("flightId",e.target.value);

        var authToken = "Bearer " + localStorage.getItem("token");

        fetch("http://localhost:8080/api/flights/get-available-seats?flightId=123", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authToken
            },
            mode: 'cors'
            })
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            localStorage.setItem("availableSeats", JSON.stringify(data))
            window.location.assign("/flights/reservation/");
        })
        .catch(error => {
            //this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
    }


    // const renderTooltip = props => (
    //     <Tooltip {...props}>Tooltip for the register button</Tooltip>
    //   );

    let flightList = JSON.parse(localStorage.getItem("flightList"));
    const getFlightsMarkup = function () {
            //<OverlayTrigger placement="top" overlay={renderTooltip}></OverlayTrigger>
        let rows = [];
        for (var i = 0; i < flightList.length; i++) {
            let cell = []
            cell.push(<td>{flightList[i].id}</td>);
            cell.push(<td>{flightList[i].sourceAirport}</td>);
            cell.push(<td>{flightList[i].destinationAirport}</td>);
            cell.push(<td>{flightList[i].departureTime}</td>);
            cell.push(<td>{flightList[i].arrivalTime}</td>);
            cell.push(<td>{<Button value={flightList[i].id} variant="primary" className={token === null ? 'pure-u-1-6 btn-spacing not-allowed' : 'pure-u-1-6 btn-spacing'} 
                                    onClick={e => selectFlight(e)} disabled={token === null} tool-tip="">
                                    Select
                                </Button>
                            }</td>);
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
//}

//export default FlightsList;