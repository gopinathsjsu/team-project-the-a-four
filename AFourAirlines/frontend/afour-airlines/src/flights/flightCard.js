import React from "react"

export default function FlightCard(props){
    console.log("flight card: " + props.flightId);
    return(
        <div>
            {props.flightId}
        </div>
    )
}