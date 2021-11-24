
import React, { useState } from "react";
import NavBar from "../common/navbar";
import {  useParams } from "react-router-dom";
import LoginForm from "../login/loginPage";
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

    let { username } = useParams();
    const pathname = window.location.pathname
    
    return(
        <div>
            <NavBar props={username} handleLoginClick={handleLoginClicked}></NavBar>
                {isShowLogin && <LoginForm isShowLogin={isShowLogin} setIsShowLogin={setIsShowLogin} pathname={pathname}></LoginForm>}
        
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