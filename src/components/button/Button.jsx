import React from "react";
import "./Button.css"

const Button = (props) => {
  return <button className={`gradientBtn ${props.className}`} type={props.type}>{props.text}</button>;
};

export default Button;
