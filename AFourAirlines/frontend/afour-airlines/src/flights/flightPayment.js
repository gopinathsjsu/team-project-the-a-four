import React, { Component } from 'react'
import NavBar from "../common/navbar";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { useHistory } from 'react-router';

export default class FlightPayment extends Component {

    state = {
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    };

    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div align="center">
                <NavBar></NavBar>
                <br></br>
                <div id="PaymentForm">
                    <Cards
                        cvc={this.state.cvc}
                        expiry={this.state.expiry}
                        focused={this.state.focus}
                        name={this.state.name}
                        number={this.state.number}
                    />
                    <br></br>
                    <form align="center">
                        <input
                            align="center"
                            type="tel"
                            name="number"
                            placeholder="Card Number"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                        <br></br>
                        <input
                            align="center"
                            type="name"
                            name="name"
                            placeholder="Your Name"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                        <br></br>
                        <input
                            align="center"
                            type="expiry"
                            name="expiry"
                            placeholder="Expiry Date"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                        <br></br>
                        <input
                            align="center"
                            type="cvc"
                            name="cvc"
                            placeholder="CVC Code"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                        <br></br>
                        <input align="center" type='submit' value='Complete payment'></input>
                    </form>
                </div>
            </div>
        );
    }
}

