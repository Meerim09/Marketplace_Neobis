import React, { useState } from "react";
import "./profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faArrowLeft,
  faHeart,
  faCircleArrowRight,
  faDumpster,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import FavoriteComponent from "./favorite";
import PhoneNumberModal from "./PhoneNumberModal";

function Profile() {
  const [isFavoriteOpen, setIsFavoriteOpen] = useState(false);
  const [isRegistered, setIsRegistered] =
    useState(/* Логика проверки завершенной регистрации */);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBackClick = () => {
    console.log("Back button clicked");
  };

  const handleLikeClick = () => {
    if (isRegistered) {
      setIsFavoriteOpen(!isFavoriteOpen);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="key-container">
      <div className="profile-container">
        <div className="user-info">
          <FontAwesomeIcon icon={faUser} className="user-icon" />
          <div className="user-name-nickname">
            <span className="user-name"> User Name</span>
            <span className="user-nickname"> User Nickname</span>
          </div>
        </div>
        <div className="user-menu">
          <div className="favorite">
            <FontAwesomeIcon
              className="profile-nav-icon"
              icon={faHeart}
              style={{ marginRight: "2px" }}
            />
            <span className="profile-nav-text">Favorite</span>
            <button className="arrow-icon-button" onClick={handleLikeClick}>
              <FontAwesomeIcon icon={faCircleArrowRight} />
            </button>
            {isFavoriteOpen && <FavoriteComponent />}
          </div>
          <div className="my-goods">
            <FontAwesomeIcon
              className="profile-nav-icon"
              icon={faDumpster}
              style={{ marginRight: "2px" }}
            />
            <span className="profile-nav-text">My Goods</span>
            <button className="arrow-icon-button" onClick={handleLikeClick}>
              <FontAwesomeIcon icon={faCircleArrowRight} />
            </button>
          </div>
          <div className="logout">
            <FontAwesomeIcon
              className="profile-nav-icon"
              icon={faSignOutAlt}
              style={{ marginRight: "2px" }}
            />
            <span className="profile-nav-text">Log Out</span>
            <button className="arrow-icon-button" onClick={handleLikeClick}>
              <FontAwesomeIcon icon={faCircleArrowRight} />
            </button>
          </div>
        </div>
      </div>
      <div className="personal-data-container">
        <div className="header-profile-container">
          <div className="back-container">
            <button className="back-button" onClick={() => handleBackClick()}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <span className="back-text">Back</span>
          </div>
          <div>
            <span className="profile-text">Profile</span>
          </div>
          <div></div>
        </div>
        <div className="personal-data">
          <div className="picture-and-selection">
            <FontAwesomeIcon icon={faUser} className="main-user-icon" />
            <button className="select-picture-button">Select picture</button>
          </div>
          <div className="profile-fields-section">
            <input type="text" id="name" name="name" placeholder="Name" />
            <input
              type="text"
              id="surname"
              name="surname"
              placeholder="Surname"
            />
            <input
              type="text"
              id="birthdate"
              name="birthdate"
              placeholder="dd.mm.yyyy"
            />
            <div className="phone-input">
              <button className="edit-button" onClick={openModal}>
                Add phone number
              </button>

              <PhoneNumberModal isOpen={isModalOpen} onClose={closeModal} />
              <input
                className="phone-number"
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                defaultValue=""
                placeholder="+0(000) 000 000 000"
                readOnly
              />
            </div>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="user@example.com"
            />
          </div>
          <button className="save-button" disabled>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
