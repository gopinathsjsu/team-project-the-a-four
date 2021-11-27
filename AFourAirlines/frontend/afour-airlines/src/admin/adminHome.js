import React, { useState } from 'react'
import AdminOptions from "./adminOptions";
import NavBar from "../common/navbar";
import AdminSearch from './adminSearch';

export default function AdminHome(){
    let username = localStorage.getItem("userName");

    let [isShowSearch, setIsShowSearch] = useState(false);
    let [manageType, setManageType] = useState("");
    let [lableText, setLableText] = useState("");
    let [entityId, setEntityId] = useState("");

    let [isUser, setIsUser] = useState(false);
    let [isFlight, setIsFlight] = useState(false);
    let [isReservation, setIsReservation] = useState(false);

    const handleSearch = () => {
        setIsShowSearch(false);

        switch(manageType){
            case "Users": 
                console.log("user selected: " + entityId);
                setIsUser(true);
                break;

            case "Flights":
                console.log("flight selected: " + entityId)
                setIsFlight(true);
                break;

            case "Reservations":
                console.log("reservation selected: " + entityId)
                setIsReservation(true);
                break;

            default:
                break;
        }
        setManageType("");
    }

    return(
        <div>
            <NavBar props={username}></NavBar>
            {!isShowSearch && <AdminOptions setIsShowSearch={setIsShowSearch} setManageType={setManageType} setLableText={setLableText}/>}
            {isShowSearch && <AdminSearch handleSearch={handleSearch} lableText={lableText} manageType={manageType} setEntityId={setEntityId}/>}
            
        </div>
        
    );
}