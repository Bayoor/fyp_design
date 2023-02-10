import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Ellipse from "../../assets/Ellipse 459.png";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={Ellipse} alt="" />
        <Link to="/">
          <h3 className="app__navbar-heading">HomeTech</h3>
        </Link>
      </div>
      <ul className="app__navbar-link">
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
