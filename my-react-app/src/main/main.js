import React from "react";
import ProductCards from "./productCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./main.css";

const MainPage = () => {
  const products = [
    {
      name: "BMW M4 Coupe: A Two-Door",
      price: "$23 000",
      imageUrl: "/Car.png",
    },
    {
      name: "BMW M4 Coupe: A Two-Door",
      price: "$23 000",
      imageUrl: "/Car.png",
    },
    {
      name: "BMW M4 Coupe: A Two-Door",
      price: "$23 000",
      imageUrl: "/Car.png",
    },
    { name: "Adidas Yeezy 500", price: "$23 000", imageUrl: "/Shoes.png" },
    { name: "Adidas Yeezy 500", price: "$23 000", imageUrl: "/Shoes.png" },
    { name: "Adidas Yeezy 500", price: "$23 000", imageUrl: "/Shoes.png" },
    { name: "Adidas Yeezy 500", price: "$23 000", imageUrl: "/Shoes.png" },
    { name: "Adidas Yeezy 500", price: "$23 000", imageUrl: "/Shoes.png" },
    {
      name: "BMW M4 Coupe: A Two-Door",
      price: "$23 000",
      imageUrl: "/Car.png",
    },
    {
      name: "BMW M4 Coupe: A Two-Door",
      price: "$23 000",
      imageUrl: "/Car.png",
    },
    {
      name: "BMW M4 Coupe: A Two-Door",
      price: "$23 000",
      imageUrl: "/Car.png",
    },
    { name: "Adidas Yeezy 500", price: "$23 000", imageUrl: "/Shoes.png" },
    { name: "Adidas Yeezy 500", price: "$23 000", imageUrl: "/Shoes.png" },
    { name: "Adidas Yeezy 500", price: "$23 000", imageUrl: "/Shoes.png" },
    { name: "Adidas Yeezy 500", price: "$23 000", imageUrl: "/Shoes.png" },
    { name: "Adidas Yeezy 500", price: "$23 000", imageUrl: "/Shoes.png" },
    {
      name: "BMW M4 Coupe: A Two-Door",
      price: "$23 000",
      imageUrl: "/Car.png",
    },
    {
      name: "BMW M4 Coupe: A Two-Door",
      price: "$23 000",
      imageUrl: "/Car.png",
    },
    {
      name: "BMW M4 Coupe: A Two-Door",
      price: "$23 000",
      imageUrl: "/Car.png",
    },
    { name: "Adidas Yeezy 500", price: "$23 000", imageUrl: "/Shoes.png" },
    { name: "Adidas Yeezy 500", price: "$23 000", imageUrl: "/Shoes.png" },
    { name: "Adidas Yeezy 500", price: "$23 000", imageUrl: "/Shoes.png" },
    { name: "Adidas Yeezy 500", price: "$23 000", imageUrl: "/Shoes.png" },
    { name: "Adidas Yeezy 500", price: "$23 000", imageUrl: "/Shoes.png" },
  ];

  const columns = 8;
  const rows = 4;

  const renderProductGrid = () => {
    const totalProducts = columns * rows;
    const duplicatedProducts = [];

    // Duplicate the products array to have enough items to fill the grid
    for (let i = 0; i < Math.ceil(totalProducts / products.length); i++) {
      duplicatedProducts.push(...products);
    }

    return duplicatedProducts
      .slice(0, totalProducts)
      .map((product, index) => <ProductCards key={index} product={product} />);
  };

  return (
    <div className="main-page-container">
      <div className="main-page-header">
        <div className="main-page-left">
          <img
            src={process.env.PUBLIC_URL + "/Market.png"}
            alt="market-icon"
            className="market-icon"
          />
          <span className="market-name">MOBI MARKET</span>
        </div>
        <div className="main-page-right">
          <div className="main-page-button">
            <button className="add-product-button">Add Product</button>
          </div>
          <div className="main-page-user">
            <div className="user-name-nickname">
              <span className="user-name"> User Name</span>
              <span className="user-nickname"> User Nickname</span>
            </div>
            <FontAwesomeIcon icon={faUser} className="main-page-user-icon" />
          </div>
        </div>
      </div>
      <div className="product-grid-container">{renderProductGrid()}</div>
    </div>
  );
};

export default MainPage;
