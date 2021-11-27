import React from 'react';
    import { Button } from 'react-bootstrap';

const Card = props => {
    return (
        <div className="card text-center">
            <div className="overflow card-image-container">
                <img src={props.cardImg} alt={props.cardAltText} className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <Button variant="secondary" className="pure-u-1-6 btn-spacing" value={props.cardTitle} onClick={(e) => props.handleOnClick(e.target.value)}>
                    {props.cardTitle}
                </Button>
            </div>
        </div>
    );
}

export default Card;