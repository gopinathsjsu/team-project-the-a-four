import { Form } from 'react-bootstrap';
import { useState } from 'react';

export default function ReservationDetails(props){

    let defaultPass = {
        passNumber: props.index,
        firstName: "",
        lastName: "",
        identificationNumber: "",
        seat: "",
    }

    let [passData, setPassData] = useState(defaultPass);

    const addPass = (passData) => {
        console.log("addPass called");
        var i = 0;
        for(i = 1; i < props.passList.length; i++){
            if(props.passList[i].passNumber === passData.passNumber){
                break;
            }
        }
        if(i === props.passList.length){
            props.passList.push(passData);
        }
        else{
            props.passList[i].firstName = passData.firstName;
            props.passList[i].lastName = passData.lastName;
            props.passList[i].identificationNumber = passData.identificationNumber;
            props.passList[i].seat = passData.seat;
        }
    }

    function handleSeatSelection(e){
        console.log(props.passList);
        setPassData({...passData, seat: e.target.value});
        addPass(passData);
    }
    

    return(
        <div className="pass-form-popup-content">
            <h4 >Passenger {props.index}</h4>
            <Form className="form pass-form">
                <Form.Group>
                    <Form.Label>First Name: </Form.Label>
                    <Form.Control type="text" defaultValue="" onChange={(e) => {
              setPassData({...passData, firstName: e.target.value});
            }}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name: </Form.Label>
                    <Form.Control type="text" defaultValue="" onChange={(e) => {
              setPassData({...passData, lastName: e.target.value});
            }}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Passport Number: </Form.Label>
                    <Form.Control type="text" defaultValue="" onChange={(e) => {
              setPassData({...passData, identificationNumber: e.target.value});
            }}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Seat: </Form.Label>
                    <Form.Select aria-label="Default select example" value={passData.seat}  onChange={(e) => handleSeatSelection(e)}>
                        {props.renderSeatList}
                    </Form.Select>
                </Form.Group>
            </Form>
        </div>
    );
}