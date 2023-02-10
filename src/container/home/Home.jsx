import React from "react";
import { Link } from "react-router-dom";
import Button from "../../component/button/primary/Button";
import SecButton from "../../component/button/secondary/index";
import Footer from "../../component/footer/Footer";
import "./home.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="header-title">
          <h2>Welcome to HomeTech</h2>
          <p>
            We protect your credentials from any form of
            <br /> shoulder surfing attacks
          </p>
        </div>
        <Link to="/register">
          <Button text="Register" />
        </Link>
        <Link to="/sign_in">
          <SecButton text="Sign In" />
        </Link>
        <Footer />
      </div>
    </div>
  );
};

export default Header;
