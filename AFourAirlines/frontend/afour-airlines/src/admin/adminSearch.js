import { Button, Form } from 'react-bootstrap';

export default function AdminSearch(props) {
    return(
        <div>
            <h1 className="page-hearder">Manage {props.manageType}</h1>
            <div className="container-fluid d-flex justify-content-center card-row">
                <div className="row">
                    <div className="col-md-12 card-tile">
                        <Form>
                            <Form.Group>
                                <Form.Label>{props.lableText}</Form.Label>
                                <Form.Control type="text" onChange={(e) => props.setEntityId(e.target.value)} />
                            </Form.Group>
                            <Form.Group>
                                <Button variant="primary" className="pure-u-1-6 btn-spacing" onClick={props.handleSearch}>
                                    Search
                                </Button>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
        
    );    
}