import React from "react";
import Button from "../../component/button/primary/Button";
import Footer from "../../component/footer/Footer";
import arrowIcon from "../../assets/icons/arrow-left.svg";

import "./verify.css";
import { Link } from "react-router-dom";

const Verify = () => {
  return (
    <>
      <div className="verify">
        <div className="verify-content">
          <h2 className="verify-title">Verify Your Email</h2>
          {/* <Link to="/register"><img src={arrowIcon} alt="" /><Link> */}
          <Link to="/register" className="arrow_icon1">
            <img src={arrowIcon} alt="" />
          </Link>
          <p>
            <span>Enter the code sent to</span> salihuahmedrufai@gmail.com
            <br />
            <span>to verify your email address</span>
          </p>
        </div>
        <form action="" method="post" className="form">
          <input type="text" placeholder="Enter OTP code" />
          <p>
            Did't the get code? <span>Resend code</span>
          </p>
          <Link to="/color_selection">
            <Button text="Verify" />
          </Link>
        </form>

        <Footer />
      </div>
    </>
  );
};

export default Verify;
