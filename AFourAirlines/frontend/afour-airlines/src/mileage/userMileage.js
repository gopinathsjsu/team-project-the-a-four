import React from "react";
import { useGetMileageData } from "../common/getUserData";
import { useParams } from "react-router-dom";
import icon from "../images/icon.png";

export default function UserMileage (props){
    let userName = localStorage.getItem("userName");

    let { userData } = useGetMileageData(userName);
    
    return (
        <div>
                <h1 style={{ textAlign: "center" }}>Mileage Details</h1>
                <h2>Hello, { userData.first_name } !</h2>
                <div>
                    <div className="miles-banner">
                        <div id="div-reward-icon" className="miles-banner-components">
                            <div>
                                <img src={icon} alt="Reward icon" className="reward-icon"></img>
                            </div>
                        </div>
                        <div id="div-reward-number" className="miles-banner-components">
                            <div className="reward-title">
                                Reward number
                            </div>
                            <div className="reward-number">
                                { userData.reward_number }
                            </div>
                        </div>
                        <div id="div-miles" className="miles-banner-components">
                        <div className="reward-title">
                                Miles earned
                            </div>
                            <div>
                                { userData.mileage_points }
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}