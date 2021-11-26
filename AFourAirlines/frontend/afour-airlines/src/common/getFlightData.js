import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FlightData from '../models/flightData';

export const useGetFlightData = (props) => {


    // const defaultFlight = {
    //     this.state.flightData.map(flight => {
    //     flightID: flight.id,
    // };

    const [flightData, setFlightData] = useState(defaultFlight);
    const { flightID } = useParams();

    axios.defaults.withCredentials = true;

    useEffect(() => {
        console.log(flightID);
        // axios.get("http://localhost:3001/flght/get" + flightID).then((response) => {
        //     if (response.data.********loggedIn************** === true) {
        //       setFlightData(response.data.flight);
        //     } else {
        //       setFlightData({});
        //     }
        // });
    }, []);

    return { flightData };
};