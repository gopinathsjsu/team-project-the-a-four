
import React, { useState } from "react";
import NavBar from "../common/navbar";
import LoginModal from "../login/loginPopup";
import TravelAdisory from "./travelAdvisory";
import BaggagePolicy from "./baggaegPolicy";
import ElectronicPolicy from "./electronicPolicy";
import FlightStatus from "./flightStatus";
import ContactContainer from "./contactContainer";

export default function HelpPage(){
    const [isShowLogin, setIsShowLogin] = useState(false);

    const handleLoginClicked = () => {
        setIsShowLogin(!isShowLogin);
    }

    const pathname = window.location.pathname
    
    return(
        <div>
            <NavBar handleLoginClick={handleLoginClicked}></NavBar>
            {isShowLogin && <LoginModal isShowLogin={isShowLogin} setIsShowLogin={setIsShowLogin} pathname={pathname}/>}        
            <div className="help-page">
                <br/>
                <TravelAdisory />
                <div>
                    <FlightStatus/>
                    <BaggagePolicy/>
                    <ElectronicPolicy/>
                    <ContactContainer/>
                </div>
            </div>
        </div>
        
    )
}