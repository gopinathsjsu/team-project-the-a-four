import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//mport FlightData from '../models/flightData';

export const useGetFlightData = (props) => {


    const defaultFlight = {
        flightID: "1",
        flight_number: "UA1234",
        trip_type: "Round Trip",
        departure_airport: "ORD",
        arrival_airport: "LAX",
        departure_date: "10:00 AM",
        arrival_date: "5:00 PM",
    };

    const [flightData, setFlightData] = useState(defaultFlight);
    let flightID = props;

    axios.defaults.withCredentials = true;

    useEffect(() => {
        console.log("flightID" + flightID);
        if(!flightID){
            setFlightData({});
        }
        else{
            setFlightData(defaultFlight);
        }
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