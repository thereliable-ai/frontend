import React, { useEffect, useState, useRef } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import AiMessage from "./aiMessage/AiMessage";
import UserMessage from "./userMessage/UserMessage";
import send from "../../../assets/icons/send.svg";
import "./ChatInterface.css";

const ChatInterface = () => {
  const [inputText, setInputText] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const chatLogRef = useRef(null);
  const webSocket1 = useRef(null);
  const webSocket2 = useRef(null);

  useEffect(() => {
    // Initialize WebSocket connections
    const ws1 = new W3CWebSocket("ws://54.208.20.141:8000/chat");
    const ws2 = new W3CWebSocket("ws://54.208.20.141:8000/chat");

    webSocket1.current = ws1;
    webSocket2.current = ws2;

    // WebSocket1 event handler
    ws1.onmessage = (message) => handleWebSocketMessage(message, ws1, ws2);
    // WebSocket2 event handler
    ws2.onmessage = (message) => handleWebSocketMessage(message, ws1, ws2);
  }, []);

  const handleWebSocketMessage = (message, ws1, ws2) => {
    const response = JSON.parse(message.data);
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { sender: "ai", message: response.message },
    ]);
    if (response.flag === "clarification_question") {
      ws2.send(JSON.stringify({ message: inputText, flag: "input" }));
    }
  };

  const sendMessage = () => {
    if (inputText.trim() !== "") {
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: "user", message: inputText },
      ]);
      webSocket1.current.send(
        JSON.stringify({ message: inputText, flag: "new_question" })
      );
      setInputText("");
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
    if (chatLogRef.current) {
      chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      sendMessage();
      e.preventDefault();
    }
  };

  return (
    <div className="chat-interface">
      {/* Chat Log */}
      <div className="chat-log" ref={chatLogRef}>
        {chatHistory.map((message, index) => {
          if (message.sender === "user") {
            return <UserMessage key={index} message={message.message} />;
          } else {
            return <AiMessage key={index} message={message.message} />;
          }
        })}
      </div>

      <div className="chat-footer">
        {/* <p className="typing-text">thereliable.ai is typing...</p> */}
        {/* Input Box */}
        <div className="chat-input-div">
          <textarea
            value={inputText}
            rows="1"
            placeholder="Ask anything related to your database..."
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button onClick={sendMessage} className="send">
            <img src={send} alt="send-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
