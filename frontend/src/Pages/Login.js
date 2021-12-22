import React, { useContext } from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  let history = useHistory();
  if (localStorage.getItem('accessToken')) history.push('/Home');

  const loginUser = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/user/login', {
      username: username,
      password: password,
    }).then(response => {
      console.log("data:", response.data);
      if (response.status === 200) {
        console.log("Logged In");
        // var token = response.data.data;
        // var decoded = jwt_decode(token);
        // if (decoded.isAdmin) localStorage.setItem('admin', '1');
        // localStorage.setItem('accessToken', JSON.stringify(response.data.data))
        // localStorage.setItem('loggedIn', "1")
        localStorage.setItem('accessToken', response.data.token);
        localStorage.setItem('user', username);
        localStorage.setItem('loggedIn', "1");
        if (localStorage.getItem('accessToken')) history.push('/');
      } else {
        setMessage(response.message);
        console.log("message"+response.message);
      };
    }).catch(e => {
      console.log(e);
    });
  };

  return (
    <div>
      <div className="register-photo">
        <div className="form-container">
          <div className="image-holder"></div>
          <form onSubmit={loginUser}>
            <h2 className="text-center">
              <strong>Sign In</strong>
            </h2>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                value={username}
                placeholder="Enter a username"
                onChange={({ target }) => setUsername(target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                value={password}
                placeholder="Enter a password"
                onChange={({ target }) => setPassword(target.value)}
                required
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary btn-block" type="submit">
                Sign In
              </button>
              {message}
            </div>
            <div className="form-group">
              <a href="http://localhost:3001/Register">
                <span className="btn btn-primary btn-block">Sign Up</span>
              </a>
            </div>

            <a href="http://localhost:3001/" className="already">
              Go To Home!
            </a>
          </form>
        </div>
      </div>
    </div>
  );

}

export default Login;
