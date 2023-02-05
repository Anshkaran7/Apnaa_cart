import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import Navbar from "./ComponentS/Navbar";
import ProductList from "./ComponentS/ProductList";
import Footer from "./ComponentS/Footer.js";
import AddItem from "./ComponentS/AddItem.js";

function App() {
  const products = [
    {
      price: 99999,
      name: "Iphone 13 pro",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi 6 pro",
      quantity: 0,
    },
  ];
  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newtotalAmount = totalAmount;
    newProductList[index].quantity++;
    newtotalAmount += newProductList[index].price;
    setProductList(newProductList);
    setTotalAmount(newtotalAmount);
  };
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newtotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newtotalAmount -= newProductList[index].price;
    }
    setProductList(newProductList);
    setTotalAmount(newtotalAmount);
  };
  const resetQuantity = (index) => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };
  const removeBtn=(index)=>{
    let newProductList=[...productList]
    let newtotalAmount= totalAmount
    newtotalAmount -=  newProductList[index].quantity * newProductList[index].price
    newProductList.splice(index,1)
    setProductList(newProductList);
    setTotalAmount(newtotalAmount);
  }
  const addItem=(name,price)=>{
    let newProductList =[...productList]
    newProductList.push({
      price: price,
      name: name,
      quantity:0
    })
    setProductList(newProductList);
  }

  return (
    <>
      <Navbar />
      <AddItem addItem={addItem}/>
      <main className=" container mt-5">
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeBtn={removeBtn}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
