import React, { useState } from "react";
import "./signUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faArrowLeft,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

function SignUp() {
  const [email, setEmail] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isPasswordRecovery, setIsPasswordRecovery] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleBackClick = () => {
    console.log("Back button clicked");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePasswordRecovery = () => {
    // Implement logic to set a new password
    // ...

    // Once password is set, reset the state to normal login
    setIsPasswordRecovery(false);
  };

  const handleRegisterButton = () => {
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(email)) {
      alert("Wrong email address format");
      return;
    }

    if (!/^[A-Za-z]+$/.test(login)) {
      alert("Login must contain only latin letters");
      return;
    }

    if (password.length < 8 || password.length > 15) {
      alert("Length of password must be between 8 and 15 characters");
      return;
    }

    if (
      !/[a-z]/.test(password) ||
      !/[A-Z]/.test(password) ||
      !/\d/.test(password) ||
      !/[\W_]/.test(password)
    ) {
      alert(
        "Password must contain at least one lowercase letter, one uppercase letter, one digit and one special character",
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
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
            <button className="back-button" onClick={() => handleBackClick()}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <span className="back-text">Back</span>
          </div>
          <div>
            <span className="sign-up-text">Sign up</span>
          </div>
          <div>
            {isPasswordRecovery && (
              <button
                className="toggle-recovery-password"
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
              </button>
            )}
          </div>
        </div>
        <div className="centered-container">
          {isPasswordRecovery ? (
            <div className="password-recovery-container">
              <div className="password-icon-container">
                <FontAwesomeIcon icon={faLock} className="lock-icon" />
                <p className="password-recovery-main-text">
                  Repeat the password
                </p>
                <p className="password-recovery-info-text">
                  Minimum length — 8 symbols. <br /> For security, the password
                  should contain letters and numbers.
                </p>
              </div>
              <input
                type="password"
                placeholder="New Password"
                className="recovery-input"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="confirm-input"
              />
              <button className="login-button" onClick={handlePasswordRecovery}>
                Set New Password
              </button>
            </div>
          ) : (
            <div>
              <input
                type="text"
                placeholder="Email"
                className="email-input"
                value={email}
                onChange={handleEmailChange}
              />
              <div className="password-container">
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
                {!isPasswordRecovery && (
                  <span
                    className="forgot-password"
                    onClick={() => setIsPasswordRecovery(true)}
                  >
                    Did you forget your password?
                  </span>
                )}
              </div>
              <button className="login-button" onClick={handleRegisterButton}>
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
