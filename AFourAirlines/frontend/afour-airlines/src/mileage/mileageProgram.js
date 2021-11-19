import React from "react";
import { useParams } from "react-router";
import NavBar from "../common/navbar";
import UserMileage from "../user/userMileage";
import GuestMileage from "./guestMileage.js";
import { useGetUserData } from "../common/getUserData";

export default function MileageProgram (props){
    
    const { userName } = useParams;
    const { userData } = useGetUserData(userName);

    return(
        <div>
            <NavBar props={userName}></NavBar>
            {!userName && 
                <GuestMileage></GuestMileage>}
            {userName &&
                <UserMileage props={userName}></UserMileage>
            }
        </div>
        );
}
