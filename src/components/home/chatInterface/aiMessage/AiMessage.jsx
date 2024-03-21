import React, { useState } from "react";
import "./AiMessage.css";
import FeedbackBtn from "./feedbackBtn/FeedbackBtn";
import AI_profile_img from "../../../../assets/icons/AI_profile_img.svg";
import green_bulb from "../../../../assets/icons/green_bulb.svg";
import cross from "../../../../assets/icons/cross.svg";
import QueryPopup from "../../queryPopup/QueryPopup";

const AiMessage = (props) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const handleAiMessageClick = () => {
    setPopupOpen(true);
  }

  return (
    <div className="chat-message-div AI-response">
      <div className="chat-message" onClick={handleAiMessageClick}>
        <img src={AI_profile_img} alt="AI-image" />
        <div className="message-bubble AI-bubble">
          <p className="AI-name">thereliable.ai</p>
          <p className="message-text AI-message-text">{props.message}</p>
        </div>
      </div>
      {props.buttons && (
        <div className="feedback-btns-div">
          <FeedbackBtn icon={green_bulb} label="Insightful" />
          <FeedbackBtn icon={cross} label="Inaccurate" />
        </div>
      )}
      <QueryPopup isOpen={popupOpen} closePopup={()=> setPopupOpen(false)} />
    </div>
  );
};

export default AiMessage;
