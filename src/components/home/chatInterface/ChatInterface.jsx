import React, { useState } from "react";
import AiMessage from "./aiMessage/AiMessage";
import UserMessage from "./userMessage/UserMessage";
import send from "../../../assets/icons/send.svg";
import "./ChatInterface.css";

const ChatInterface = () => {
  const [inputText, setInputText] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const sendMessage = () => {
    if (inputText.trim() !== "") {
      setChatHistory([...chatHistory, { sender: "user", message: inputText }]);
      setInputText("");

      // You can send the user message to your backend here for processing
      // and receive the response to display in the chat interface
    }
  };
  return (
    <div className="chat-interface">
      {/* Chat Log */}
      <div className="chat-log">
        <AiMessage message="Hi, How can I help you ?" buttons={false} />
        <UserMessage message="What is the COGS and Profit margin for Order Number 101 ? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem possimus, repudiandae tempora voluptatem commodi veniam blanditiis. Minima hic laborum in." />
        <AiMessage
          message="The COGS and Profit margin for order number 101 are ₹1125 and
                ₹900 respectively. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem possimus, repudiandae tempora voluptatem commodi veniam blanditiis. Minima hic laborum in. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem possimus, repudiandae tempora voluptatem commodi veniam blanditiis. Minima hic laborum in. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem possimus, repudiandae tempora voluptatem commodi veniam blanditiis. Minima hic laborum in.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem possimus, repudiandae tempora voluptatem commodi veniam blanditiis. Minima hic laborum in."
        />
        <UserMessage message="What is the COGS and Profit margin for Order Number 101 ? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem possimus, repudiandae tempora voluptatem commodi veniam blanditiis. Minima hic laborum in." />
        <AiMessage
          message="The COGS and Profit margin for order number 101 are ₹1125 and
                ₹900 respectively. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem possimus, repudiandae tempora voluptatem commodi veniam blanditiis. Minima hic laborum in. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem possimus, repudiandae tempora voluptatem commodi veniam blanditiis. Minima hic laborum in. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem possimus, repudiandae tempora voluptatem commodi veniam blanditiis. Minima hic laborum in.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem possimus, repudiandae tempora voluptatem commodi veniam blanditiis. Minima hic laborum in."
          buttons={true}
        />
      </div>

      <div className="chat-footer">
        <p className="typing-text">thereliable.ai is typing...</p>
        {/* Input Box */}
        <div className="chat-input-div">
          <textarea rows="1" placeholder="Ask anything related to your database..." />
          <button onClick={sendMessage} className="send">
            <img src={send} alt="send-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
