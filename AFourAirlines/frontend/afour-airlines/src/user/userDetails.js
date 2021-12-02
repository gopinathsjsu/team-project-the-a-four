import { Form, Button } from 'react-bootstrap';

export default function UserDetails(props){

    const handleUpdate = () => {

    }


    return(
        <div className="popup-content">
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
            </Form>
        </div>
    );
}