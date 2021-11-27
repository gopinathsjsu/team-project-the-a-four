import React, { useState } from 'react'
import AdminOptions from "./adminOptions";
import NavBar from "../common/navbar";
import AdminSearch from './adminSearch';
import UserDetails from '../user/userDetails';
import { useGetUserData } from "../common/getUserData";

export default function AdminHome(){
    let username = localStorage.getItem("userName");

    let [isShowOptions, setIsShowOption] = useState(true);
    let [isShowSearch, setIsShowSearch] = useState(false);
    let [manageType, setManageType] = useState("");
    let [lableText, setLableText] = useState("");
    let [entityId, setEntityId] = useState("");

    let [isUser, setIsUser] = useState(false);
    let [isFlight, setIsFlight] = useState(false);
    let [isReservation, setIsReservation] = useState(false);

    let token = localStorage.getItem("token");
    let { userData } = useGetUserData(username);
    let displayData = localStorage.getItem("displayData");

    const getUserById = () =>{
        if(username){
            var authToken = "Bearer " + token;
            fetch("http://localhost:8080/api/users/get-user-details", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': authToken
                },
                mode: 'cors'
            })
            .then(async innerResponse => {
            const resData = await innerResponse.json();

            if(!innerResponse.ok){
                // get error message from body or default to response statusText
                const error = (resData && resData.message) || innerResponse.statusText;
                return Promise.reject(error);
            }
            
            localStorage.setItem("userData", JSON.stringify(resData));
            console.log(resData.role);
            window.location.assign("/admin/home");

            })
            .catch(error => {
            //this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
        }
    }

    const handleSearch = () => {
        setIsShowSearch(false);

        switch(manageType){
            case "Users": 
                console.log("user selected: " + entityId);
                setIsUser(true);
                getUserById();
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
            {isShowOptions && <AdminOptions setIsShowOption={setIsShowOption} setIsShowSearch={setIsShowSearch} setManageType={setManageType} setLableText={setLableText}/>}
            {isShowSearch && <AdminSearch handleSearch={handleSearch} lableText={lableText} manageType={manageType} setEntityId={setEntityId}/>}
            {isUser && <UserDetails userData={displayData}/>}
        </div>
        
    );
}