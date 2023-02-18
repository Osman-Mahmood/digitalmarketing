import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";
const Navbar = () => {
  return (
    <div className="container menu">
      <div className="container fluid">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <Link className="navbar-brand logo" to={"/"}>
              <img src={logo} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Nav.Link className="nav-link act" aria-current="page" to={"/"}>
                    Home
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  {/* <a href="#about"> */}
                  <Nav.Link className="nav-link" href="#about">
                    About
                  </Nav.Link>
                  {/* </a> */}
                </li>
                <li className="nav-item">
                  
                  <Nav.Link className="nav-link" href="#services">
                    Services
                  </Nav.Link>
                  
                </li>
                <li className="nav-item">
                  <Nav.Link className="nav-link" href="#ourteam">
                    Our Team
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link className="nav-link" href="#contact">
                    Contact
                  </Nav.Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
