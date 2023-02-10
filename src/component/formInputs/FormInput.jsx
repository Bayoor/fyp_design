import React from "react";
import "./forminput.css";

const FormInput = (props) => {
    const {label, onChange, id, ...inputProps} = props;
  return (
    <div className="form-content">
      <label htmlFor="fullname"></label>
      <input {...inputProps} onChange={onChange}
    //    type={props.text}
    //     name={props.name}
    //     id={props.id}
    //     placeholder={props.placeholder}
      />
    </div>
  );
};

export default FormInput;
