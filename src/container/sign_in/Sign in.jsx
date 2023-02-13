import React from "react";
import progressBar_1 from "../../assets/icons/Progress bar (2).png";
import progressBar from "../../assets/icons/Progress bar.png";
import progressBar_3 from "../../assets/icons/Progress bar (1).png";
import arrowIcon from "../../assets/icons/arrow-left.svg";
import Button from "../../component/button/primary/Button";
import Footer from "../../component/footer/Footer";
// import FormInput from '../../../component/formInputs/FormInput'
import smsLogo from "../../assets/icons/sms.png";
import eyeSlashLogo from "../../assets/icons/eye-slash.png";

import "./sign_in.css";
import { Link } from "react-router-dom";
import FormInput from "../../component/formInputs/FormInput";

const SignIn = () => {

  


  return (
    <div className="sign_in-page">
      <div className="reg-content">
        <h2 className="reg-title">Sign in to Continue</h2>
        <Link to="/register" className="arrow_icon">
          <img src={arrowIcon} alt="" />
        </Link>
        <p>
          Fill in your details below to create an <br /> account with us
        </p>
      </div>
      <div className="sign_in-img">
        <img src={progressBar_1} alt="" />
        <img src={progressBar} alt="" />
        <img src={progressBar_3} alt="" />
      </div>
      <form action="#" method="post" className="form" >
          <FormInput  placeholder="Email address" />
          <FormInput placeholder="Password"/>
      
        <div className="sign_in-content  email_icon">
          <img src={smsLogo} alt="email" className="email-icon" />
        </div>

        <div className="sign_in-content password_icon">
          <img src={eyeSlashLogo} alt="password" className="password-icon" />
        </div>
        <div className="parah">

        <p>Forget Password?</p>
        </div>

        <br />
        {/* <button type="submit" value="submit">submit</button> */}
        <Link to="/color_selection">
          <Button text="Next" />
        </Link>
        <br />
        <div className="para">
        <p >
          Don't have an account <span>Register</span>
        </p>

        </div>
        <Footer />
      </form>

      <br />
      <br />
    </div>
  );
};

export default SignIn;
