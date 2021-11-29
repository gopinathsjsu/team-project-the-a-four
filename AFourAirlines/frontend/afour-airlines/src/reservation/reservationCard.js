import { Form, Button } from 'react-bootstrap';
import ReservationDetails from './reservationDetails';

export default function ReservationCard(props){

    //var noOfPass = localStorage.getItem("noOfPass") ? localStorage.getItem("noOfPass") : 1;

    function renderPassengerForm(){
        var noOfPass = localStorage.getItem("noOfPass") ? localStorage.getItem("noOfPass") : 1;

        var passForms = [];
        for(var i = 0; i < 3; i++){
            passForms.push(<ReservationDetails index={i+1}/>);
        }
        return passForms;
    }

return(
    <div>
        <div>
            <div>
                <h2>Who's traveling?</h2>
                <p>Traveler names must match government-issued photo ID exactly.</p>
            </div>
            <Form className="form">
                <Form.Group>
                {
                    renderPassengerForm()
                }
                </Form.Group>
                <Form.Group style={{display: 'grid'}}>
                    <div className="btn-group">
                        <Button variant="primary" className="pure-u-1-6 btn-spacing" onClick={props.handleCreate}>
                            Book Now
                        </Button>
                    </div>
                </Form.Group>
            </Form>
        </div>
    </div>

);

}