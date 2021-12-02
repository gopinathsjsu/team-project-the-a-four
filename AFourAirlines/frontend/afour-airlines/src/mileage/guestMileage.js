import memLevels from "../images/memLevels.png";
import { Accordion, ListGroup } from "react-bootstrap";

export default function GuestMileage (){
    return (
        <div>
                <h1 className="page-hearder">Mileage Program</h1>
                <h2>More places. More miles.
                        More adventures.</h2>
                <p>MileageProgram is your ticket to the world, with the most ways to earn and use miles and the most award destinations of any U.S. airline loyalty program. 
                        Now all you need is more vacation days.</p>
                <p>Our membership benefits are designed to suit the specific needs of our Privilege Club members in different tiers. The higher your membership tier, the more benefits you will enjoy.</p>
                <img src={memLevels} style={{height: '600px', paddingTop: '10px', paddingBottom: '30px'}}></img>
                    <Accordion>
                            <Accordion.Item eventKey="0">
                                    <Accordion.Header>Terms and Conditions</Accordion.Header>
                                    <Accordion.Body>
                                            <ListGroup variant="flush">
                                                    <ListGroup.Item>Cash + A4miles can be used to purchase a ticket or upgrade.</ListGroup.Item>
                                                    <ListGroup.Item>Tickets purchased using Cash + A4miles are eligible to earn Qmiles on the cash portion of the ticket.</ListGroup.Item>
                                                    <ListGroup.Item>Cash + A4miles option is not available for “Hold my Booking”.</ListGroup.Item>
                                                    <ListGroup.Item>Credit Card fees are excluded from Cash + A4miles calculation and will be charged separately.</ListGroup.Item>
                                                    <ListGroup.Item>Cash + A4miles flow is not available for tickets with no penalty or change fee.</ListGroup.Item>
                                                    <ListGroup.Item>A4miles used for Cash + A4miles tickets are non-refundable.</ListGroup.Item>
                                                    <ListGroup.Item>Mileage Club reserves the right to withdraw this award option at any time.</ListGroup.Item>
                                            </ListGroup>
                                    </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                    <Accordion.Header>FAQs</Accordion.Header>
                                    <Accordion.Body>
                                            <ListGroup variant="flush">
                                                    <ListGroup.Item>

                                                            <b>What is Cash + Qmiles?</b>

                                                            <p>Cash + Qmiles is designed to give you more flexibility to use your Qmiles when purchasing a ticket.

                                                                    You can use a combination of Cash and Qmiles to pay for one-way or return tickets.

                                                                    Standard terms and conditions apply for tickets purchased under Cash + Qmiles.</p>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                            <b>Will I earn Qmiles on a Cash + Qmiles ticket?</b>

                                                            <p>Privilege Club members are eligible to earn Qmiles on tickets purchased with Cash + Qmiles.</p>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                            <b>How many Qmiles do I need to spend for a Cash + Qmiles ticket?</b>

                                                            <p>The number of Qmiles required for a Cash + Qmiles ticket varies according to your Qmiles balance, destination, and class of travel.</p>
                                                    </ListGroup.Item>
                                                    <ListGroup.Item>
                                                            <b>Can I change the number of Qmiles to be used for a ticket purchased with Cash + Qmiles?</b>

                                                            <p>You can change the number of Qmiles that you would like to use with the Cash + Qmiles slider which can be found on the final payment page during the booking process.</p>
                                                    </ListGroup.Item>
                                            </ListGroup>
                                            
                                    </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
            </div>
    );
}