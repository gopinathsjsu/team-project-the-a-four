import React, { Component } from 'react'
import NavBar from "../common/navbar";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: props.usename,
            auth_id: props.auth_id,
            membership: props.membership
        }
    }

        render() {
            return(
                <div>
                    <NavBar></NavBar>
                
                <div class="col-md-5 col-md-offset-1">
                    <section id="first-tab-group" class="tabgroup">
                        <div id="tab1">
                            <div class="submit-form">
                                <h4>Search flights for <em>travel</em>:</h4>
                                <form id="form-submit" action="" method="get">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <fieldset>
                                                <label for="from">From:</label>
                                                <select required name='from' onchange='this.form.()'>
                                                    <option value="">Select departure location</option>
                                                    <option value="Los Angeles">LAX</option>
                                                    <option value="San Francisco">SFO</option>
                                                    <option value="San Jose">SJC</option>
                                                    <option value="Sacramento">SMF</option>
                                                    <option value="San Diego">SAN</option>
                                                    <option value="Santa Barbara">SBA</option>
                                                    <option value="Fullerton">FUL</option>
                                                    <option value="Riverside">RIV</option>
                                                    <option value="San Bernardino">SBD</option>
                                                </select>
                                            </fieldset>
                                        </div>
                                        <div class="col-md-6">
                                            <fieldset>
                                                <label for="to">To:</label>
                                                <select required name='to' onchange='this.form.()'>
                                                    <option value="Los Angeles">LAX</option>
                                                    <option value="San Francisco">SFO</option>
                                                    <option value="San Jose">SJC</option>
                                                    <option value="Sacramento">SMF</option>
                                                    <option value="San Diego">SAN</option>
                                                    <option value="Santa Barbara">SBA</option>
                                                    <option value="Fullerton">FUL</option>
                                                    <option value="Riverside">RIV</option>
                                                    <option value="San Bernardino">SBD</option>
                                                </select>
                                            </fieldset>
                                        </div>
                                        <div class="col-md-6">
                                            <fieldset>
                                                <label for="departure">Departure date:</label>
                                                <input name="deparure" type="text" class="form-control date" id="deparure" placeholder="Select a date" required="" onchange='this.form.()' />
                                            </fieldset>
                                        </div>
                                        <div class="col-md-6">
                                            <fieldset>
                                                <label for="return">Return date:</label>
                                                <input name="return" type="text" class="form-control date" id="return" placeholder="Select a date" required="" onchange='this.form.()' />
                                            </fieldset>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="radio-select">
                                                <div class="row">
                                                    <div class="col-md-6 col-sm-6 col-xs-6">
                                                        <label for="round">Round trip</label>
                                                        <input type="radio" name="trip" id="round" value="round" required="required"onchange='this.form.()' />
                                                    </div>
                                                    <div class="col-md-6 col-sm-6 col-xs-6">
                                                        <label for="oneway">One-way trip</label>
                                                        <input type="radio" name="trip" id="oneway" value="one-way" required="required"onchange='this.form.()' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <fieldset>
                                                <button type="submit" id="form-submit" class="btn">Search</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
                </div>
            )
        }
    }

export default Search;