import React from "react";
import "../styles/Input.css";

function Input(props) {
  return (
    <input
      className={props.className}
      type="text"
      placeholder={props.placeholder}
      onKeyDown={props.handler}
    />
  );
}

export default Input;
