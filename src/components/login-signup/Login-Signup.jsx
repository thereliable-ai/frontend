import React, { useState } from "react";
import "./Login-Signup.css";
import Button from "../button/Button";
import google from "../../assets/icons/google.svg";

const LoginSignup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkpassword, confirmPassword] = useState("");

  return (
    <div className="page-container">
      <div className="left-container">
        <span className="logo">thereliable.ai</span>
      </div>
      <div className="login-signup-container-background">
        {props.isSignedUp ? (
          <div className="login-container">
            <div className="login">
              <h3 className="welcome-text">
                Welcome back to{" "}
                <span className="highlight">thereliable.ai</span>
              </h3>
              <p className="form-name">Login to your Account</p>
              <form onSubmit={props.handleLogin} className="form">
                <div className="inputDiv-main ">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="inputDiv-main">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <p className="forgot">Forgot password?</p>
                <Button type="submit" text="L0GIN" />
                <div className="or-block">
                  <hr className="or-line" />
                  Or
                  <hr className="or-line" />
                </div>

                <button className="google-btn">
                  <img src={google} alt="google-icon" />
                  Login with Google
                </button>
              </form>

              <p className="login-signup-exchange">
                Don't have an accout?{" "}
                <span className="login-signup-link" onClick={props.GoToSignup}>
                  SignUp
                </span>
              </p>
            </div>
          </div>
        ) : (
          <div className="signup-container">
            <div className="signup">
              <h3 className="welcome-text">
                Welcome to <span className="highlight">thereliable.ai</span>
              </h3>
              <p className="form-name">Create your Account</p>
              <form onSubmit={props.handleSignup} className="form">
                <div className="inputDiv-main">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="inputDiv-main">
                  <label htmlFor="set-password">Set Password</label>
                  <input
                    type="password"
                    id="set-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="inputDiv-main">
                  <label htmlFor="confirm-password">Confirm Password</label>
                  <input
                    type="password"
                    id="confirm-password"
                    value={checkpassword}
                    onChange={(e) => confirmPassword(e.target.value)}
                  />
                </div>
                <Button type="submit" text="SIGNUP" />
                <div className="or-block">
                  <hr className="or-line" />
                  Or
                  <hr className="or-line" />
                </div>

                <button className="google-btn">
                  <img src={google} alt="google-icon" />
                  Signup with Google
                </button>
              </form>

              <p className="login-signup-exchange">
                Already have an account?{" "}
                <span className="login-signup-link" onClick={props.GoToLogin}>
                  Login
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
