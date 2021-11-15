import React, { Component } from "react";
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
                    <h2>More places. More miles.
                        More adventures.</h2>
                    <p>MileageProgram is your ticket to the world, with the most ways to earn and use miles and the most award destinations of any U.S. airline loyalty program. 
                        Now all you need is more vacation days.</p>
                    <h2>Join our MileageProgram by filling just a few details!</h2>
                </div>
                <Registration></Registration>
            </div>
        );
    }
}

export default MileageProgram;