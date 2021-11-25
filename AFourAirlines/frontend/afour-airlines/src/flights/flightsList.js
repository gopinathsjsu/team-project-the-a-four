import React, { Component } from 'react'
import NavBar from "../common/navbar";
import FlightData from '../models/flightData';

class FlightsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.usename,
            auth_id: props.auth_id,
            membership: props.membership,
            flightData: FlightData
            //get flight data function. Define it in either common or here. For now I can have it fetch from the model folder
            //add props for all the user inputs
            //use useParams based on the mileageProgram. This will allow you to get parameters from the URL
        }
    }

    render() {
        return (
            <div>
                <NavBar></NavBar>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <h1 className="text-left">Flights List</h1>
                            <div className="table-responsive border p-4 bg-light rounded">
                                <p className="text-left font-weight-bold">Flight Search Result</p>
                                <table className="table table-hover">
                                    <thead className="table-borderless table-secondary">
                                        <tr>
                                            <th scope="col">No.</th>
                                            <th scope="col">Airline</th>
                                            <th scope="col">Flight Number</th>
                                            <th scope="col">Trip Type</th>
                                            <th scope="col">Departure Airport</th>
                                            <th scope="col">Arrival Airport</th>
                                            <th scope="col">Departure Time</th>
                                            <th scope="col">Arrival Time</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.flightData.map(flight => {
                                            return (
                                                <th key={flight.id}>
                                                    <td scope="row">{flight.id}</td>
                                                    <td>{flight.airline}</td>
                                                    <td>{flight.flight_number}</td>
                                                    <td>{flight.trip_type}</td>
                                                    <td>{flight.departure_airport}</td>
                                                    <td>{flight.arrival_airport}</td>
                                                    <td>{flight.departure_time}</td>
                                                    <td>{flight.arrival_time}</td>
                                                    {/* add price information as well which can help the customer decide*/}
                                                    <td>
                                                        <a type="button"
                                                            className="btn btn-success btn-just-icon btn-sm"
                                                            href={"/select/" + flight.id}>Select</a>
                                                    </td>
                                                </th>
                                            );
                                        })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FlightsList;