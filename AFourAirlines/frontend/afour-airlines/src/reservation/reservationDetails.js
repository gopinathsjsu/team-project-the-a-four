import { Form } from 'react-bootstrap';

export default function ReservationDetails(props){
    return(
        <div className="pass-form-popup-content">
            <h4 >Passenger {props.index}</h4>
            <Form className="form pass-form">
                <Form.Group>
                    <Form.Label>First Name: </Form.Label>
                    <Form.Control type="text" defaultValue=""/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name: </Form.Label>
                    <Form.Control type="text" defaultValue=""/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Passport Number: </Form.Label>
                    <Form.Control type="text" defaultValue=""/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Passport Number: </Form.Label>
                    <Form.Control type="text" defaultValue=""/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Seat: </Form.Label>
                    {/* TODO: get seat and make dropdown dynamic */}
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
            </Form>
        </div>
    );
}