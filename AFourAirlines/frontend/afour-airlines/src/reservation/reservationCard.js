import { Form, Button } from 'react-bootstrap';
import ReservationDetails from './reservationDetails';

export default function ReservationCard(props){

    function renderPassengerForm(){
        var passForms = [];
        for(var i = 0; i < props.noOfPass; i++){
            passForms.push(<ReservationDetails index={i+1} renderSeatList={props.renderSeatList} passList={props.passList}/>);
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
                <Form.Group>
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