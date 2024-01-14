import React, { useState } from "react";
import "./signUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faArrowLeft,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { SIGNUP_URL } from "../utils/api";

function SignUp() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isNextButtonClicked, setIsNextButtonClicked] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleBackClick = () => {
    navigate("/login");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSignUpButton = async () => {
    if (password.length < 8 || password.length > 15) {
      alert("Length of the password must be between 8 and 15 characters");
      return;
    }

    if (
      !/[a-z]/.test(password) ||
      !/[A-Z]/.test(password) ||
      !/\d/.test(password) ||
      !/[\W_]/.test(password)
    ) {
      alert(
        "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character",
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const user = {
      username: userName,
      email: email,
      password: password,
      password_check: confirmPassword,
    };

    console.log("SIGNUP_URL:", SIGNUP_URL);
    console.log("method:", "POST");
    console.log("user:", user);

    try {
      const response = await fetch(SIGNUP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        alert("User registered successfully");
        navigate("/login");
      } else {
        alert("User registration failed");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error during registration:", error);
      alert("Error during registration");
    }
  };

  const handleNextButton = () => {
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(email)) {
      alert("Wrong email address format");
      return;
    }

    if (!/^[A-Za-z]+$/.test(userName)) {
      alert("User name must contain only latin letters");
      return;
    }

    setIsNextButtonClicked(true);
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
        <div className="sign-up-container">
          <div className="back">
            <button className="back-button" onClick={handleBackClick}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <span className="back-text">Back</span>
          </div>
          <div>
            <span className="sign-up-text">Sign up</span>
          </div>
          <div>
            {isNextButtonClicked && (
              <button
                className="toggle-password-input"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
              </button>
            )}
          </div>
        </div>
        <div>
          {isNextButtonClicked ? (
            <div className="password-container">
              <div className="password-icon-container">
                <FontAwesomeIcon icon={faLock} className="lock-icon" />
                <p className="password-main-text">Repeat the password</p>
                <p className="password-info-text">
                  Minimum length — 8 symbols. <br /> For security, the password
                  should contain letters and numbers.
                </p>
              </div>
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                className="password-input"
                value={password}
                onChange={handlePasswordChange}
              />
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Confirm Password"
                className="confirm-password-input"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              <button className="login-button" onClick={handleSignUpButton}>
                Sign Up
              </button>
            </div>
          ) : (
            <div className="password-container">
              <input
                type="text"
                placeholder="User Name"
                className="user-name-input"
                value={userName}
                onChange={handleUserNameChange}
              />
              <input
                type="text"
                placeholder="Email"
                className="email"
                value={email}
                onChange={handleEmailChange}
              />
              <button className="login-button" onClick={handleNextButton}>
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
