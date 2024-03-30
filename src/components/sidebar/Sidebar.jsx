import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import Tab from "./tab/Tab";

import home from "../../assets/icons/Home.svg";
import database from "../../assets/icons/Database.svg";
import link from "../../assets/icons/Link.svg";
import profile from "../../assets/icons/Profile.svg";
import logout from "../../assets/icons/Logout.svg";

const Sidebar = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveTab(0);
        break;
      case "/connect-database":
        setActiveTab(1);
        break;
      case "/create-links":
        setActiveTab(2);
        break;
      case "/profile":
        setActiveTab(3);
        break;
      default:
        setActiveTab(0);
        break;
    }
  }, [location.pathname]);

  return (
    <div className="sidebar">
      <p className="logo">thereliable.ai</p>

      <nav className="nav-menu">
        <div className="top-menu">
          <Link to="/">
            <Tab icon={home} label="Home" isActive={activeTab === 0} />
          </Link>
          <Link to="/connect-database">
            <Tab icon={database} label="Connect DB" isActive={activeTab === 1}/>
          </Link>
          {/* <Link to="/create-links">
            <Tab icon={link} label="Create Links" isActive={activeTab === 2} />
          </Link> */}
        </div>

        <div className="bottom-menu">
          {/* <Link to="/profile">
            <Tab icon={profile} label="Profile" isActive={activeTab === 3} />
          </Link> */}
          <Tab icon={logout} label="Logout" onClick={props.handleLogout}/>
        </div>
      </nav>
      
    </div>
  );
};

export default Sidebar;
