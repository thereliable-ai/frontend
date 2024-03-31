import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginSignup from "./components/login-signup/Login-Signup";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/home/Home";
import ConnectDatabase from "./components/connectDatabase/ConnectDatabase";
import CreateLinks from "./components/createLinks/CreateLinks";
import "../src/App.css";

const App = () => {
  const [isSignedUp, setIsSignedUp] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Check if the current path is not "/", then redirect to "/"
    if (window.location.pathname !== "/") {
      window.location.href = "/";
    }
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleSignup = () => {
    setIsSignedUp(true);
  };

  const GoToSignup = () => {
    setIsSignedUp(false);
  };

  const GoToLogin = () => {
    setIsSignedUp(true);
  };

  return !isLoggedIn ? (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <LoginSignup
              isSignedUp={isSignedUp}
              handleLogin={handleLogin}
              handleSignup={handleSignup}
              GoToLogin={GoToLogin}
              GoToSignup={GoToSignup}
            />
          }
        ></Route>
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
                isConnected={isConnected}
                onConnectionSuccess={() => setIsConnected(true)}
                onConnectionDisconnect={() => setIsConnected(false)}
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
