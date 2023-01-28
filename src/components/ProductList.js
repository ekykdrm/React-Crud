import ProductCard from "./ProductCard";
import products from "../apis/products";
import EditProduct from "./EditProduct";
import React from "react";
import { Link } from "react-router-dom";

class ProductList extends React.Component {
  state = { products: [], error: null };

  componentDidMount() {
    products.get("/api/products").then((response) => {
      const products = response.data;
      this.setState({ products: products });
    });
  }

  handleDelete = (id) => {
    products.delete(`/api/products/${id}`).then((res) => {
      console.log(res);
      console.log(res.data);

      const products = this.state.products.filter((item) => item.id !== id);
      this.setState({ products });
    });
  };

  render() {
    const renderedProducts = this.state.products.map((product) => {
      return (
        <div key={product._id}>
          <br />
          <ProductCard product={product} />
          <Link to={"/editproduct"}>
            <button
              id={product._id}
              onClick={this.getButtonId}
              className="positive ui button"
            >
              Edit
            </button>
          </Link>
          <button
            onClick={(e) => {
              console.log(this.handleDelete(product._id, e));
            }}
            className="negative ui button"
          >
            Delete
          </button>
          <div className=" ui divider"></div>
        </div>
      );
    });

    return (
      <div>
        <div className="ui center aligned container">
          <h1>Product List:</h1>

          {renderedProducts}
        </div>
      </div>
    );
  }
}

export default ProductList;
