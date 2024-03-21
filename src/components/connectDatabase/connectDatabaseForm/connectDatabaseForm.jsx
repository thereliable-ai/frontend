import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../button/Button";
import edit from "../../../assets/icons/edit.svg";
import "./connectDatabaseForm.css";

const ConnectDatabaseForm = (props) => {
  const [databaseType, setDatabaseType] = useState("");
  const [host, setHost] = useState("");
  const [port, setPort] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  // const [table, setTable] = useState("");
  // const [uniqueID, setUniqueID] = useState("");

  return !props.databaseConnection ? (
    (<form onSubmit={props.handleSubmit} className="connect-database-form">
      <div className="inputDiv">
        <label htmlFor="databaseType">Database type</label>
        <select
          id="databaseType"
          value={databaseType}
          onChange={(e) => setDatabaseType(e.target.value)}
        >
          <option value="">Select DB Type</option>
          <option value="PostgreSQL">PostgreSQL</option>
          <option value="MongoDB">MongoDB</option>
          <option value="MySQL">MySQL</option>
        </select>
      </div>

      <div className="inputDiv">
        <label htmlFor="host">Host</label>
        <input
          type="text"
          id="host"
          value={host}
          onChange={(e) => setHost(e.target.value)}
        />
      </div>

      <div className="inputDiv">
        <label htmlFor="port">Port</label>
        <input
          type="text"
          id="port"
          value={port}
          onChange={(e) => setPort(e.target.value)}
        />
      </div>

      <div className="inputDiv">
        <label htmlFor="user">User</label>
        <input
          type="text"
          id="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>

      <div className="inputDiv">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <Button type="submit" text="Connect" className="btn-width" />
    </form> /*: !props.tableChoice ? (
      //   <form onSubmit={props.handleNextBtn} className="selectForm">
      //     <p className="subtext">
      //       Now choose the table that contains the unique ID of each of your
      //       clients
      //     </p>
      //     <div className="inputDiv selectDiv">
      //       <label htmlFor="table">Table</label>
      //       <select
      //         id="table"
      //         value={table}
      //         onChange={(e) => setTable(e.target.value)}
      //       >
      //         <option value="">Select Table</option>
      //         <option value="Clients">Clients</option>
      //         <option value="Subscriptions">Subscriptions</option>
      //         <option value="Finance">Finance</option>
      //       </select>
      //     </div>
      //     <button type="submit" className="rightSideBtn">
      //       Next
      //     </button>
      //   </form>
      // ) : !props.uniqueIDChoice ? (
      //   <form onSubmit={props.handleConnectBtn} className="selectForm">
      //     <div className="inputDiv selectDiv">
      //       <label htmlFor="uniqueID">Field</label>
      //       <select
      //         id="uniqueID"
      //         value={uniqueID}
      //         onChange={(e) => setUniqueID(e.target.value)}
      //       >
      //         <option value="">Select Unique ID</option>
      //         <option value="Client ID">Client ID</option>
      //         <option value="Phone Number">Phone Number</option>
      //         <option value="Email">Email</option>
      //       </select>
      //     </div>
      //     <button type="submit" className="rightSideBtn">
      //       Connect
      //     </button>
      //   </form>
      // ) */ /*: !props.tableChoice ? (
      //   <form onSubmit={props.handleNextBtn} className="selectForm">
      //     <p className="subtext">
      //       Now choose the table that contains the unique ID of each of your
      //       clients
      //     </p>
      //     <div className="inputDiv selectDiv">
      //       <label htmlFor="table">Table</label>
      //       <select
      //         id="table"
      //         value={table}
      //         onChange={(e) => setTable(e.target.value)}
      //       >
      //         <option value="">Select Table</option>
      //         <option value="Clients">Clients</option>
      //         <option value="Subscriptions">Subscriptions</option>
      //         <option value="Finance">Finance</option>
      //       </select>
      //     </div>
      //     <button type="submit" className="rightSideBtn">
      //       Next
      //     </button>
      //   </form>
      // ) : !props.uniqueIDChoice ? (
      //   <form onSubmit={props.handleConnectBtn} className="selectForm">
      //     <div className="inputDiv selectDiv">
      //       <label htmlFor="uniqueID">Field</label>
      //       <select
      //         id="uniqueID"
      //         value={uniqueID}
      //         onChange={(e) => setUniqueID(e.target.value)}
      //       >
      //         <option value="">Select Unique ID</option>
      //         <option value="Client ID">Client ID</option>
      //         <option value="Phone Number">Phone Number</option>
      //         <option value="Email">Email</option>
      //       </select>
      //     </div>
      //     <button type="submit" className="rightSideBtn">
      //       Connect
      //     </button>
      //   </form>
      // ) */ /*: !props.tableChoice ? (
      //   <form onSubmit={props.handleNextBtn} className="selectForm">
      //     <p className="subtext">
      //       Now choose the table that contains the unique ID of each of your
      //       clients
      //     </p>
      //     <div className="inputDiv selectDiv">
      //       <label htmlFor="table">Table</label>
      //       <select
      //         id="table"
      //         value={table}
      //         onChange={(e) => setTable(e.target.value)}
      //       >
      //         <option value="">Select Table</option>
      //         <option value="Clients">Clients</option>
      //         <option value="Subscriptions">Subscriptions</option>
      //         <option value="Finance">Finance</option>
      //       </select>
      //     </div>
      //     <button type="submit" className="rightSideBtn">
      //       Next
      //     </button>
      //   </form>
      // ) : !props.uniqueIDChoice ? (
      //   <form onSubmit={props.handleConnectBtn} className="selectForm">
      //     <div className="inputDiv selectDiv">
      //       <label htmlFor="uniqueID">Field</label>
      //       <select
      //         id="uniqueID"
      //         value={uniqueID}
      //         onChange={(e) => setUniqueID(e.target.value)}
      //       >
      //         <option value="">Select Unique ID</option>
      //         <option value="Client ID">Client ID</option>
      //         <option value="Phone Number">Phone Number</option>
      //         <option value="Email">Email</option>
      //       </select>
      //     </div>
      //     <button type="submit" className="rightSideBtn">
      //       Connect
      //     </button>
      //   </form>
      // ) */)
  ) : (
    <div>
      <div className="content">
        <p className="para">
          You can now Chat with your Databse, gain insights and make informed
          decisions with ease.
        </p>
        <Link to="/">
          <Button text="Chat with Database" />
        </Link>
        <hr />
      </div>
      <button
        type="submit"
        className="edit-btn"
      >
        <img src={edit} alt="edit-icon" />
        Edit Database Connection
      </button>
    </div>
  );
};

export default ConnectDatabaseForm;
