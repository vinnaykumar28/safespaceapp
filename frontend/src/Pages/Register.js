import React from "react";
import { useState } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';

const Register = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  let history = useHistory();
  if (localStorage.getItem('accessToken')) history.push('/');

  const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

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
        if (response.data.status === "success") {
          setMessage("You have been registered.");
          history.push('/login');
        }
        // console.log(response.data.status);
        // console.log("error" + response.data.error);
      } else {
        console.log(response)
      };
    }).catch(e => {
      console.log(e);

    });
  }
  return (
    <div>
      <div class="register-photo">
        <div class="form-container">
          <div class="image-holder"></div>
          <form onSubmit={saveUser}>
            <h2 class="text-center">
              <strong>Create</strong> an account.
            </h2>
            <div class="form-group">
              <input
                class="form-control"
                type="text"
                value={username}
                placeholder="Enter Username"
                onChange={({ target }) => setUsername(target.value)}
                required
              />
            </div>
            <div class="form-group">
              <input
                class="form-control"
                type="email"
                value={email}
                placeholder="Enter your Email Address"
                onChange={({ target }) => setEmail(target.value)}
                required
              />
            </div>
            <div class="form-group">
              <input
                class="form-control"
                type="text"
                value={address}
                placeholder="Address"
                onChange={({ target }) => setAddress(target.value)}
                required
              />
            </div>
            {/* <div class="form-group">
              <input
                class="form-control"
                type="number"
                name="age"
                placeholder="Age"
                required
              />
            </div> */}
            <div class="form-group">
              <input
                class="form-control"
                type="password"
                value={password}
                placeholder="Enter your Password"
                onChange={({ target }) => setPassword(target.value)}
                required
              />
            </div>
            {/* <div class="form-group">
              <input
                class="form-control"
                type="password"
                name="password-repeat"
                placeholder="Confirm Password"
                required
              />
            </div> */}
            <div class="form-group">
              <div class="form-check">
                <label class="form-check-label">
                  <input class="form-check-input" type="checkbox" required />I agree to
                  the license terms.
                </label>
              </div>
            </div>
            <div class="form-group">
              <button class="btn btn-primary btn-block" type="submit">
                Register
              </button>
              <div className="message">{message}</div>
            </div>
            <a href="http://localhost:3001/login" class="already">
              You already have an account? Login here.
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
