import React from "react";

export default function FlightDetails (props) {
    
    let flightData = {};
    
    let flightId = localStorage.getItem("flightId");

        var flightList = JSON.parse(localStorage.getItem("flightList"));
        for(var i = 0; i < flightList.length; i++){
            if(flightList[i].id === flightId){
                flightData = flightList[i];
            }
        }
    
        return (
            <div>
                <div>
                    <h2>Flight detials:</h2>
                </div>
                <div >
                    <div className="form pass-form">
                        <div>
                            <div>
                                <label>{flightData.sourceAirport}</label>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>{flightData.destinationAirport}</label>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>{flightData.departureDate}</label>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>{flightData.arrivalDate}</label>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label>{flightData.noOfPass}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

