import React, { Component } from "react";
import ConsultantService from "../services/consultant.service";

export default class AddConsultant extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeSpeciality = this.onChangeSpeciality.bind(this);
    this.onChangeHours = this.onChangeHours.bind(this);
    this.saveConsultant = this.saveConsultant.bind(this);
    this.newConsultant = this.newConsultant.bind(this);

    this.state = {
      id: null,
      name: "",
      email: "", 
      speciality: "",
      workingHours: "",
      submitted: false
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeSpeciality(e) {
    this.setState({
      speciality: e.target.value
    });
  }
  onChangeHours(e) {
    this.setState({
      workingHours: e.target.value
    });
  }

  saveConsultant() {
    var data = {
      name: this.state.name,
      email: this.state.email,
      speciality: this.state.speciality,
      workingHours: this.state.workingHours
    };

    ConsultantService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          speciality: response.data.speciality,
          workingHours: response.dataw.workingHours,
          submitted: true
        });
        console.log(this.state.id)
        console.log("data"+response.data);
        console.log("msg"+response.message);
        
      })
      .catch(e => {
        console.log(e);
      });
  }

  newConsultant() {
    this.setState({
      id: null,
      name: "",
      email: "",
      speciality: "",
      workingHours: "",
      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newConsultant}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                value={this.state.email}
                onChange={this.onChangeEmail}
                name="email"
              />
            </div>

            
            <div className="form-group">
              <label htmlFor="speciality">Speciality</label>
              <input
                type="text"
                className="form-control"
                id="speciality"
                required
                value={this.state.speciality}
                onChange={this.onChangeSpeciality}
                name="speciality"
              />
            </div>

            
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input
                type="text"
                className="form-control"
                id="workingHours"
                required
                value={this.state.workingHours}
                onChange={this.onChangeHours}
                name="workingHours"
              />
            </div>

            <button onClick={this.saveConsultant} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
