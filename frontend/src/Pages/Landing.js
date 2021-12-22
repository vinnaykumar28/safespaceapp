import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="header-blue headerSize">
            <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
              <div className="container">
                <a className="navbar-brand" href="#">
                  SafeSpace
                  {/* <img src="assets/img/favicon.png" height="30px" width="30px"/> */}
                </a>
                <button
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navcol-1"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navcol-1">
                  <ul className="nav navbar-nav">
                    <li className="nav-item" role="presentation">
                      <Link to={"/aboutus"} className="nav-link">
                        About Us
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link to={"/contactus"} className="nav-link">
                        Contact Us
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link to={"/appointment"} className="nav-link">
                        Book Appointment
                      </Link>
                    </li>
                  </ul>
                  <div className="form-inline mr-auto" target="_self">
                    <div className="form-group">
                      <label for="search-field"></label>
                      <span className="form-control search-field" />
                    </div>
                  </div>
                  <span className="navbar-text">
                    {" "}
                    <Link to={"/login"} className="nav-link">
                      Login
                    </Link>
                  </span>
                  <Link to={"/register"} className="btn btn-light action-button nav-link">
                      Sign Up
                  </Link>
                </div>
              </div>
            </nav>
            <div className="container hero">
              <div className="row">
                <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
                  <h1>Mental health comes first!</h1>
                  <p>
                    Online Consultant Appointment Application that uses an web
                    platform that makes the task of making an appointment from
                    the consultants easy and reliable for the users.{" "}
                  </p>
                  <button
                    className="btn btn-light btn-lg action-button"
                    type="button"
                  >
                    Learn More
                  </button>
                </div>
                <div className="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
                  <div className="iphone-mockup">
                    <img src="assets/img/Doc.png" className="device" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="features-boxed">
          <div className="container">
            <div className="intro">
              <h2 className="text-center">Features </h2>
              <p className="text-center">
                "Happiness is nothing more than good health and a bad memory"
              </p>
            </div>
            <div className="row justify-content-center features">
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-map-marker icon"></i>
                  <h3 className="name">Works everywhere</h3>
                  <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-clock-o icon"></i>
                  <h3 className="name">Always available</h3>
                  <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-list-alt icon"></i>
                  <h3 className="name">Customizable </h3>
                  <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore yes very goodsite
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-eye icon"></i>
                  <h3 className="name">Organic </h3>
                  <p className="description">
                    Manage the information of doctors and patient. This site
                    help to find the right doctor at right place.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-plane icon"></i>
                  <h3 className="name">Fast </h3>
                  <p className="description">
                    It tracks all the information list of doctors, available
                    appointment time, book appointment, cancel appointment.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-md-5 col-lg-4 item">
                <div className="box">
                  <i className="fa fa-phone icon"></i>
                  <h3 className="name">Mobile-first</h3>
                  <p className="description">
                    Manage the information of booking of appointment. It is
                    responsive website which makes user to access it from any
                    device.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-boxed">
          <div className="container">
            <div className="intro">
              <h2 className="text-center">Team </h2>
              <p className="text-center">
                "Individual commitment to a group effort--that is what makes a
                team work, a company work, a society work, a civilization work."
              </p>
            </div>
            <div className="row people">
              <div className="col-md-6 col-lg-6 item">
                <div className="box">
                  <img className="rounded-circle"/>
                  <h3 className="name">Mustafa Karimi</h3>
                  <p className="title">CEO</p>
                  <div className="social">
                    <a href="#">
                      <i className="fa fa-facebook-official"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 item">
                <div className="box">
                  <img className="rounded-circle" />
                  <h3 className="name">Vinay Kumar</h3>
                  <p className="title">Developer</p>
                  <div className="social">
                    <a href="#">
                      <i className="fa fa-facebook-official"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-boxed"></div>
        <div className="footer-dark foot">
          <footer>
            <div className="container">
              <div className="row">

                <div className="col-md-6 item text">
                  <h3>Company Name</h3>
                  <p>
                    Praesent sed lobortis mi. Suspendisse vel placerat ligula.
                    Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam
                    quis tristique lectus. Aliquam in arcu eget velit pulvinar
                    dictum vel in justo.
                  </p>
                </div>
                <div className="col item social">
                  <a href="#">
                    <i className="icon ion-social-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="icon ion-social-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="icon ion-social-snapchat"></i>
                  </a>
                  <a href="#">
                    <i className="icon ion-social-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
export default Landing;
