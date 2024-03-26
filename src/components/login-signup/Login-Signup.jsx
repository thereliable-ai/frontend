import React, { useState } from "react";
import "./Login-Signup.css";
import Button from "../button/Button";

const LoginSignup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkpassword, confirmPassword] = useState("");

  return props.isSignedUp ? (
    <div className="login">
      <h1 className="logo">thereliable.ai</h1>
      <form onSubmit={props.handleLogin} className="form">
        <div className="inputDiv vertical">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputDiv vertical">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" text="Login" />
        <p className="login-signup-exchange">
          Don't have an accout?{" "}
          <span className="login-signup-link" onClick={props.GoToSignup}>
            Sign Up
          </span>
        </p>
      </form>
    </div>
  ) : (
    <div className="signup">
      <h1 className="logo">thereliable.ai</h1>
      <form onSubmit={props.handleSignup} className="form">
        <div className="inputDiv vertical">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputDiv vertical">
          <label htmlFor="set-password">Set Password</label>
          <input
            type="password"
            id="set-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="inputDiv vertical">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            value={checkpassword}
            onChange={(e) => confirmPassword(e.target.value)}
          />
        </div>
        <Button type="submit" text="Verify & Signup" />
        <p className="login-signup-exchange">
          Already have an accout?{" "}
          <span className="login-signup-link" onClick={props.GoToLogin}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginSignup;

{
  /* <div className="signup">
      <h1 className="logo">thereliable.ai</h1>
      <form onSubmit={props.handleSignup} className="form">
        <div className="inputDiv vertical">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputDiv vertical">
          <label htmlFor="set-password">Set Password</label>
          <input
            type="password"
            id="set-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="inputDiv vertical">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            value={checkpassword}
            onChange={(e) => confirmPassword(e.target.value)}
          />
        </div>
        <Button type="submit" text="Sign Up" />
      </form>
    </div> */
}
