import React from "react";
import products from "../apis/products";

class AddProduct extends React.Component {
  state = {
    name: "",
    price: "",
    color: "",
    department: "",
    description: "",
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    const id = console.log(this.props.productId);
    const product = {
      name: this.state.name,
      price: this.state.price,
      color: this.state.color,
      department: this.state.department,
      descriptiom: this.state.description,
    };

    /*  products.put(`/api/products/${id}`, product).then((res) => {
      console.log(res.data);
    }); */

    products
      .put(`/api/products/61cc54c8b8f5a100185bc45b`, product)
      .then((res) => {
        console.log(res.data);
      });
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.onFormSubmit}>
        <div className="field">
          <label>Name:</label>
          <input
            type="text"
            className="name"
            placeholder="Name"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Price:</label>
          <input
            type="text"
            className="price"
            placeholder="Price"
            value={this.state.price}
            onChange={(e) => this.setState({ price: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Color:</label>
          <input
            type="text"
            className="color"
            placeholder="Color"
            value={this.state.color}
            onChange={(e) => this.setState({ color: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Department:</label>
          <input
            type="text"
            className="department"
            placeholder="Department"
            value={this.state.department}
            onChange={(e) => this.setState({ department: e.target.value })}
          />
        </div>
        <div className="field">
          <label>Description:</label>
          <input
            type="text"
            className="description"
            placeholder="Description"
            value={this.state.description}
            onChange={(e) => this.setState({ description: e.target.value })}
          />
        </div>
        <button className="ui green button" type="submit">
          Update Product
        </button>
      </form>
    );
  }
}

export default AddProduct;
