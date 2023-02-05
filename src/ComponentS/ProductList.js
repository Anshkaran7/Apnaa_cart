import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  return props.productList.length>0?(
    props.productList.map((product, i) => {
      return (
        <Product
          product={product}
          key={i}
          incrementQuantity={props.incrementQuantity}
          index={i}
          decrementQuantity={props.decrementQuantity}
          removeBtn={props.removeBtn}
        />
      );
    })
  ) : <h1 className="text-danger">Cart is Empty! Please Add items in the Cart</h1>
}
