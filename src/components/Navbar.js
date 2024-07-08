import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/">
            <h1>HOME</h1>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">
            <h1>About ADMC</h1>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/service">
            <h1>SERVICES</h1>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/gallary">
            <h1>Gallery</h1>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact">
            <h1>Contact Us</h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
