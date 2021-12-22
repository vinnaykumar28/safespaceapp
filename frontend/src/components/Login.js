import React, { useState } from 'react'
import { useHistory } from 'react-router';
import axios from "axios";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    let history = useHistory();

    const loginUser = async (e) => {
        e.preventDefault();
        setMessage("You are logged in.");
        await axios.post('http://localhost:5000/user/login', {
            username: username,
            password: password,
        }).then(response => {
            // console.log("data:", response.data);
            // console.log("token", response.data.token);
            if (response.status === 200) {
                console.log("Logged In");
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                history.push("/")
            };
        }).catch(e => {
            console.log(e);
        });
    };

    return (
        <div className="AllForms">
            <form onSubmit={loginUser}>
                <div className="form-control">
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        value={username}
                        placeholder="Enter a username"
                        onChange={({ target }) => setUsername(target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        value={password}
                        placeholder="Enter a password"
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <div className="form-control">
                    <button type="submit">Login</button>
                                    
                <div className="message">{message}</div>
                </div>

            </form>
        </div>

    )
}

export default Login
