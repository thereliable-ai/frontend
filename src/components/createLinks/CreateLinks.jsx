import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CreateLinks.css";
import edit from "../../assets/icons/edit.svg";
import arrow_right from "../../assets/icons/arrow_right.svg";
import copy from "../../assets/icons/copy.svg";
import share from "../../assets/icons/share.svg";

const CreateLinks = ({ isConnected }) => {
  const [email, setEmail] = useState("");
  const [clientID, setClientID] = useState("");
  const [linkCreated, setLinkCreated] = useState(false);
  const [link, setLink] = useState(""); // Placeholder for the generated link
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your logic to create the link goes here
    setLink("https://acb.shgdsgh.com");
    setLinkCreated(true);
  };

  const handleCopy = () => {
    // Logic to copy the link to clipboard
    setIsLinkCopied(true);
  };

  return !isConnected ? (
    <div className="create-links">
      <p className="description">
        Connect your database to start creating links for your clients and let
        them directly interact with their specific data residing in your
        database, ensuring an efficient personalized experience.
      </p>
      <Link to="/connect-database">
        <button className="connectBtn">Connect Database</button>
      </Link>
    </div>
  ) : (
    <div className="create-links new-link">
      <div className="header">
        <h3 className="section-heading">New Link</h3>
        <img src={edit} alt="" className="edit" />
      </div>
      <form className="create-link-form" onSubmit={handleSubmit}>
        <div className="inputDiv">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="ClientID">ClientID</label>
          <select
            id="ClientID"
            value={clientID}
            onChange={(e) => setClientID(e.target.value)}
          >
            <option value="">Select Client ID</option>
            <option value="C123-ABC Tech">C123-ABC Tech</option>
            <option value="A642-XYZ Tech">A642-XYZ Tech</option>
            <option value="M249-POR Tech">M249-POR Tech</option>
          </select>
        </div>
        {linkCreated ? (
          // Display link details if link is created
          <div className="link-success-div">
            <p className="link-created">A secure link has been created !</p>
            <p className="expiry-text">Valid for next 72 hours</p>
            <p className="share-text">Share it with your client</p>
            <div className="link-details">
              <div className="link-box"><p>{link}</p></div>
              <button className="copy" onClick={handleCopy}>
                <img src={copy} alt="copy icon" />
              </button>
              <button className="share">
                <img src={share} alt="share icon" />
              </button>
            </div>
          </div>
        ) : (
          <button type="submit">Create Link</button>
        )}
        <button className="outlineBtn">
          See all Links
          <img src={arrow_right} alt="arrow_right" />
        </button>
      </form>
    </div>
  );
};

export default CreateLinks;
