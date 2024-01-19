import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import "./addMyGoodsModal.css";

const AddMyGoodsModal = ({ isOpen, onClose }) => {
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");

  const handleAddButtonClick = async () => {
    try {
      const response = await fetch(
        "https://kunasyl-backender.org.kg/goods/product/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer YOUR_AUTH_TOKEN", // Replace with your actual token
          },
          body: JSON.stringify({
            title: name,
            price: parseInt(price),
            short_description: shortDescription,
            long_description: longDescription,
            user: 1, // Replace with the actual user ID or get it dynamically
            likes: [],
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to add the goods. Please try again.");
      }

      const responseData = await response.json();
      console.log("Data sent to the server:", responseData);

      // Close the modal or perform any other action upon successful addition
      onClose();
    } catch (error) {
      console.error("Error adding goods:", error.message);
      // Handle the error or display an error message to the user
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-background">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div className="add-picture-container">
          <FontAwesomeIcon icon={faImage} className="add-picture-icon" />
          <p className="add-picture-text">Add Picture</p>
        </div>
        <div className="add-picture-input-container">
          <input
            className="add-picture-price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            className="add-picture-name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="add-picture-short-description"
            placeholder="Short description"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
          />
          <input
            className="add-picture-long-description"
            placeholder="Long description"
            value={longDescription}
            onChange={(e) => setLongDescription(e.target.value)}
          />
        </div>
        <button className="add-btn" onClick={handleAddButtonClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddMyGoodsModal;
