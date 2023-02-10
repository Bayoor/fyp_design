import React from 'react'
// import progressBar_1 from "../../assets/icons/Progress bar (2).png";
// import progressBar from "../../assets/icons/Progress bar.png";
// import progressBar_3 from "../../assets/icons/Progress bar (1).png";
import Button from '../../../component/button/primary/Button'
import Footer from '../../../component/footer/Footer'
// import FormInput from '../../../component/formInputs/FormInput'
// import smsLogo from "../../assets/icons/sms.png";
// import eyeSlashLogo from "../../assets/icons/eye-slash.png";

import "./sign_in.css"
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="reg_page">
      <div className="reg-content">
        <h2 className="reg-title">Create an Account</h2>
        <Link to="/register" className="arrow_icon">
          {/* <img src={arrowIcon} alt="" /> */}
        </Link>
        <p>
          Fill in your details below to create an <br /> account with us
        </p>
      </div>
      <div className="reg-img">
        {/* <img src={progressBar_1} alt="" />
        <img src={progressBar} alt="" />
        <img src={progressBar_3} alt="" /> */}
      </div>
      <form action="#" method="post" className="form">
        {/* {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))} */}
       
        <div className="form-content">
          {/* <img src={smsLogo} alt="email" className="email-icon" /> */}
        </div>

        <div className="form-content">
          {/* <img src={eyeSlashLogo} alt="password" className="password-icon" /> */}
        </div>

        
        <br />
        {/* <button type="submit" value="submit">submit</button> */}
        <Button text="Next" />
        <br />
        <p>
          Already have an account <span>Sign In</span>
        </p>
        <Footer />
      </form>

      <br />
      <br />
    </div>
  )
}

export default SignIn