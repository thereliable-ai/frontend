import React from 'react';
import arrow_right from "../../../../assets/icons/arrow_right.svg";
import "./QueryTab.css";

const QueryTab = (props) => {
  return (
    <div className="query-tab" onClick={props.onClick} >
        <img src={arrow_right} alt="icon" className='query-tab-icon'/>
        <p>{props.text}</p>
    </div>
  )
}

export default QueryTab