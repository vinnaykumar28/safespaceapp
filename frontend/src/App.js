import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import ConsultantList from "./components/ConsultantsList";
import UpdateConsultant from "./components/UpdateConsultant";
import Register from "./components/Register";
import Login from "./components/Login";
import AddConsultant from "./components/AddConsultant";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Home
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/consultant"} className="nav-link">
                Consultants
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Register
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/consultant"]}>
              <ConsultantList/>
            </Route>
            <Route path="/add">
              <AddConsultant />
            </Route>
            <Route path="/update/:id">
              <UpdateConsultant />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            {/* <Route exact path={["/", "/consultant"]} component={ConsultantList} />
            <Route exact path="/add" component={AddConsultant} /> */}
            {/* <Route path="/consultant/:id" component={Consultant} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
