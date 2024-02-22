import React, {useState} from "react";
import axios from "axios";


const SignUpForm = ({setToken}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        if (username.length < 8) {
            setError('Username must be at least eight characters long.');
            return;
          }
        const response = await axios.post('https://fsa-jwt-practice.herokuapp.com/signup', {
            username,
            password,
        });

        const result = response.data
        setToken(result.token);
        console.log(result)
    } catch (error) {
        setError(error.message)
    }
}
    return (
    <div>
        <h2>Sign Up!</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
            <label>
                Username: <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)}/>
            </label>
            <label>
                Password: <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </label>
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}




export default SignUpForm;