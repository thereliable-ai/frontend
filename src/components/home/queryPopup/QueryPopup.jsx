import React, { useState } from "react";
import "./QueryPopup.css";
import QueryTab from "./queryTab/QueryTab";

const QueryPopup = ({ isOpen, closePopup }) => {
  const [viewQuery, setViewQuery] = useState("false");

  const openQuery = () => {
    setViewQuery(true);
  };

  const closeQuery = () => {
    setViewQuery(false);
  };

  return (
    <div className={`query-popup ${isOpen ? "open" : ""}`}>
      {!viewQuery ? (
        <div className="popup-content">
          <h3 className="popup-heading">SQL Queries</h3>
          <div className="query-list">
            <QueryTab text="Query behind 1125" onClick={openQuery} />
            <QueryTab text="Query behind 900" onClick={openQuery} />
          </div>
        </div>
      ) : (
        <div className="popup-content">
          <h3 className="popup-heading">Query behind 1125</h3>
          <div className="sql-query">
            SELECT 
            SUM(qty*price_each) AS answer 
            FROM orderDetails 
            WHERE orderNumber = '100'
          </div>
        </div>
      )}
      <button
        className="close-button"
        onClick={!viewQuery ? closePopup : closeQuery}
      >
        Close
      </button>
    </div>
  );
};

export default QueryPopup;
