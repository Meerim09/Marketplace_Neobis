import React, { useState } from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { LOGIN_URL, fetchFromAPI } from "../utils/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleLogin = async () => {
    try {
      const requestBody = {
        username,
        password,
      };

      const responseData = await fetchFromAPI(LOGIN_URL, "POST", requestBody);
      return responseData;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const handleLoginClick = async () => {
    const userName = username;
    const userPassword = password;

    try {
      const responseData = await handleLogin(userName, userPassword);

      alert("Successful Auth!");
      navigate("/profile");
      return responseData;
    } catch (error) {
      alert("An error occurred during login. Please try again later.");
    }
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div className="main-container">
      <div className="left-container">
        <img
          src={process.env.PUBLIC_URL + "/Background.png"}
          alt="background"
          className="background"
        />
      </div>
      <div className="right-container">
        <div className="centered-container">
          <input
            type="text"
            placeholder="User Name"
            className="username-input"
            value={username}
            onChange={handleUserNameChange}
          />
          <div className="password-login-container">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="password-input"
              value={password}
              onChange={handlePasswordChange}
            />
            <span
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon
                className="eye-icon"
                icon={passwordVisible ? faEye : faEyeSlash}
              />
            </span>
          </div>
          <button className="login-button" onClick={handleLoginClick}>
            Login
          </button>
        </div>
        <button className="sign-up-button" onClick={handleSignUpClick}>
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Login;
