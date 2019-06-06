import React from "react";
import "../styles/Button.css";

function Button(props) {
  return (
    <button className={props.className} onClick={props.handler}>
      +
    </button>
  );
}

export default Button;
