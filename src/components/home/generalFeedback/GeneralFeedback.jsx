import React, { useState } from "react";
import useTimeout from "../../../hooks/useTimeout";
import axios from "axios";
import send from "../../../assets/icons/send.svg";
import green_tick_small from "../../../assets/icons/green_tick_small.svg";
import "./GeneralFeedback.css";

const GeneralFeedback = ({ aiMessage, lastUserQuestion, setShowFeedback }) => {
  const [feedbackData, setFeedbackData] = useState({
    user_id: "test_id",
    question: lastUserQuestion,
    answer: aiMessage,
    feedback: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState(false);
  const [shouldHide, setShouldHide] = useState(false); 

  useTimeout(() => {
    if (shouldHide) {
      setSubmissionStatus(false);
      setShowFeedback(false);
    }
  }, 2000);

  const sendFeedback = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/general_feedback`,
        feedbackData
      );
      if (response) {
        console.log("feedback sent");
        setSubmissionStatus(true);
        setShouldHide(true);
      } else {
        alert("Failed to send feedback");
      }
    } catch (error) {
      alert("An error occured", error);
      console.error(error);
    }

    console.log(feedbackData);
  };

  const handleFeedbackInputChange = (e) => {
    setFeedbackData({ ...feedbackData, [e.target.name]: e.target.value });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendFeedback(e);
      e.preventDefault();
    }
  };

  return (
    <>
      {!submissionStatus ? (
        <form onSubmit={sendFeedback} className="feedback-input-div">
          <input
            type="text"
            name="feedback"
            id="feedback"
            value={feedbackData.feedback}
            placeholder="Why do you think so?"
            onChange={handleFeedbackInputChange}
            onKeyDown={handleKeyDown}
          />
          <button type="submit" className="send feedback-send">
            <img src={send} alt="send-icon" />
          </button>
        </form>
      ) : (
        <div className="feedback-message">
          <img src={green_tick_small} alt="green-tick" />
          Response Saved
        </div>
      )}
    </>
  );
};

export default GeneralFeedback;
