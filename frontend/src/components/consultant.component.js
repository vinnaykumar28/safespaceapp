import React, { Component } from "react";
import ConsultantService from "../services/consultant.service";

export default class Consultant extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.getConsultant = this.getConsultant.bind(this);
    this.updateConsultant = this.updateConsultant.bind(this);
    this.deleteConsultant = this.deleteConsultant.bind(this);

    this.state = {
      currentConsultant: {
        id: null,
        name: "",
        Email: "",
        speciality: "",
        workingHours: "",
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getConsultant(this.props.match.params.id);
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentConsultant: {
          ...prevState.currentConsultant,
          name: name
        }
      };
    });
  }

  onChangeEmail(e) {
    const Email = e.target.value;
    
    this.setState(prevState => ({
      currentConsultant: {
        ...prevState.currentConsultant,
        Email: Email
      }
    }));
  }

  getConsultant(id) {
    ConsultantService.get(id)
      .then(response => {
        this.setState({
          currentConsultant: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  // updateConsultant(status) {
  //   var data = {
  //     id: this.state.currentConsultant.id,
  //     name: this.state.currentConsultant.name,
  //     Email: this.state.currentConsultant.Email,
  //     updated: status
  //   };

  //   ConsultantService.update(this.state.currentConsultant.id, data)
  //     .then(response => {
  //       this.setState(prevState => ({
  //         currentConsultant: {
  //           ...prevState.currentConsultant,
  //           published: status
  //         }
  //       }));
  //       console.log(response.data);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // }

  updateConsultant() {
    ConsultantService.update(
      this.state.currentConsultant.id,
      this.state.currentConsultant
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The consultant was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteConsultant() {    
    ConsultantService.delete(this.state.currentConsultant.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/consultant')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentConsultant } = this.state;

    return (
      <div>
        {currentConsultant ? (
          <div className="edit-form">
            <h4>Consultant</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentConsultant.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={currentConsultant.email}
                  onChange={this.onChangeEmail}
                />
              </div>
            </form>

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteConsultant}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateConsultant}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Consultant...</p>
          </div>
        )}
      </div>
    );
  }
}
