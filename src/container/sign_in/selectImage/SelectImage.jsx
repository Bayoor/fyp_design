import React from 'react'
import progressBar_1 from "../../../assets/icons/Progress bar (2).png";
import progressBar_2 from "../../../assets/icons/Progress bar(blue2).svg";
import progressBar_3 from "../../../assets/icons/Progress bar(blue3).svg";
import {
  Rectangle_1694,
  Rectangle_1695,
  Rectangle_1696,
  Rectangle_1699,
  Rectangle_1700,
  Rectangle_1701,
  Rectangle_1702,
  Rectangle_1703,
  Rectangle_1704,

} from "../../../assets/selection_image/import";
import Button from "../../../component/button/primary/Button";
import Footer from "../../../component/footer/Footer";


const SelectImage = () => {
  return (
    <div className="selection_page section-margin">
      <div className="selection_page-content">
        <h2 className="selection_page-title">Select Any Image Below</h2>
        <p>
          Please select your Image to Sign in to your
          <br /> account
        </p>
      </div>

      <div className="selection_page-icon">
        <img src={progressBar_1} alt="" />
        <div />
        <img src={progressBar_2} alt="" />
        <div />
        <img src={progressBar_3} alt="" />
      </div>

      <div className="flex-icon">
        <div className="selection_page-img">
          <img src={Rectangle_1694} alt="" />
          <img src={Rectangle_1695} alt="" />
          <img src={Rectangle_1696} alt="" />
        </div>
        <div className="selection_page-img">
          <img src={Rectangle_1704} alt="" />
          <img src={Rectangle_1703} alt="" />
          <img src={Rectangle_1699} alt="" />
        </div>
        <div className="selection_page-img">
          <img src={Rectangle_1700} alt="" />
          <img src={Rectangle_1701} alt="" />
          <img src={Rectangle_1702} alt="" />
        </div>
      </div>

      <Button text="Next" className="btn-style" />
      <Footer className="footer select_page-footer" />
      <br />
    </div>
  )
}

export default SelectImage