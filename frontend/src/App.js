import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddConsultant from "./components/add-consultant.component";
import Consultant from "./components/consultant.component";
import ConsultantList from "./components/consultant-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/consultant"} className="navbar-brand">
            Home
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/consultant"} className="nav-link">
                Consultant
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/consultant"]} component={ConsultantList} />
            <Route exact path="/add" component={AddConsultant} />
            <Route path="/consultant/:id" component={Consultant} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
