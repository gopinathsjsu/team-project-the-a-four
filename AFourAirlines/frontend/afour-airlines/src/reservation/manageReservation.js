import { Form, Button } from 'react-bootstrap';

export default function ManageReservation(props){

    // function renderPassengerList(){
    //     var rows = []
    //     for(var i = 0; i < props.reservationList.length; i++){
    //         var cell = [];
    //         cell.push(<td>{flightList[i].id}</td>);
    //         cell.push(<td>{flightList[i].sourceAirport}</td>);
    //         cell.push(<td>{flightList[i].destinationAirport}</td>);
    //         cell.push(<td>{flightList[i].departureTime}</td>);
    //         cell.push(<td>{flightList[i].arrivalTime}</td>);
    //         cell.push(<td>{<Button value={flightList[i].id} variant="primary" className={token === null ? 'pure-u-1-6 btn-spacing not-allowed' : 'pure-u-1-6 btn-spacing'} 
    //                                 onClick={e => selectFlight(e.target.value)} disabled={token === null} tool-tip="">
    //                                 Select
    //                             </Button>
    //                         }</td>);
    //         rows.push(<tr>{cell}</tr>)
    //     }
    // }

    // const handleUpdate = () => {

    // }


    return(
        <div className="popup-content">
            
            <div className="pass-form-popup-content">
            <h4>Passenger details</h4>
            <div>

            </div>
            {/* <Form className="form pass-form">
                <Form.Group>
                    <Form.Label>First Name: </Form.Label>
                    <Form.Control type="text" defaultValue="" onBlur={(e) => {
              props.setPassList((old) => {
                old[props.index] = { ...old[props.index], firstName: e.target.value };
                old[props.index] = { ...old[props.index], passNumber: props.index + 1 };
                console.log(props.passList);
                return old;
              });
            }}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name: </Form.Label>
                    <Form.Control type="text" defaultValue="" onBlur={(e) => {
              props.setPassList((old) => {
                old[props.index] = { ...old[props.index], lastName: e.target.value };
                return old;
              });
            }}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Passport Number: </Form.Label>
                    <Form.Control type="text" defaultValue="" onBlur={(e) => {
              props.setPassList((old) => {
                old[props.index] = { ...old[props.index], identificationNumber: e.target.value };
                return old;
              });
            }}/>
                </Form.Group>
                <Form.Group>
                <Form.Label>Date of Birth: </Form.Label>
                    <Form.Control type="date" defaultValue="" onChange={(e) => {
              props.setPassList((old) => {
                old[props.index] = { ...old[props.index], dateOfBirth: e.target.value };
                return old;
              });
            }}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Seat: </Form.Label>
                    <Form.Select aria-label="Default select example" value={selectedValue} onChange={(e) => {
                        setSelectedVale(e.target.value);
                        console.log(e.target.value)
                props.setPassList((old) => {
                    old[props.index] = { ...old[props.index], seat: e.target.value };
                    return old;
                  });
                }}>
                        {props.renderSeatList}
                    </Form.Select>
                </Form.Group>
            </Form>
        </div>
            </div>>
            <Form className="form">
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" defaultValue={props.userData.username}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" defaultValue={props.userData.firstName + " " + props.userData.lastName}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" defaultValue={props.userData.email}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Contact Number</Form.Label>
                <Form.Control type="text" defaultValue={props.userData.phone}/>
                </Form.Group>
                <Form.Group style={{display: 'grid'}}>
                    <div className="btn-group">
                        <Button variant="primary" className="pure-u-1-6 btn-spacing" onClick={handleUpdate}>
                            Update Details
                        </Button>
                    </div>
                </Form.Group>
            </Form> */}
            </div>
        </div>
    );
}