import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../button/Button";
import edit from "../../../assets/icons/edit.svg";
import "./connectDatabaseForm.css";

const ConnectDatabaseForm = (props) => {
  
  return !props.isConnected ? (
    <form onSubmit={props.handleFormSubmit} className="connect-database-form">
      <div className="inputDiv">
        <label htmlFor="dialect">Database type</label>
        <select
          id="dialect"
          value={props.formData.dialect}
          onChange={props.handleInputChange}
          name="dialect"
        >
          <option value="">Select DB Type</option>
          <option value="postgresql">PostgreSQL</option>
          {/* <option value="mongodb">MongoDB</option> */}
          <option value="mysql">MySQL</option>
        </select>
      </div>

      <div className="inputDiv">
        <label htmlFor="db_host">Host</label>
        <input
          type="text"
          id="db_host"
          value={props.formData.db_host}
          name="db_host"
          onChange={props.handleInputChange}
        />
      </div>

      <div className="inputDiv">
        <label htmlFor="port_number">Port</label>
        <input
          type="text"
          id="port_number"
          value={props.formData.port_number}
          name="port_number"
          onChange={props.handleInputChange}
        />
      </div>

      <div className="inputDiv">
        <label htmlFor="db_user">Username</label>
        <input
          type="text"
          id="db_user"
          value={props.formData.db_user}
          name="db_user"
          onChange={props.handleInputChange}
        />
      </div>

      <div className="inputDiv">
        <label htmlFor="db_password">Password</label>
        <input
          type="password"
          id="db_password"
          value={props.formData.db_password}
          name="db_password"
          onChange={props.handleInputChange}
        />
      </div>

      <div className="inputDiv">
        <label htmlFor="db_name">Database name</label>
        <input
          type="text"
          id="db_name"
          value={props.formData.db_name}
          name="db_name"
          onChange={props.handleInputChange}
        />
      </div>
      <Button type="submit" text="Connect" className="btn-width" />
    </form> /*): (!props.tableChoice ? (
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
      // ) */
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
        <hr className="section-end-line" />
      </div>
      <button type="submit" className="edit-btn" onClick={props.handleEditConnection}>
        <img src={edit} alt="edit-icon" />
        Edit Database Connection
      </button>
    </div>
  );
};

export default ConnectDatabaseForm;
