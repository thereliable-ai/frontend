import React from "react";
import { Link } from "react-router-dom";
import ChatInterface from "./chatInterface/ChatInterface.jsx";
import Button from "../button/Button.jsx";
import main_illustration from "../../assets/illustrations/main-illustration.svg";
import chat from "../../assets/icons/chat.png";
import feedback from "../../assets/icons/feedback.svg"
import "./Home.css";

const Home = ({ isConnected }) => {
  return !isConnected ? (
    <div className="home">
      <div className="welcome-message-container">
        <img
          src={main_illustration}
          alt="illustration"
          className="illustration"
        />
        <h1 className="welcome">Welcome to thereliable.ai !</h1>
        <p className="tagline">
          Data interaction simplified with natural language
        </p>
        <div className="feature-container">
          <div className="feature-div">
            <img src={chat} alt="chat-icon" />
            <p className="feature-text">
              Interact with your data using natural language
            </p>
          </div>
          <div className="feature-div">
            <img src={feedback} alt="feedback-icon" />
            <p className="feature-text">
              Give feedback and improve it for future use 
            </p>
          </div>
        </div>
        <Link to="/connect-database">
          <Button text="Connect Database" />
        </Link>
      </div>
    </div>
  ) : (
    <div className="home home-chat">
      <ChatInterface />
    </div>
  );
};

export default Home;
