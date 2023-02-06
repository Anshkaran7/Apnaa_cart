import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
    };
  }
  render() {
    return (
      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addItem(
            this.state.productName,
            Number(this.state.productPrice)
          );
          this.setState({
            productName: "",
            productPrice:0
           });
        }}
      >
        <div className="m-5 container">
          <input
            className="col-3"
            type="text"
            id="inputName"
            placeholder="Item Name.."
            aria-describedby="name"
            name="productName"
            onChange={(e) => {
              this.setState({ productName: e.currentTarget.value });
            }}
            value={this.state.productName}
            required
          />
          <input
            className="col-3"
            id="price"
            type="number"
            placeholder="Price"
            name="productPrice"
            onChange={(e) => {
              this.setState({ productPrice: e.currentTarget.value });
            }}
            value={this.state.productPrice}
            required
          />
          <button type="submit" className="col-2 btn btn-info">
            Add Item
          </button>
        </div>
      </form>
    );
  }
}

export default AddItem;
