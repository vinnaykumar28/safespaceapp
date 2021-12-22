import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router';

const Navbar = (props) => {
    let history = useHistory();
    const logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("loggedIn");
        localStorage.removeItem('admin');
        history.push("/")
    }
    if (localStorage.getItem("user") == "admin") {
        return (
            <div>
                <nav class="navbar navbar-light navbar-expand-md navigation-clean">
                    <div class="container">
                        <a class="navbar-brand" href="#">
                            SafeSpace
                        </a>
                        <button
                            class="navbar-toggler"
                            data-toggle="collapse"
                            data-target="#navcol-1"
                        >
                            <span class="sr-only">Toggle navigation</span>
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navcol-1">
                            <ul class="nav navbar-nav ml-auto">
                                <li class="nav-item" role="presentation">
                                    <Link to={"/"} className="nav-link">
                                        Home
                                    </Link>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <Link to={"/users"} className="nav-link">
                                        Manage Users
                                    </Link>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <Link to={"/Consultants"} className="nav-link">
                                        Manage Consultants
                                    </Link>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="btn" role="presentation" onClick={logout}>
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
    else if (localStorage.getItem("loggedIn") == "1") {
        return (
            <div>
                <nav class="navbar navbar-light navbar-expand-md navigation-clean">
                    <div class="container">
                        <a class="navbar-brand" href="#">
                            SafeSpace
                        </a>
                        <button
                            class="navbar-toggler"
                            data-toggle="collapse"
                            data-target="#navcol-1"
                        >
                            <span class="sr-only">Toggle navigation</span>
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navcol-1">
                            <ul class="nav navbar-nav ml-auto">
                                <li class="nav-item" role="presentation">
                                    <Link to={"/"} className="nav-link">
                                        Home
                                    </Link>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <Link to={"/appointment"} className="nav-link">
                                        Book Appointment
                                    </Link>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <Link to={"/myappointments"} className="nav-link">
                                        My Appointments
                                    </Link>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <Link to={"/profile"} className="nav-link">
                                        Profile
                                    </Link>
                                </li>
                                <li class="dropdown">
                                    <a
                                        class="dropdown-toggle nav-link dropdown-toggle"
                                        data-toggle="dropdown"
                                        aria-expanded="false"
                                        href="#"
                                    >
                                        Dropdown{" "}
                                    </a>
                                    <div class="dropdown-menu" role="menu">
                                        <Link to={"/aboutus"} className="nav-link">
                                            About Us
                                        </Link>
                                        <Link to={"/contactus"} className="nav-link">
                                            Contact Us
                                        </Link>
                                        <a class="dropdown-item" role="presentation" href="#">
                                            Help
                                        </a>
                                        <a class="dropdown-item" role="presentation" onClick={logout}>
                                            Logout
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

    else {
        return (
            <div>
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
                            <Link to={"/register"} className="nav-link">
                                Register
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;