import React from "react";
import "./FeedbackBtn.css"

const FeedbackBtn = (props) => {
  return (
    <button className={`feedbackBtn ${props.label}`} onClick={props.onClick}>
      <img src={props.icon} alt="icon" />
      {props.label}
    </button>
  );
};

export default FeedbackBtn;
