import React from "react";
import "./footer.css";

const Footer = (props) => {
  return (
    <>
      <div className={props.className}>
        <p>Privacy and Policy</p>
        <p>FAQ</p>
      </div>
    </>
  );
};

export default Footer;
