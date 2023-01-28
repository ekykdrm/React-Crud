import ProductList from "./ProductList";
import React from "react";
import AddProduct from "./AddProduct";
import EditProduct from "./EditProduct";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="ui fluid ">
          <div className="ui teal two item inverted menu">
            <Link className="item" to="/">
              Home
            </Link>
            <Link className="item" to="/addproduct">
              AddProduct
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/editproduct/" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
