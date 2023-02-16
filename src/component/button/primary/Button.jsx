import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <>
      <div className="button">
        <button type="button" 
        value="submit" 
        className={props.className}>
          {props.text}
        </button>
      </div>
    </>
  );
};

export default Button;
