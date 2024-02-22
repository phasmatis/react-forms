import React, {useState} from "react";
import axios from "axios";
import '../App.css'

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
        <div className="signup-form-container">
        <h2>Sign Up!</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}




export default SignUpForm;