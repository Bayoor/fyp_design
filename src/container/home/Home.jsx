import React from "react";
import { Link } from "react-router-dom";
import Button from "../../component/button/primary/Button";
import SecButton from "../../component/button/secondary/index";
import Footer from "../../component/footer/Footer";
import "./home.css";

const Header = () => {
  return (
    <div className="header section-margin">
      <div className="header-content">
        <h2 className="header-title">Welcome to HomeTech</h2>
        <p className="header-para">
          We protect your credentials from any form of
          <br /> shoulder surfing attacks
        </p>
        <Link to="/register">
          <Button text="Register" className="btn-style" />
        </Link>
        <Link to="/sign_in">
          <SecButton text="Sign In" />
        </Link>
        <Footer className="footer" />
      </div>
    </div>
  );
};

export default Header;
