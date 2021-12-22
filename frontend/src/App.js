import React, { Component } from "react";
import { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import NoMatch from "./Pages/NoMatch";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Appointment from './Component/Appointment/Appointment/Appointment';
import Consultants from './Component/Consultants/Consultants';
import AddConsultant from './Component/Consultants/AddConsultant';
import UpdateConsultant from './Component/Consultants/UpdateConsultant';
import DisplayUsers from './Component/Users/DisplayUsers';
import UpdateUsers from './Component/Users/UpdateUsers';
import ContactUs from "./Pages/ContactUs";
import './App.css';
import MyBookings from "./Pages/MyBookings";
import AllBookings from "./Component/AllBookings";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/Appointment" component={Appointment} />
          <Route path="/Consultants" component={Consultants} />
          <Route path="/addConsultant">
            <AddConsultant />
          </Route>
          <Route path="/consultants/update/:id">
            <UpdateConsultant />
          </Route>
          <Route path="/users">
            <DisplayUsers />
          </Route>
          <Route path="/users/update/:id">
            <UpdateUsers />
          </Route>
          <Route path="/mybookings">
            <MyBookings />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/ManageBookings">
            <AllBookings />
          </Route>

          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}
export default App;
