import React from "react";
import { Link } from "react-router-dom";
import Button from "../../component/button/primary/Button";
import "./register.css";
import progressBar_1 from "../../assets/icons/Progress bar (2).png";
import progressBar from "../../assets/icons/Progress bar.png";
import progressBar_3 from "../../assets/icons/Progress bar (1).png";
import profile from "../../assets/icons/profile.png";
import smsLogo from "../../assets/icons/sms.png";
import eyeSlashLogo from "../../assets/icons/eye-slash.png";
import arrowIcon from "../../assets/icons/arrow-left.svg";
import Footer from "../../component/footer/Footer";
import FormInput from "../../component/formInputs/FormInput";

const Register = () => {
  const [values, setValues] = React.useState({
    fullname: "",
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "Full Name",
      label: "fullname",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email address",
      label: "email",
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "password",
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);

  return (
    <div className="reg_page">
      <div className="reg-content">
        <h2 className="reg-title">Create an Account</h2>
        <Link to="/register" className="arrow_icon">
          <img src={arrowIcon} alt="" />
        </Link>
        <p>
          Fill in your details below to create an <br /> account with us
        </p>
      </div>
      <div className="reg-img">
        <img src={progressBar_1} alt="" />
        <img src={progressBar} alt="" />
        <img src={progressBar_3} alt="" />
      </div>
      <form action="#" method="post" className="form" onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className="form-content">
          <img src={profile} alt="" className="profile-icon" />
        </div>

        {/* {inputs.map((input) => (
        <FormInput key={input.id} {...input} value={values[input.name]}
        onChange={onChange}/>
        ))} */}
        <div className="form-content">
          <img src={smsLogo} alt="email" className="email-icon" />
        </div>

        {/* {inputs.map((input) => (
        <FormInput key={input.id} {...input} value={values[input.name]}
        onChange={onChange}/>
        ))} */}
        <div className="form-content">
          <img src={eyeSlashLogo} alt="password" className="password-icon" />
        </div>

        {/* <div className="form-content">
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Full name"
            required
          />
          <img src={profile} alt="" className="profile-icon" />
        </div>
        

        <div className="form-content">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            required
          />
          <img src={smsLogo} alt="" className="email-icon" />
        </div>

        <div className="form-content">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
          <img src={eyeSlashLogo} alt="" className="password-icon" />
        </div> */}

        <br />
        {/* <button type="submit" value="submit">submit</button> */}
        <Link to="/verify">
        <Button text="Next" />
        </Link>
        <br />
        <p>
          Already have an account <Link to="/sign_in"><span>Sign In</span></Link>
        </p>
        <Footer />
      </form>

      <br />
      <br />
    </div>
  );
};

export default Register;
