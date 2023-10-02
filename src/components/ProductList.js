import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import products from "../apis/products";
import { Link } from "react-router-dom";

function ProductList() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    products.get("/api/products").then((response) => {
      const productsData = response.data;

      setProductsList(productsData);
    });
  }, []);

  const handleDelete = (id) => {
    products.delete(`/api/products/${id}`).then(() => {
      const updatedProductsList = productsList.filter(
        (item) => item._id !== id
      );
      setProductsList(updatedProductsList);
    });
  };

  const renderedProducts = productsList.map((product) => (
    <div key={product._id}>
      <br />
      <ProductCard product={product} />
      <Link to={`/editproduct/${product._id}`}>
        <button className="positive ui button">Edit</button>
      </Link>
      <button
        onClick={() => {
          handleDelete(product._id);
        }}
        className="negative ui button"
      >
        Delete
      </button>
      <div className=" ui divider"></div>
    </div>
  ));

  return (
    <div>
      <div className="ui center aligned container">
        <h1>Product List:</h1>
        {renderedProducts}
      </div>
    </div>
  );
}

export default ProductList;
