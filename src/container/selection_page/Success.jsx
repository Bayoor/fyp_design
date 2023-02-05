import React from "react";
import happy_face from "../../assets/happy_face.png"
import "./success.css"

const Success = () => {
  return (
    <>
      <div className="success_page">
        <div className="success-content">
          <h2 className="success-title">Congratulations</h2>
          <p>
          Your account has been created<br/> successfully
          </p>
        </div>
       

        <div className="success-img">
        <img src={happy_face} alt="" />
        </div>
        <Button text="Goto Log In" />
        <Footer />
        <br />
      </div>
    </>
  );
};

export default Success;
