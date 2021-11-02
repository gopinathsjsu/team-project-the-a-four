import React, { Component, useState } from "react";
import NavBar from "../common/navbar";
import Registration from "../login/register.js"

class  MileageProgram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.usename,
            auth_id: props.auth_id,
            membership: props.membership
        }
    }

    render(){
        return(
            <div>
                <NavBar></NavBar>
                <div>
                    <h1 style={{ textAlign: "center" }}>Mileage Program</h1>
                </div>
                <Registration></Registration>
            </div>
        );
    }
}

export default MileageProgram;