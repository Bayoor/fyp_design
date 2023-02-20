import React from 'react'
import progressBar_1 from "../../../assets/icons/Progress bar (2).png";
import progressBar_2 from "../../../assets/icons/Progress bar(blue2).svg";
import progressBar_3 from "../../../assets/icons/Progress bar (1).png";
import EllipseLogo from "../../../assets/icons/Ellipse 469.svg";
import EllipseLogo_2 from "../../../assets/icons/Ellipse 470.svg";
import EllipseLogo_3 from "../../../assets/icons/Ellipse 471.svg";
import Button from "../../../component/button/primary/Button";
import Footer from "../../../component/footer/Footer";
import { Link } from "react-router-dom";
// import "./color-selection.css";

const SelectColor = () => {
  return (
    <>
        <div className="color_selection section-margin">
        <div className="color_selection-content">
          <h2 className="color_selection-title">
            Select Your Color Combination
          </h2>
          <p>
            Please select the colors combination
            <br />below
          </p>
        </div>
        <div className="color_selection-icon">
          <img src={progressBar_1} alt="" />
          <div />
          <img src={progressBar_2} alt="" className="img" />
          <img src={progressBar_3} alt="" />
        </div>

        <div className="color_selection-img">
          <img src={EllipseLogo} alt="" />
          <img src={EllipseLogo_2} alt="" />
          <img src={EllipseLogo_3} alt="" />
        </div>
         <Link to="/selectImage">
          <Button text="Next" className="btn-style selection-btn" />
        </Link> 
        <p className="reset">Reset</p>

        <Footer className="footer footer-margin" />
        <br />
      </div>
    </>
  )
}

export default SelectColor