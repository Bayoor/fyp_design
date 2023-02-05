import React from "react";
import { Link } from "react-router-dom";
import './button.css'

const Button = (props) => {
  return (
    <>
      <div className="button">
        <Link to="/register">
          <button type="button" className="btn-style btn-change">
            {props.text}
          </button>
        </Link>
      </div>
    </>
  );
};

export default Button;
