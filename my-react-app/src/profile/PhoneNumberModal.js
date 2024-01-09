import { React, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./phoneNumberModal.css";

const PhoneNumberModal = ({ isOpen, onClose }) => {
  const [value, setValue] = useState("");

  if (!isOpen) return null;

  return (
    <div className="modal-background">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>
          {" "}
          X{" "}
        </button>
        <div className="title">
          <h1>Change Phone Number</h1>
        </div>
        <div className="body">
          <div className="phone-number-container">
            <FontAwesomeIcon icon={faPhone} className="phone-icon" />
            <p className="phone-number-text">Enter the phone number</p>
            <p className="phone-number-info-text">
              We will send you an SMS with a confirmation code.
            </p>
          </div>
          <PhoneInput
            className="phone-number-input"
            placeholder="+0(000)000-00-00"
            value={""}
            onChange={""}
          />
          {value}
        </div>
        <button className="phone-number-btn">Next</button>
      </div>
    </div>
  );
};

export default PhoneNumberModal;
