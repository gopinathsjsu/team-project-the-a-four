import React, { useState } from 'react'
import AdminOptions from "./adminOptions";
import NavBar from "../common/navbar";

export default function AdminHome(){
    let username = localStorage.getItem("userName");

    let [isShowSearch, setIsShowSearch] = useState(false);
    let [divId, setDivId] = useState("");

    const handleSearch = () => {
        setIsShowSearch(!isShowSearch);
        //setDivId
    }

    return(
        <div>
            <NavBar props={username}></NavBar>
            <AdminOptions/>

        </div>
        
    );
}