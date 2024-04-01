import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../button/Button";
import edit from "../../../assets/icons/edit.svg";
import arrow_down_toggle from "../../../assets/icons/arrow_down_toggle.svg";
import arrow_right_toggle from "../../../assets/icons/arrow_right_toggle.svg";
import "./connectDatabaseForm.css";

const ConnectDatabaseForm = (props) => {
  const [isPromptVisible, setIsPromptVisible] = useState(false);

  const toggleVisibility = () => {
    setIsPromptVisible(!isPromptVisible);
  };

  // useEffect(() => {
  //   if (isPromptVisible) {
  //     document.body.style.overflow = "hidden"; // Prevent scrolling
  //   } else {
  //     document.body.style.overflow = "scroll"; // Allow scrolling
  //   }
  // }, [isPromptVisible]);

  return !props.isConnected ? (
    <form onSubmit={props.handleFormSubmit} className="connect-database-form">
      <div className="connection-details-container">
        <div className="inputDiv">
          <label htmlFor="dialect">Database type</label>
          <select
            id="dialect"
            value={props.formData.dialect}
            onChange={props.handleInputChange}
            name="dialect"
            required={true}
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
            required={true}
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
            required={true}
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
            required={true}
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
            required={true}
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
            required={true}
          />
        </div>
      </div>

      {/* Prompts */}
      <div className="prompts-container">
        <div className="prompts-header">
          <button
            onClick={toggleVisibility}
            type="button"
            className="toggle-btn"
          >
            <img
              src={`${
                isPromptVisible ? arrow_down_toggle : arrow_right_toggle
              }`}
              alt=""
            />
          </button>
          <h2 className="prompts-heading">Prompts</h2>
        </div>
        {isPromptVisible && (
          <div className="prompts-body">
            <div className="inputDiv">
              <label htmlFor="supervisor_system_prompt_prefix">
                Supervisor System Prompt Prefix
              </label>
              <textarea
                id="supervisor_system_prompt_prefix"
                value={props.formData.supervisor_system_prompt_prefix}
                name="supervisor_system_prompt_prefix"
                rows="3"
                onChange={props.handleInputChange}
              />
            </div>

            <div className="inputDiv">
              <label htmlFor="supervisor_system_prompt_suffix">
                Supervisor System Prompt Suffix
              </label>
              <textarea
                id="supervisor_system_prompt_suffix"
                value={props.formData.supervisor_system_prompt_suffix}
                name="supervisor_system_prompt_suffix"
                rows="3"
                onChange={props.handleInputChange}
              />
            </div>

            <div className="inputDiv">
              <label htmlFor="clarification_agent_prompt">
                Clarification Agent Prompt
              </label>
              <textarea
                id="clarification_agent_prompt"
                value={props.formData.clarification_agent_prompt}
                name="clarification_agent_prompt"
                rows="3"
                onChange={props.handleInputChange}
              />
            </div>

            <div className="inputDiv">
              <label htmlFor="sql_agent_prompt">SQL Agent Prompt</label>
              <textarea
                id="sql_agent_prompt"
                value={props.formData.sql_agent_prompt}
                name="sql_agent_prompt"
                rows="3"
                onChange={props.handleInputChange}
              />
            </div>

            <div className="inputDiv">
              <label htmlFor="sql_query_generator_tool_prompt">
                SQL Query Generator Tool Prompt
              </label>
              <textarea
                id="sql_query_generator_tool_prompt"
                value={props.formData.sql_query_generator_tool_prompt}
                name="sql_query_generator_tool_prompt"
                rows="3"
                onChange={props.handleInputChange}
              />
            </div>

            <div className="inputDiv">
              <label htmlFor="human_tool_description">
                Human Tool Description
              </label>
              <textarea
                id="human_tool_description"
                value={props.formData.human_tool_description}
                name="human_tool_description"
                rows="3"
                onChange={props.handleInputChange}
              />
            </div>

            <div className="inputDiv">
              <label htmlFor="sql_query_generator_tool_description">
                SQL Query Generator Tool Description
              </label>
              <textarea
                id="sql_query_generator_tool_description"
                value={props.formData.sql_query_generator_tool_description}
                name="sql_query_generator_tool_description"
                rows="3"
                onChange={props.handleInputChange}
              />
            </div>
          </div>
        )}
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
      <button
        type="submit"
        className="edit-btn"
        onClick={props.handleEditConnection}
      >
        <img src={edit} alt="edit-icon" />
        Edit Database Connection
      </button>
    </div>
  );
};

export default ConnectDatabaseForm;
