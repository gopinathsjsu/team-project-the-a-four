import React from 'react';
import Card from "../common/cardComponent";
import userImg from "../images/user-profile-img.jpg";
import flightImg from "../images/flight-img.jpg";
import rsrvImg from "../images/schedule-edit-img.jpg";

function AdminOptions() {
     const optionOnClick = (e) =>{
        console.log(e.target.cardTitle + " clicked");
     }

     const flightsOnClick = (e) =>{
        console.log("flights clicked");
    }

    const reservationsOnClick = (e) =>{
        console.log("reservations clicked");
    }
        return ( 
            <div>
                <h1 className="page-hearder">Manage</h1>
                <div className="container-fluid d-flex justify-content-center card-row">
                    <div className="row">
                        <div className="col-md-4 card-tile">
                            <Card cardTitle="Users" cardImg={userImg} cardAltText="User Icon" handleOnClick={(e) => {optionOnClick(e)}}/>
                        </div>
                        <div className="col-md-4">
                            <Card cardTitle="Flights" cardImg={flightImg} cardAltText="Flight Icon" handleOnClick={optionOnClick}/>
                        </div>
                        <div className="col-md-4">
                            <Card cardTitle="Reservations" cardImg={rsrvImg} cardAltText="Reservation Icon" handleOnClick={optionOnClick}/>
                        </div>
                    </div>
                </div>
            </div>
         );
}
 
export default AdminOptions;