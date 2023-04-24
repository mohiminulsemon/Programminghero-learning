import React from "react";
import "./Product.css";

const Product = (props) => {
    // console.log(props)
  // console.log(props.product)
  const { img, name, seller, ratings, price} = props.product;
  const  handleAddToCart = props.handleAddToCart;

//   const handleAddToCart = (product) => {
//     // console.log(product)
//   }

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings}</p>
      </div>
      <button onClick={() => handleAddToCart(props.product)} className="btn-cart">Add to cart</button>
    </div>
  );
};

export default Product;
