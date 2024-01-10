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

  // handleLogin = async () => {
  //   const requestBody = {
  //     username,
  //     password,
  //   };

  //   try {
  //     const responseData = await fetchFromAPI(LOGIN_URL, "POST", requestBody);
  //     console.log("Login response:", responseData);
  //navigate("/profile");
  //   } catch (error) {
  //     console.error("Login error:", error);
  //   }
  // };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
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
          <input type="text" placeholder="Email" className="email-input" />
          <div className="password-login-container">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="password-input"
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
          <button className="login-button">Login</button>
        </div>
        <button className="sign-up-button" onClick={handleSignUpClick}>
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Login;
