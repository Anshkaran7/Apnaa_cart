import React from "react";

export default function Product(props) {
  return (
    <div className="row mt-3">
      <div className="col-5">
        <h2>
          {props.product.name}
          <span class="badge text-dark bg-warning">
            ₹ {props.product.price}
          </span>
        </h2>
      </div>
      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            className="btn btn-success"
            onClick={() => {
              props.incrementQuantity(props.index);
            }}
          >
            +
          </button>
          <button className="btn btn-primary">{props.product.quantity}</button>
          <button className="btn btn-danger" onClick={()=>props.decrementQuantity(props.index)}>-</button>
        </div>
      </div>

      <div className="col-4 ">
        {props.product.price * props.product.quantity}
      </div>
      <div className="col-2">
        <button className="btn btn-danger" onClick={()=>props.removeBtn(props.index)}>Remove</button>
      </div>
    </div>
  );
}
