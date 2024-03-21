import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import ConnectDatabase from "./components/connectDatabase/ConnectDatabase";
import CreateLinks from "./components/createLinks/CreateLinks";
import "../src/App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return !isLoggedIn ? (
    <Router>
      <Routes>
        <Route path="/" element={<Login handleLogin={handleLogin} />}></Route>
      </Routes>
    </Router>
  ) : (
    <Router>
      <div className="app">
        <Sidebar handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home isConnected={isConnected} />} />
          <Route
            path="/connect-database"
            element={
              <ConnectDatabase
                onConnectionSuccess={() => setIsConnected(true)}
              />
            }
          />
          <Route
            path="/create-links"
            element={<CreateLinks isConnected={isConnected} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
