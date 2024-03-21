import React, { useState } from "react";
import "./Login.css";
import Button from "../button/Button";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <h1 className="logo">thereliable.ai</h1>
      <form onSubmit={props.handleLogin} className="login-form">
        <div className="inputDiv">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button type="submit" text="Login" />
      </form>
    </div>
  );
};

export default Login;
