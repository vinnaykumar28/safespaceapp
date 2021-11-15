import React, { useState } from 'react'
import { useHistory } from 'react-router';
import axios from "axios";

const Register = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");

    let history = useHistory();
    const saveUser = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/user/register', {
            username: username,
            email: email,
            password: password,
            address: address
        }).then(response => {
            console.log(response.data);
            if (response.status === 200) {
                console.log("User has been registered");
                if (response.data.status == "success") {
                    setMessage("You have been registered.")
                }
                // console.log(response.data.status);
                // console.log("error" + response.data.error);
            };
        }).catch(e => {
            console.log(e);

        });
    }

    return (
        <div className="AllForms">
            <form onSubmit={saveUser}>

                <div className="form-control" >
                    <label htmlFor="username">Username: </label>
                    <input
                        type="text"
                        value={username}
                        placeholder="Enter Username"
                        onChange={({ target }) => setUsername(target.value)}
                    />
                </div>

                <div className="form-control" >
                    <label htmlFor="email">Email: </label>
                    <input
                        type="text"
                        value={email}
                        placeholder="Enter your Email Address"
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        value={password}
                        placeholder="Enter your Password"
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <div className="form-control">
                    <label>Address</label>
                    <input
                        type="text"
                        value={address}
                        placeholder="Address"
                        onChange={({ target }) => setAddress(target.value)}
                    />
                </div >
                <div className="form-control">
                    <button type="submit">Register</button>
                    <div className="message">{message}</div>
                    
                </div>
            </form>

        </div>

    )
}

export default Register
