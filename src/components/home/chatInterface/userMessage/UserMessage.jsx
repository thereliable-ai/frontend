import React from "react";
import user_img from "../../../../assets/icons/user_img.svg";
import "./UserMessage.css";

const UserMessage = (props) => {
  return (
    <div className="chat-message-div user-response">
      <div className="chat-message">
        <div className="message-bubble user-bubble">
          <p className="user-name">You</p>
          <p className="message-text user-message-text">{props.message}</p>
        </div>
        <img src={user_img} alt="user-img" />
      </div>
    </div>
  );
};

export default UserMessage;
