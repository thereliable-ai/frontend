import React, { useState } from "react";
import ConnectDatabaseForm from "./connectDatabaseForm/connectDatabaseForm";
import "./ConnectDatabase.css";
import green_tick from "../../assets/icons/green_tick.svg";
// import blue_bulb from "../../assets/icons/blue_bulb.svg";

const ConnectDatabase = ({ onConnectionSuccess }) => {
  const [databaseConnection, setDatabaseConnection] = useState(false);
  // const [tableChoice, setTableChoice] = useState(false);
  // const [uniqueIDChoice, setUniqueIDChoice] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const databaseConnection = true;
    if (databaseConnection) {
      setDatabaseConnection(true);
    }
    
    onConnectionSuccess();
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
  const subtext = !databaseConnection
    ? "Connect your Database"
    // : !tableChoice
    // ? "Connection established !"
    // : !uniqueIDChoice
    // ? "In table <clients>, choose the field that is the Unique ID of the client."
    : "Connection established !";

  return (
    <div className="connect-database">
      <div className="header">
        <div className="leftside">
          <h2 className="section-heading">Database Connection</h2>
          <p className={`subtext ${databaseConnection ? "green" : ""}`}>
            {subtext}
          </p>
        </div>

        {/* Green tick */}
        {databaseConnection && (
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
        databaseConnection={databaseConnection}
        handleSubmit={handleSubmit}
        // editConnection={editConnection}
        // tableChoice={tableChoice}
        // handleNextBtn={handleNextBtn}
        // uniqueIDChoice={uniqueIDChoice}
        // handleConnectBtn={handleConnectBtn}
      />
    </div>
  );
};

export default ConnectDatabase;
