import React from "react";
import progressBar_1 from "../../assets/icons/Progress bar (2).png";
import progressBar_2 from "../../assets/icons/Progress bar(blue2).svg";
import progressBar_3 from "../../assets/icons/Progress bar (1).png";
import EllipseLogo from "../../assets/icons/Ellipse 469.svg"
import EllipseLogo_2 from "../../assets/icons/Ellipse 470.svg"
import EllipseLogo_3 from "../../assets/icons/Ellipse 471.svg"
import Button from "../../component/button/primary/Button";
import Footer from "../../component/footer/Footer";
import "./color-selection.css";

const ColorSelection = () => {
  return (
    <>
      <div className="color_selection">
        <div className="color_selection-content">
          <h2 className="color_selection-title">Select Your Color Combination</h2>
          <p>
          Please select the colors below according<br/> to your choice
          </p>
        </div>
       <div className="color_selection-icon">
        <img src={progressBar_1} alt="" />
        <div />
        <img src={progressBar_2} alt=""  className="img"/>
        <img src={progressBar_3} alt="" />
       </div>

       <div className="color_selection-img">
        <img src={EllipseLogo} alt="" />
        <img src={EllipseLogo_2} alt="" />
        <img src={EllipseLogo_3} alt="" />
       </div>
          <Button text="Next" />
        <Footer /><br />
      </div>
    </>
  );
};

export default ColorSelection;