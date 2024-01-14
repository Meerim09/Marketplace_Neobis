import React, { useState } from "react";
import "./productCards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ProductCards = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(100);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="product-card-container">
      <div className="product-card">
        <div className="product-card-image">
          <img
            src={process.env.PUBLIC_URL + product.imageUrl}
            alt={product.name}
            className="product-image"
          />
        </div>
        <div className="product-card-info">
          <div className="product-card-name">{product.name}</div>
          <div className="product-card-price">{product.price}</div>
          <div className="product-card-like">
            <button
              className="product-card-like-button"
              onClick={handleLikeClick}
            >
              <FontAwesomeIcon
                icon={faHeart}
                style={{ color: isLiked ? "red" : "lightgray" }}
                className={`product-card-like-icon ${
                  isLiked ? "liked" : "not-liked"
                }`}
              />
            </button>
            <span className="product-card-like-count">{likeCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
