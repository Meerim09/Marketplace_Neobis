import React, { useState, useEffect } from "react";
import ProductCard from "./productCard";

const MainPage = () => {
  const [products, setProducts] = useState([]);

  return (
    <div>
      <h1>Main Page</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default MainPage;
