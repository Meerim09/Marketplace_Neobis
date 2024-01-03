import React, { useState } from "react";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <div class="main-container">
      <div class="left-container">
        <img
          src={process.env.PUBLIC_URL + "/Background.png"}
          alt="background"
          class="background"
        />
      </div>
      <div class="right-container">
        <input type="text" placeholder="Email" class="email-input" />
        <div className="password-container">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            class="password-input"
          />
          <span class="toggle-password" onClick={togglePasswordVisibility}>
            <FontAwesomeIcon
              className="eye-icon"
              icon={passwordVisible ? faEye : faEyeSlash}
            />
          </span>
        </div>
        <button class="login-button">Login</button>
        <button class="sign-up-button">Sign up</button>
      </div>
    </div>
  );
}

export default Login;
