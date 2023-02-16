import React from "react";
import { Link } from "react-router-dom";
import Button from "../../component/button/primary/Button";
import "./register.css";
import progressBar_1 from "../../assets/icons/Progress bar (2).png";
import progressBar from "../../assets/icons/Progress bar.png";
import progressBar_3 from "../../assets/icons/Progress bar (1).png";
import profile from "../../assets/icons/profile.png";
import emailLogo from "../../assets/icons/sms.png";
import eyeSlashLogo from "../../assets/icons/eye-slash.png";
import arrowIcon from "../../assets/icons/arrow-left.svg";
import Footer from "../../component/footer/Footer";
import FormInput from "../../component/formInputs/FormInput";

const Register = () => {
  // const [values, setValues] = React.useState({
  //   fullname: "",
  //   email: "",
  //   password: "",
  // });

  // const inputs = [
  //   {
  //     id: 1,
  //     name: "fullname",
  //     type: "text",
  //     placeholder: "Full Name",
  //     label: "fullname",
  //   },
  //   {
  //     id: 2,
  //     name: "email",
  //     type: "email",
  //     placeholder: "Email address",
  //     label: "email",
  //   },
  //   {
  //     id: 3,
  //     name: "password",
  //     type: "password",
  //     placeholder: "Password",
  //     label: "password",
  //   },
  // ];

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  // const onChange = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };
  // console.log(values);

  return (
    <div className="reg_page section-margin">
      <div className="reg-content">
        <h2 className="reg-title">Create an Account</h2>
        <Link to="/register" className="arrow-icon">
          <img src={arrowIcon} alt="" />
        </Link>
      </div>
      <p className="reg-para">
        Fill in your details below to create an <br /> account with us
      </p>
      <div className="reg-img">
        <img src={progressBar_1} alt="" />
        <img src={progressBar} alt="" />
        <img src={progressBar_3} alt="" />
      </div>
      <form action="#" method="post" className="form">
        <FormInput
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Full Name"
          img={profile}
          alt="pofile"
          className="profile-icon"
        />
        <FormInput
          type="text"
          name="email"
          id="email"
          placeholder="Email address"
          img={emailLogo}
          alt="email"
          className="email-icon"
        />
        <FormInput
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          img={eyeSlashLogo}
          alt="password"
          className="password-icon"
        />

        <Link to="/verify">
          <Button text="Next" className="btn-style reg-btn" />
        </Link>
        <br />
        <div className="para">
          <p>
            Already have an account
            <Link to="/sign_in">
              <span className="reg-span"> Sign In</span>
            </Link>
          </p>
        </div>
        <Footer className="footer reg-footer" />
      </form>
    </div>
  );
};

export default Register;
