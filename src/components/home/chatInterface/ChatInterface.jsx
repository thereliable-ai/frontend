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
  const queuedInputText = useRef(null);

  const [isTyping, setIsTyping] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [lastUserQuestion, setLastUserQuestion] = useState("");

  useEffect(() => {
    if (isFetching) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  }, [isFetching]);

  useEffect(() => {
    if (!webSocket1.current) {
      const ws1 = new W3CWebSocket(import.meta.env.VITE_WEBSOCKET_URL);

      ws1.onopen = () => {
        console.log("WebSocket1 connected");
      };

      ws1.onmessage = handleWebSocket1Message;

      ws1.onclose = () => {
        webSocket1.current = null;
      };

      webSocket1.current = ws1;
      // return () => {
      //   if (webSocket1.current) {
      //     webSocket1.current.close();
      //     webSocket1.current = null;
      //     console.log("websocket1 closed")
      //   }
      // };
    }
  }, []);

  const handleWebSocket1Message = (message) => {
    try {
      const response = JSON.parse(message.data);
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: "ai", message: response.message, flag: response.flag },
      ]);
      console.log("message recieved on WebSocket1");

      if (response.flag === "clarification_question") {
        handleClarificationQuestion();
      } else if (response.flag === "response") {
        webSocket2.current?.close();
        webSocket2.current = null;
      }
    } catch (error) {
      alert("An error occurred:", error);
      console.error(error);
    } finally {
      setIsFetching(false);
    }
  };

  const handleWebSocket2Message = (message) => {
    const response = JSON.parse(message.data);
    // setChatHistory((prevHistory) => [
    //   ...prevHistory,
    //   { sender: "ai", message: response.message, flag: response.flag },
    // ]);
    console.log("message received on WebSocket2");

    if (response.flag === "response") {
      webSocket2.current.close();
      webSocket2.current = null;
      console.log("WebSocket2 closed after receiving response");
    } else if (response.flag === "clarification_question") {
      handleClarificationQuestion();
    }
  };

  const handleClarificationQuestion = async () => {
    try {
      if (!webSocket2.current) {
        const ws2 = new W3CWebSocket(import.meta.env.VITE_WEBSOCKET_URL);
        ws2.onopen = () => {
          console.log("WebSocket2 connected");
          if (queuedInputText.current) {
            sendMessageThroughWebSocket2(queuedInputText.current);
            queuedInputText.current = null;
          }
        };
        ws2.onmessage = handleWebSocket2Message;
        ws2.onclose = () => {
          webSocket2.current = null;
          console.log("WebSocket2 closed");
        };
        webSocket2.current = ws2;
      } else {
        queuedInputText.current = inputText;
      }
    } catch (error) {
      console.error("Error opening WebSocket2:", error);
    }
  };

  const sendMessage = () => {
    if (inputText.trim() !== "") {
      setIsFetching(true);
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: "user", message: inputText },
      ]);

      if (webSocket2.current) {
        webSocket2.current.send(
          JSON.stringify({ message: inputText, flag: "input" })
        );
        console.log("sent on websocket2");
      } else {
        if (webSocket1.current) {
          webSocket1.current.send(
            JSON.stringify({ message: inputText, flag: "new_question" })
          );
          console.log("message sent on WebSocket1");
          setLastUserQuestion(inputText);
        } else {
          console.error("WebSocket1 connection not established");
        }
      }
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
            if (message.flag === "response") {
              return (
                <AiMessage
                  key={index}
                  message={message.message}
                  feedback={true}
                  lastUserQuestion={lastUserQuestion}
                />
              );
            } else {
              return <AiMessage key={index} message={message.message} />;
            }
          }
        })}
      </div>

      <div className="chat-footer">
        {/* Is Typing Text */}
        {isTyping && (
          <div className="is-typing-text">
            thereliable.ai is typing<span className="typing_dot">.</span>
            <span className="typing_dot">.</span>
            <span className="typing_dot">.</span>
          </div>
        )}

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
