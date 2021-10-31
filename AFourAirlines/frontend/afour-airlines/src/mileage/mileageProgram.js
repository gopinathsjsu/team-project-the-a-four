import React, { Component, useState } from "react";
import NavBar from "../common/navbar";

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
                <div>This is body</div>
            </div>
        );
    }
}

export default MileageProgram;