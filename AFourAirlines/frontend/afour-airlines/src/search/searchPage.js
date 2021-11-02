import React, { Component } from 'react'
import NavBar from "../common/navbar";

class SearchPage extends Component {
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

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <h1 className="text-left">Flight Schedule</h1>
                            <div className="table-responsive border p-4 bg-light rounded">
                                <p className="text-left font-weight-bold">Active Flight Schedule</p>
                                <table className="table table-hover">
                                    <thead className="table-borderless table-secondary">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                            <th scope="col">Handle</th>
                                            <th scope="col">Handle</th>
                                            <th scope="col">Handle</th>
                                            <th scope="col">Handle</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td scope="row">1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default SearchPage;