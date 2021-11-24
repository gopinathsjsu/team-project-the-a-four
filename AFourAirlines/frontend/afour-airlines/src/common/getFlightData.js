import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const useGetFlightData = (props) => {
    const [flightData, setFlightData] = useState({});
    const { flightID } = useParams();
}