import { Form } from 'react-bootstrap';

export default function ReservationDetails(props){
    return(
        <div className="popup-content">
            <Form className="form">
                <Form.Group>
                    <Form.Label>First Name: </Form.Label>
                    <Form.Control type="text" defaultValue={props.userData.firstName}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name: </Form.Label>
                    <Form.Control type="text" defaultValue={props.userData.lastName}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Passport Number: </Form.Label>
                    <Form.Control type="text" defaultValue={props.userData.identificationNumber}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" defaultValue={props.userData.email}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Contact Number</Form.Label>
                <Form.Control type="text" defaultValue={props.userData.phone}/>
                </Form.Group>
            </Form>
        </div>
    );
}