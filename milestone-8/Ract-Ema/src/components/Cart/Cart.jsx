import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  //option 3
  //const cart = props.cart;//option 1
  //const {cart} = props; //option 2

  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    // if(product.quantity === 0){
    //     product.quantity = 1;
    // }
    // product.quantity = product.quantity || 1;

    total += product.price * product.quantity;
    shipping += product.shipping;
    quantity += product.quantity;
  }

  const tax = (total * 7) / 100;
  let grandTotal = total + shipping + tax;
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      {/* <p>Selected items: {cart.length}</p> */}
      <p>Selected items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping: {shipping}</p>
      <p>Tax(+7%): {tax.toFixed(2)}</p>
      <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
    </div>
  );
};

export default Cart;
