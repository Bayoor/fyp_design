import React from "react";
import progressBar_1 from "../../assets/icons/Progress bar (2).png";
import progressBar_2 from "../../assets/icons/Progress bar(blue2).svg";
import progressBar_3 from "../../assets/icons/Progress bar(blue3).svg";
import {
  Rectangle_1694,
  Rectangle_1695,
  Rectangle_1696,
  Rectangle_1697,
  Rectangle_1698,
  Rectangle_1699,
  Rectangle_1700,
  Rectangle_1701,
  Rectangle_1702,
} from "../../assets/selection_image/import";
import Button from "../../component/button/primary/Button";
import Footer from "../../component/footer/Footer";
import "./selection-page.css";

const SelectPage = () => {
  return (
    <>
      <div className="selection_page">
        <div className="selection_page-content">
          <h2 className="selection_page-title">Select Any Image Below</h2>
          <p>
            Please select any Image below to generate
            <br /> a pattern from it
          </p>
        </div>
        <div className="selection_page-icon">
          <img src={progressBar_1} alt="" />
          <div />
          <img src={progressBar_2} alt="" />
          <div />
          <img src={progressBar_3} alt="" />
        </div>

        <div className="selection_page-img">
          <div>
            <img src={Rectangle_1694} alt="" />
            <img src={Rectangle_1695} alt="" />
            <img src={Rectangle_1696} alt="" />
          </div>
          <div>
            <img src={Rectangle_1697} alt="" />
            <img src={Rectangle_1698} alt="" />
            <img src={Rectangle_1699} alt="" />
          </div>
          <div>
            <img src={Rectangle_1700} alt="" />
            <img src={Rectangle_1701} alt="" />
            <img src={Rectangle_1702} alt="" />
          </div>
        </div>
        <Button text="Next" />
        <Footer />
        <br />
      </div>
    </>
  );
};

export default SelectPage;
