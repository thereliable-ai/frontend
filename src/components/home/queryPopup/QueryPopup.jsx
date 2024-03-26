import React, { useState } from "react";
import "./QueryPopup.css";
import QueryTab from "./queryTab/QueryTab";
import Button from "../../button/Button";
import edit from "../../../assets/icons/edit.svg";

const QueryPopup = ({ isOpen, closePopup }) => {
  const [viewQuery, setViewQuery] = useState(false);
  const [editQuery, setEditQuery] = useState(false);

  const openQuery = () => {
    setViewQuery(true);
  };

  const closeQuery = () => {
    setViewQuery(false);
  };

  const openQueryEdit = () => {
    document.querySelector(".sql-query").classList.add("focus");
    setEditQuery(true);
  };

  const closeQueryEdit = () => {
    setEditQuery(false);
    document.querySelector(".sql-query").classList.add("focus");
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
          <button className="popup-button" onClick={closePopup}>
            Close
          </button>
        </div>
      ) : (
        <div className="popup-content">
          <h3 className="popup-heading">Query behind 1125</h3>
          <div
            className="sql-query"
            contentEditable={`${editQuery ? true : false}`}
          >
            SELECT SUM(qty*price_each) AS answer FROM orderDetails WHERE
            orderNumber = '100'
          </div>
          {!editQuery ? (
            <div className="edit-div">
              <p>
                If query is incorrect then edit and submit the correct query.
              </p>
              <button className="small-btn edit-btn" onClick={openQueryEdit}>
                <img src={edit} alt="" />
                Edit
              </button>
            </div>
          ) : (
            <div className="submit-div">
              <p>Once you are satisfied with the query, submit it.</p>
              {/* work here */}
              <Button text="Submit" onClick="" />
            </div>
          )}

          {!editQuery ? (
            <button className="popup-button" onClick={closeQuery}>
              Back
            </button>
          ) : (
            <button className="popup-button" onClick={closeQueryEdit}>
              Back
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default QueryPopup;
