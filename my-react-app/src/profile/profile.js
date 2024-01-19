import React, { useEffect, useState } from "react";
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
import PhoneNumberModal from "./phoneNumberModal";
import { useNavigate } from "react-router-dom";
import { fetchFromAPI, PROFILE_DATA_URL } from "../utils/api";

function Profile() {
  const [profileData, setProfileData] = useState({
    name: "",
    last_name: "",
    photo: "",
    birth_date: "",
    username: "",
    email: "",
    user: "",
  });
  const navigate = useNavigate();
  const [isFavoriteOpen, setIsFavoriteOpen] = useState(false);
  const [isRegistered, setIsRegistered] =
    useState(/* Логика проверки завершенной регистрации */);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = React.createRef();

  const handleBackClick = () => {
    navigate("/login");
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
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

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await fetchFromAPI(PROFILE_DATA_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error("Error fetching profile data:", error.message);
      }
    };

    fetchProfileData();
  }, []);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  };

  return (
    <div className="key-container">
      <div className="profile-container">
        <div className="user-info">
          {selectedImage ? (
            <img src={selectedImage} alt="User" className="user-icon" />
          ) : (
            <FontAwesomeIcon icon={faUser} className="user-icon" />
          )}
          <div className="user-username">
            <span className="user"> User</span>
            <span className="username"> User Name</span>
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
            <FontAwesomeIcon
              icon={selectedImage ? null : faUser}
              className={`main-user-icon ${selectedImage ? "user-icon" : ""}`}
            />
            {selectedImage && (
              <img src={selectedImage} alt="User" className="user-icon" />
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="file-input"
            />
          </div>
          <div className="profile-fields-section">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={profileData.name}
              readOnly
            />
            <input
              type="text"
              id="surname"
              name="last_name"
              placeholder="Surname"
              value={profileData.last_name}
              readOnly
            />
            <input
              type="text"
              id="user"
              name="user"
              placeholder="User"
              value={profileData.user}
              readOnly
            />
            <input
              type="date"
              id="birthdate"
              name="birth_date"
              placeholder="dd.mm.yyyy"
              value={profileData.birth_date}
              readOnly
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
              value={profileData.email}
              readOnly
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
