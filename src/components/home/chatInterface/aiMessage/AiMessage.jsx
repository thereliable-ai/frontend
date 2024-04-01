import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import "./AiMessage.css";
import FeedbackBtn from "./feedbackBtn/FeedbackBtn";
import GeneralFeedback from "../../generalFeedback/GeneralFeedback";
import AI_profile_img from "../../../../assets/icons/AI_profile_img.svg";
import green_bulb from "../../../../assets/icons/green_bulb.svg";
import cross from "../../../../assets/icons/cross.svg";
// import QueryPopup from "../../queryPopup/QueryPopup";

const AiMessage = (props) => {
  // const [popup, setPopup] = useState(false);
  // const handleAiMessageClick = () => {
  //   setPopup(true);
  // }
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <div className="chat-message-div AI-response">
      <div className="chat-message" /*onClick={handleAiMessageClick}*/>
        <img src={AI_profile_img} alt="AI-image" />
        <div className="message-bubble AI-bubble">
          <p className="AI-name">thereliable.ai</p>
          <p className="message-text AI-message-text typed-out">
            {props.message}
          </p>
        </div>
      </div>
      {props.feedback && (
        <div className="feedback-div">
          <div className="feedback-btns-div">
            <FeedbackBtn
              icon={green_bulb}
              label="Insightful"
              onClick={() => setShowFeedback(true)}
            />
            <FeedbackBtn
              icon={cross}
              label="Inaccurate"
              onClick={() => setShowFeedback(true)}
            />
          </div>
          {showFeedback && (
            <OutsideClickHandler
              onOutsideClick={() => {
                console.log("hiding");
                setShowFeedback(false);
              }}
            >
              <GeneralFeedback
                aiMessage={props.message}
                lastUserQuestion={props.lastUserQuestion}
                setShowFeedback={setShowFeedback}
              />
            </OutsideClickHandler>
          )}
        </div>
      )}
      {/* <QueryPopup isOpen={popup} closePopup={()=>setPopup(false)} /> */}
    </div>
  );
};

export default AiMessage;
