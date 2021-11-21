import React, { Component } from 'react'
import NavBar from "../common/navbar";
import { useHistory } from 'react-router';
import Registration from '../login/register';
import Login from '../login/login';

class UserType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.usename,
            auth_id: props.auth_id,
            membership: props.membership
        }
    }

render() {
    return (
        <div>
            <NavBar></NavBar>
            <Registration></Registration>
            <Login></Login>
        </div>
    )
}
}

export default UserType;