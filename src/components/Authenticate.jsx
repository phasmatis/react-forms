import React, { useState } from "react";
import axios from "axios";
import '../App.css'


const Authenticate = ({token}) => {
const [error, setError] = useState(null);
const [successMessage, setSuccessMessage] = useState(null);
const [username, setUsername] =useState(null);


const handleClick = async () => {
    try {
        console.log('Button clicked!');

        const response = await axios.get('https://fsa-jwt-practice.herokuapp.com/authenticate', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        const result = await response.data;
        setSuccessMessage(result.message)

        const {username} = result.data;
        setUsername(username);

    } catch (error) {
        setError(error.message);
    }
}
    return (
        <div>
            <h2>Authenticate</h2>
            {error && <p>{error}</p>}
            {successMessage && <p className="success">{successMessage}</p>} {username && <p>User: {username}</p>}
            <button onClick={handleClick}>Authenticate Token</button>
        </div>
    )
}


export default Authenticate;