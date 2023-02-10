import React from "react";
import happyFaceFlatline from "../../assets/happy_face_flatline.png"
import Button from "../../component/button/primary/Button";
import Footer from "../../component/footer/Footer";
import "./success.css"

const Success = () => {
  return (
    <div>
      <div className="successful">
        <div className="success-content">
          <h2 className="success-title">Congratulations</h2>
          <p>
            <span>
              Your account has been created
              <br /> successfully
            </span>
          </p>
          <img src={happyFaceFlatline} alt="" />
        </div>

        <Button text="Goto Log In" />

        <Footer />
      </div>
    </div>
  );
};

export default Success;
