import React from "react";

// import styles from "./index.less";

const Input = ({ label, text, type, id, value, handleChange }) => (
  <div className="inputWrap">
    <label htmlFor={label}>{text}</label>
    <input
      type={type}
      className="form-control"
      id={id}
      value={value}
      onChange={handleChange}
      required
    />
  </div>
);


export default Input;