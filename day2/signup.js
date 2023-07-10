import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangeContact = (e) => {
    setContact(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container1">
      <div className="form-container1">
        <form onChange={handleSubmit}>
          <div className="input">
            <h1>SIGN UP</h1>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleChangeUsername}
            />
            <input
              type="text"
              placeholder="Contact Number"
              value={contact}
              onChange={handleChangeContact}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleChangeEmail}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleChangePassword}
            />
            <button className="btn">
              <strong>Submit</strong>
            </button>
            <Link to="/" className="link">
              <strong>Back</strong>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
