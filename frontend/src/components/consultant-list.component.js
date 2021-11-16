import React, { Component } from "react";
import ConsultantService from "../services/consultant.service";
import { Link } from "react-router-dom";

export default class ConsultantList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveConsultant = this.retrieveConsultant.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveConsultant = this.setActiveConsultant.bind(this);
    this.searchName = this.searchName.bind(this);

    this.state = {
      Consultant: [],
      currentConsultant: null,
      currentIndex: -1,
      searchName: ""
    };
  }

  componentDidMount() {
    this.retrieveConsultant();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrieveConsultant() {
    ConsultantService.getAll()
      .then(response => {
        this.setState({
          Consultant: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveConsultant();
    this.setState({
      currentConsultant: null,
      currentIndex: -1
    });
  }

  setActiveConsultant(Consultant, index) {
    this.setState({
      currentConsultant: Consultant,
      currentIndex: index
    });
  }

  searchName() {
    this.setState({
      currentConsultant: null,
      currentIndex: -1
    });

    ConsultantService.findByName(this.state.searchName)
      .then(response => {
        this.setState({
          Consultant: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchName, Consultant, currentConsultant, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Name"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Consultant List</h4>

          <ul className="list-group">
            {Consultant &&
              Consultant.map((Consultant, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveConsultant(Consultant, index)}
                  key={index}
                >
                  {Consultant.Name}
                </li>
              ))}
          </ul>
        </div>

        <div className="col-md-6">
          {currentConsultant ? (
            <div>
              <h4>Consultant</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentConsultant.name}
              </div>
              <div>
                <label>
                  <strong>Email:</strong>
                </label>{" "}
                {currentConsultant.email}
              </div>

              <div>
                <label>
                  <strong>Speciality:</strong>
                </label>{" "}
                {currentConsultant.speciality}
              </div>

              <div>
                <label>
                  <strong>Working Hours:</strong>
                </label>{" "}
                {currentConsultant.workinghours}
              </div>
              <Link
                to={"/Consultant/" + currentConsultant.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Consultant...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
