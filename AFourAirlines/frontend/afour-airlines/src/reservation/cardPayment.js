import React, { Component } from 'react'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export default class CardPayment extends Component {

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
                <div id="PaymentForm">
                    <Cards
                        cvc={this.state.cvc}
                        expiry={this.state.expiry}
                        focused={this.state.focus}
                        name={this.state.name}
                        number={this.state.number}
                    />
                    <br></br>
                    <form align="center" className="card-form">
                        <div>
                        <input className="card-input"
                            align="center"
                            type="tel"
                            name="number"
                            placeholder="Card Number"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                        </div>
                        <div>
                        <input className="card-input"
                            align="center"
                            type="name"
                            name="name"
                            placeholder="Your Name"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                        </div>
                        <div>
                        <input className="card-input"
                            align="center"
                            type="expiry"
                            name="expiry"
                            placeholder="Expiry Date"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                        </div>
                        <div>
                        <input className="card-input"
                            align="center"
                            type="cvc"
                            name="cvc"
                            placeholder="CVC Code"
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                        />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

