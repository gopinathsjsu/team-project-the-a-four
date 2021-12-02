import { Form } from 'react-bootstrap';
import { useState } from 'react';

export default function ReservationDetails(props){

    
    let [selectedValue, setSelectedVale] = useState(0);
    return(
        <div className="pass-form-popup-content">
            <h4>Passenger {props.index+1}</h4>
            <Form className="form pass-form">
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
    );
}