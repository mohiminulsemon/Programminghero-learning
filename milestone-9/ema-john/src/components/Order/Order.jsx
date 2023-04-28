import { key } from "localforage";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import Review from "../Review/Review";
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {
  // const products = useLoaderData();
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart)

  const handleRemoveFromCart = id => {
    // console.log(id)
    const remaining = cart.filter(product => product.id != id);
    setCart(remaining);
    removeFromDb(id)
  }

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
}
  return (
    <div className="shop-container">
      <div className="review-container">
        {/* <h2>Order page: {products.length}</h2> */}
        {/* <h2>Order page: {cart.length}</h2> */}
        {cart.map((product) => (
          <Review key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart}></Review>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link className="proceed-link" to='/checkout'>
            <button className="btn-proceed">Proceed checkout
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
