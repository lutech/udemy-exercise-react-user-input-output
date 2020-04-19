import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {

    return (
        <div className="UserOutput">
            <p>Hello my name is {props.username}.</p>
            <p>Hope you like React so far.</p>
        </div>
    )
}

export default UserOutput;