import React from "react";
import './Navbar.css'
import logo from '../../assets/logo.png';
import { Link,NavLink } from "react-router-dom";
const Navbar = () => {
    return (
      <div className="container menu">
      <div className="container fluid">
        <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <Link className="navbar-brand logo" to={"/"}><img src={logo} /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to={"/"}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/about"}>About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/services"}>Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/project"}>Project</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={"/contact"}>Contact</NavLink>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
      </div>
      </div>
      
    )
  }
  
  export default Navbar