import React, { useState } from "react";
import axios from "axios";
import ConnectDatabaseForm from "./connectDatabaseForm/connectDatabaseForm";
import "./ConnectDatabase.css";
import green_tick from "../../assets/icons/green_tick.svg";
// import blue_bulb from "../../assets/icons/blue_bulb.svg";

const ConnectDatabase = ({
  isConnected,
  onConnectionSuccess,
  onConnectionDisconnect,
}) => {
  // const [databaseConnection, setDatabaseConnection] = useState(false);
  // const [tableChoice, setTableChoice] = useState(false);
  // const [uniqueIDChoice, setUniqueIDChoice] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    db_user: "demo",
    db_password: "demo",
    db_host: "sample-data.popsql.io",
    port_number: "5432",
    dialect: "postgresql",
    db_name: "marker",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(import.meta.env.VITE_API_URL);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/connect`,
        formData
      );

      //const response = await axios.post(`${process.env.REACT_APP_API_URL}/connect`, formData);
      if (response) {
        // Handle successful connection
        onConnectionSuccess();
      } else {
        // Handle unsuccessful connection
        alert("Failed to connect to the database");
        console.error("Failed to connect to the database");
      }
    } catch (error) {
      alert("An error occurred:", error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditConnection = () => {
    onConnectionDisconnect();
  };

  // const handleNextBtn = (event) => {
  //   event.preventDefault();

  //   const tableChoice = true;
  //   if (tableChoice) {
  //     setTableChoice(true);
  //   }
  // };

  // const handleConnectBtn = (event) => {
  //   event.preventDefault();

  //   const uniqueIDChoice = true;
  //   if (uniqueIDChoice) {
  //     setUniqueIDChoice(true);
  //   }
  //   onConnectionSuccess();
  // };

  // Change subtext based on isConnected and tableChoice states
  const subtext = !isConnected
    ? "Connect your Database"
    : // : !tableChoice
      // ? "Connection established !"
      // : !uniqueIDChoice
      // ? "In table <clients>, choose the field that is the Unique ID of the client."
      "Connection established !";

  return !loading ? (
    <div className="connect-database">
      <div className="header">
        <div className="leftside">
          <h2 className="section-heading">Database Connection</h2>
          <p className={`subtext ${isConnected ? "green" : ""}`}>{subtext}</p>
        </div>

        {/* Green tick */}
        {isConnected && (
          <img src={green_tick} alt="Connection established icon" />
        )}
      </div>

      {/*{ Remember Block }
      {tableChoice && !uniqueIDChoice && (
        <div className="remember">
          <img src={blue_bulb} alt="remember-icon" />
          <p>
            Remember this is the field, that you use to uniquely identify your
            clients in internal queries.
          </p>
        </div>
      )}*/}

      <ConnectDatabaseForm
        isConnected={isConnected}
        formData={formData}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        handleEditConnection={handleEditConnection}
        // tableChoice={tableChoice}
        // handleNextBtn={handleNextBtn}
        // uniqueIDChoice={uniqueIDChoice}
        // handleConnectBtn={handleConnectBtn}
      />
    </div>
  ) : (
    <div className="connect-database loading-screen-container">
      <div className="loading-bar">
        <div className="loading-progress"></div>
      </div>
      <p className="connecting-text">Connecting Database...</p>
    </div>
  );
};

export default ConnectDatabase;
