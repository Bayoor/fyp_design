import React from "react";
import progressBar_1 from "../../assets/icons/Progress bar (2).png";
import progressBar from "../../assets/icons/Progress bar.png";
import progressBar_3 from "../../assets/icons/Progress bar (1).png";
import arrowIcon from "../../assets/icons/arrow-left.svg";
import Button from "../../component/button/primary/Button";
import Footer from "../../component/footer/Footer";
import emailLogo from "../../assets/icons/sms.png";
import eyeSlashLogo from "../../assets/icons/eye-slash.png";

import "./sign_in.css";
import { Link } from "react-router-dom";
import FormInput from "../../component/formInputs/FormInput";

const SignIn = () => {
  return (
    <div className="sign_in-page section-margin">
      <div className="sign-in-content">
        <h2 className="title">Sign in to Continue</h2>
        <Link to="/register" className="sign_in-arrow-icon">
          <img src={arrowIcon} alt="" />
        </Link>
      </div>
      <p>
        Fill in your details below to create an <br /> account with us
      </p>
      <div className="image-icon image">
        <img src={progressBar_1} alt="" />
        <img src={progressBar} alt="" />
        <img src={progressBar_3} alt="" />
      </div>
      <form action="#" method="post" className="sign_in-form">
        <FormInput
          type="text"
          name="email"
          id="email"
          placeholder="Email address"
          img={emailLogo}
          alt="email"
          className="form-content sign_in-form"
        />
        <FormInput
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          img={eyeSlashLogo}
          alt="password"
          className="form-content sign_in_form"
        />

        <div className="parah">
          <p>Forget Password?</p>
        </div>

        <Link to="/sign_in/selectColor">
          <Button text="Next" className="btn-style" />
        </Link>
        <br />
        <div className="sign_in-para">
          <p>
            Don't have an account<span> Register</span>
          </p>
        </div>
        <Footer className="footer sign_in-footer" />
      </form>

      <br />
      <br />
    </div>
  );
};

export default SignIn;
