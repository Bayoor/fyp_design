import React from "react";
import "./forminput.css";

const FormInput = (props) => {
 
  return (
    <div className={props.className}>
      <label htmlFor="fullname"></label>
      <input 
      type={props.text}
      name={props.name}
      id={props.id}
      placeholder={props.placeholder}
      
      />
      <div className="form-logo">
        <img src ={props.img} 
        alt= {props.alt}
        className={props.className}
        />

      </div>

        

    </div>
  );
};

export default FormInput;
