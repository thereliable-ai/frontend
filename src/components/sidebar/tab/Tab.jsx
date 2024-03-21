import React from "react";
import "./Tab.css";

const Tab = (props) => {

  const labelStyle = {
    color: props.isActive ? "var(--neutral-G0)" : props.color
  };

  return (
    <div className={`tab ${props.isActive ? "active" : ""}`} onClick={props.onClick}>
      <img src={props.icon} alt="icon" />
      <p className="label" style={labelStyle}> {props.label} </p>
    </div>
  );
};

export default Tab;
