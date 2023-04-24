import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h2>Ema-John</h2>
      <div>
        <a href="/shop">Shop</a>
        <a href="/order">Order</a>
        <a href="/inventory">Inventory</a>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Header;
