import React from "react";
import delet from "../../assets/icons/delete.svg";
import "./Chatbot.css";

const Chatbot = () => {
  return (
    <div className="chatbot">
      <div className="header">
        <h2 className="heading">ChatBot</h2>
        <img src={delet} alt="delete-icon" className="delete"/>
      </div>
    </div>
  );
};

export default Chatbot;
