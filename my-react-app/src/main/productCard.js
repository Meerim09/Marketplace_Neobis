import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(product.likeCount);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <img src={product.photo} alt={product.name} />
      <p>{product.description}</p>
      <button
        onClick={handleLikeClick}
        style={{ color: isLiked ? "red" : "black" }}
      >
        Favorite {likeCount}
      </button>
    </div>
  );
};

export default ProductCard;
