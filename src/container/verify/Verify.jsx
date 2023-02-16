import React from "react";
import Button from "../../component/button/primary/Button";
import Footer from "../../component/footer/Footer";
import arrowIcon from "../../assets/icons/arrow-left.svg";

import "./verify.css";
import { Link } from "react-router-dom";
// import FormInput from "../../component/formInputs/FormInput";

const Verify = () => {
  return (
    <>
      <div className="verify section-margin">
        <div className="verify-content">
          <h2 className="verify-title">Verify Your Email</h2>
          <Link to="/register" className="verify_arrow-icon">
            <img src={arrowIcon} alt="" />
          </Link>
        </div>
        <p className="verify-para">
          Enter the code sent to <span> salihuahmedrufai@gmail.com</span>
          <br />
          to verify your email address
        </p>
        <form action="" method="post" className="form">
          <input type="text" placeholder="Enter OTP code" />
          <p className="para-text">
            Did't the get code? <span>Resend code</span>
          </p>
          <Link to="/color_selection">
            <Button
              disabled
              text="Verify"
              className="btn-style 
            btn"
            />
          </Link>
        </form>

        <Footer className="footer verify-footer" />
      </div>
    </>
  );
};

export default Verify;
