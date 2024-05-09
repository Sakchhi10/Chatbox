import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "./email.png";
import email_icon from "./password.png";
import { BiShowAlt, BiSolidShow } from "react-icons/bi";
import password_icon from "./person.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newItem = { name, email, password };
    console.log(newItem);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text ">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input ">
          <img src={user_icon} alt="" />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Id"
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <br />
            <div className="input-group-append">
              <button
                className="btn btn-light"
                type="button"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <BiShowAlt /> : <BiSolidShow />}
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="submit-container btn btn-primary"
        >
          <Link to="/Home" className="submit">
            Sign Up
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
