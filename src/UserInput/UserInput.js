import React from 'react';
import './UserInput.css';

const UserInput = (props) => {

    const label = {
        fontWeight: 'bold',
        color: '#ccc',
        display: 'block'
    }

    const formInput = {
        width: '50%',
        border: '1px solid #ccc',
        borderRadius: '4px'
    }


    return (
        <div className="UserInput">
            <label style={label} htmlFor="username">Change the Second Name Here:</label>
            <input style={formInput} id="username" type="text" value={props.username} onChange={props.changeName}/>
        </div>
    )
}

export default UserInput;