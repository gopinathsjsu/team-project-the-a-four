import React from "react";
import { useGetMileageData } from "../common/getUserData";
import icon from "../images/icon.png";

export default function UserMileage (props){
    let userName = localStorage.getItem("userName");

    let { userData } = useGetMileageData(userName);
    
    return (
        <div>
            <h1 className="page-hearder">Mileage Details</h1>
            <div >
                <h2 className="page-hearder">Hello, { userData.first_name } !</h2>
                <div className="container-fluid justify-content-center card-row">
                <div className="row">
                    <div className="miles-banner">
                        <div id="div-reward-icon" className="miles-banner-components col-md-2">
                            <div>
                                <img src={icon} alt="Reward icon" className="reward-icon"></img>
                            </div>
                        </div>
                        <div id="div-reward-number" className="miles-banner-components col-md-3">
                            <div className="reward-title">
                                Reward number
                            </div>
                            <div className="reward-number">
                                { userData.reward_number }
                            </div>
                        </div>
                        <div id="div-trip-count" className="miles-banner-components col-md-3">
                            <div className="reward-title">
                                Number of trips
                            </div>
                            <div className="reward-number">
                                { userData.number_of_trips }
                            </div>
                        </div>
                        <div id="div-miles" className="miles-banner-components col-md-3">
                        <div className="reward-title">
                                Miles earned
                            </div>
                            <div className="reward-number">
                                { userData.mileage_points }
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}