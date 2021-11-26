import React from 'react';
import userImg from "../images/user-profile-img.jpg";


const Card = (props) => {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={userImg} alt="User" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Card Title</h4>
                <a href="#" className="btn btn-outline-success">Go Anywhere</a>
            </div>
        </div>
    );
}

export default Card;