import FlightCard from "../flights/flightCard";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import NavBar from "../common/navbar";
import LoginModal from '../login/loginPopup';

export default function ManageReservation(props){

    const { pnr } = useParams();
    console.log("pnr: " + pnr);

    let reservationList = [];
    let noOfPass = 2;
    //TODO: get reservation info, set no of pas

    reservationList = [
    
        {
            "number": 30,
            "username": "esha12345",
            "flight": {
                "id": 1,
                "name": "QR701",
                "sourceAirport": "SFO",
                "destinationAirport": "HYD",
                "sourceTerminal": "12",
                "destinationTerminal": "11",
                "sourceGate": "1",
                "destinationGate": "1",
                "departureDate": "2021-12-19",
                "arrivalDate": "2021-12-21",
                "departureTime": "09:00:00",
                "arrivalTime": "05:00:00",
                "equipment": 777,
                "basePrice": 900
            },
            "seat": {
                "id": 35,
                "number": "A35",
                "airplane": 777,
                "flightId": 123,
                "reserved": true,
                "price": 120
            },
            "price": 900,
            "status": "scheduled",
            "identificationNumber": "IK1234",
            "firstName": "Esha",
            "lastName": "sah",
            "dateOfBirth": "1995-02-02"
        },
        {
            "number": 31,
            "username": "esha12345",
            "flight": {
                "id": 1,
                "name": "QR701",
                "sourceAirport": "SFO",
                "destinationAirport": "HYD",
                "sourceTerminal": "12",
                "destinationTerminal": "11",
                "sourceGate": "1",
                "destinationGate": "1",
                "departureDate": "2021-12-19",
                "arrivalDate": "2021-12-21",
                "departureTime": "09:00:00",
                "arrivalTime": "05:00:00",
                "equipment": 777,
                "basePrice": 900
            },
            "seat": {
                "id": 36,
                "number": "A36",
                "airplane": 777,
                "flightId": 123,
                "reserved": true,
                "price": 160
            },
            "price": 900,
            "status": "scheduled",
            "identificationNumber": "IND123",
            "firstName": "tuba",
            "lastName": "ahmed",
            "dateOfBirth": "1995-06-02"
        }
    ];

    console.log(reservationList);
    
    let flightData = {
        sourceAirport: reservationList[0].flight.sourceAirport,
        destinationAirport: reservationList[0].flight.destinationAirport,
        departureDate: reservationList[0].flight.departureDate,
        departureTime: reservationList[0].flight.departureTime,
        arrivalDate: reservationList[0].flight.arrivalDate
    }

    console.log(flightData);

    let [isResched, setIsResched] = useState(false);
    let [isSeatSelect, setSeatSelect] = useState(false);

    let [flightList, setFlightList] = useState([]);
    let [altFlight, setAltFlight] = useState({});
    //JSON.parse(localStorage.getItem("flightList"))

    let flightId = "";

    let [availableSeats, setAvailableSetas] = useState([]);
    
    const handleSeatChange = function (e) {
        console.log("seat selected for: index = "+ e.target.dataset.key + " seatid = " + e.target.value);
        let index = e.target.dataset.key;
        let seatId = e.target.value;
        reservationList[index].seat.id = seatId;
        console.log(reservationList[index]);
    }
    
    const getSeatSelect = function () {
        
        var rows = [];
        var seatList = [];
        if(availableSeats !== null){
            seatList.push(<option key="0" value="0">Select seat</option>);
            for(var j = 0; j < availableSeats.length; j++){
                seatList.push(<option key={availableSeats[j].id} value={availableSeats[j].id}>{availableSeats[j].number}</option>);
            }
        }
        else{
            seatList.push(<tr><td>No seats available on this flight</td></tr>)
        }
        
        if(reservationList !== null){
            for(var i = 0; i < reservationList.length; i++){
                let cell = [];
                cell.push(<div>{reservationList[i].firstName} {reservationList[i].lastName}</div>)
                cell.push(<div>
                            <select data-key={i} value={reservationList[i].seat.id} required name='from' onChange={e=>handleSeatChange(e)}>
                                {seatList}
                            </select>
                        </div>)
                rows.push(<div key={reservationList[i].identificationNumber} data-key={reservationList[i].identificationNumber}>{cell}</div>);
            }
        }
        return rows;
    }

    const selectFlight = function (id) {
        console.log("flight selected " + id);
        flightId = localStorage.setItem("flightId",id);
        

        debugger;
        // console.log("flight list: ")
        // console.log(flightList);
        for (var i=0; i < flightList.length; i++) {
            if (flightList[i].id === parseInt(id)) {
                setAltFlight(flightList[i]);
                break;
            }
        }
        
        var authToken = "Bearer " + localStorage.getItem("token");
        
        fetch("http://localhost:8080/api/flights/get-available-seats?flightId=" + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': authToken
            },
            mode: 'cors'
            })
        .then(async response => {
            const data = await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }

            setAvailableSetas(data);
            
                setSeatSelect(true);
            
            
        })
        .catch(error => {
            //this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
    }

    const getFlightsMarkup = function () {
        let rows = [];
        for (var i = 0; i < flightList.length; i++) {
            //TODO : enable this condition on dynamic
            //if(flightList[i].id !== flightId){
                let cell = []
                cell.push(<td>{flightList[i].id}</td>);
                cell.push(<td>{flightList[i].sourceAirport}</td>);
                cell.push(<td>{flightList[i].destinationAirport}</td>);
                cell.push(<td>{flightList[i].departureDate}</td>);
                cell.push(<td>{flightList[i].departureTime}</td>);
                cell.push(<td>{<Button value={flightList[i].id} variant="primary" className='pure-u-1-6 btn-spacing'
                                        onClick={e => selectFlight(e.target.value)}>
                                        Select
                                    </Button>
                                }</td>);
                rows.push(<tr>{cell}</tr>)
            //}
        }
        return rows;
    }

    const handleReschedule = () => {
        console.log("Reschedule");
        setIsResched(true);

        fetch("http://localhost:8080/api/flights/get-flights?sourceAirport=" 
                        + flightData.sourceAirport + "&destinationAirport=" + flightData.destinationAirport + "&departureDateString=" 
                            + flightData.departureDate + "&arrivalDateString=" + flightData.arrivalDate, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    mode: 'cors'
                })
                    .then(async innerResponse => {
                        const resData = await innerResponse.json(); 

                        if (!innerResponse.ok) {
                            // get error message from body or default to response statusText
                            const error = (resData && resData.message) || innerResponse.statusText;
                            return Promise.reject(error);
                        }

                        setFlightList(resData);
                    })
                    .catch(error => {
                        //this.setState({ errorMessage: error.toString() });
                        console.error('There was an error!', error);
                    });
    }

    const handleCancel = () => {
        console.log("cancel");

        var authToken = "Bearer " + localStorage.getItem('token');

            fetch("http://localhost:8080/api/reservations/create-reservation",{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': authToken
                    },
                    mode: 'cors'
                })
            .then(async response => {
                window.location.assign("/");
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    const handleUpdate = () =>{
        console.log("update reservation")
    }

    let [isShowLogin, setIsShowLogin] = useState(false);

    const handleLoginClicked = () => {
        setIsShowLogin(!isShowLogin);
    }

    let pathname = window.location.pathname

    return(
        <div>
            <NavBar handleLoginClick={handleLoginClicked}></NavBar>
                {isShowLogin && <LoginModal isShowLogin={isShowLogin} setIsShowLogin={setIsShowLogin} pathname={pathname} />}
                
            <div className="help-page">
                <div>
                    <div className="baggage-policy-container">
                        <div>
                            <h2>Passenger detials:</h2>
                        </div>
                        <div>
                            <table className="pure-table pure-table-bordered">
                                <thead className="x-l-font">
                                    <tr>
                                        <td>Name</td>
                                        <td>Seat Number</td>
                                    </tr>
                                </thead>
                                <tbody className="l-font">
                                {reservationList.map(res =>
                                <tr key={res.identificationNumber} data-key={res.identificationNumber}>
                                <td>{res.firstName} {res.lastName}</td>
                                <td>{res.seat.number}</td>
                                </tr>
                            )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div>
                        <FlightCard flightData={flightData} cardLable="Flight details:"/>
                    </div>
                    {!isResched && <div>
                    <Form.Group>
                        <div className="btn-group">
                            <Button variant="primary" className="pure-u-1-6 btn-spacing" onClick={handleReschedule}>
                                Reschedule
                            </Button>
                            <Button variant="danger" className="pure-u-1-6 btn-spacing" onClick={handleCancel}>
                                Cancel Reservation
                            </Button>
                        </div>
                    </Form.Group>
                    </div>}
                    <div>
                        {isResched && 
                            <div>
                                <div  className="resched-header">
                                    <h2>Reschedule:</h2>
                                </div>
                                {!isSeatSelect && 
                                    <div>
                                        <div className="col-md-12 mb-5">
                                            <div>
                                                <h3>Alternate flights:</h3>
                                            </div>
                                            <div>
                                                <table className="table ">
                                                    <thead className="table-borderless table-secondary">
                                                        <tr>
                                                            <th scope="col">No.</th>
                                                            <th scope="col">Departure Airport</th>
                                                            <th scope="col">Arrival Airport</th>
                                                            <th scope="col">Departure Date</th>
                                                            <th scope="col">Departure Time</th>
                                                            <th scope="col">Actions</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="x-l-font">
                                                        {
                                                            getFlightsMarkup()
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>}
                                {isSeatSelect && 
                                    <div>
                                        <FlightCard flightData={altFlight} cardLable="Alternate flight details:"/>
                                        {/* <ReschedSeatSelect availableSeats={availableSeats} reservationList={reservationList}/> */}
                                        <div  className="x-l-font resched-pass-list">{isResched && getSeatSelect()}</div>
                                        <div>
                                            <Form.Group>
                                                <div className="btn-group">
                                                    <Button variant="primary" className="pure-u-1-6 btn-spacing" onClick={handleUpdate}>
                                                        Update
                                                    </Button>
                                                </div>
                                            </Form.Group>
                                        </div>
                                    </div>
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>  
        </div>
    );
}