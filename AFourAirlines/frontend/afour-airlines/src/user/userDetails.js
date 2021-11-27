import { Form, Button } from 'react-bootstrap';

export default function UserDetails(props){
    return(
        <div className="popup-content">
            <Form className="form">
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" defaultValue={props.userData.username}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" defaultValue={props.userData.first_name + " " + props.userData.last_name}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" defaultValue={props.userData.email_id}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Contact Number</Form.Label>
                <Form.Control type="text" defaultValue={props.userData.contact_number}/>
                </Form.Group>
                <Form.Group>
                    <Button variant="primary">Update Details</Button>
                </Form.Group>
            </Form>
        </div>
    );
}