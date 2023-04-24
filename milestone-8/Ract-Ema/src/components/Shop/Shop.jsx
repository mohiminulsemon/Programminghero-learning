import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { addToDb, getStoredCart } from "../utilites/fakeDB";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    // console.log(products)
    const storedCart = getStoredCart();
    // console.log(storedCart)
    const savedCart = []
    //step 1: get id
    for (const id in storedCart) {
      // console.log(id)

      //step 2: get the product by using id
      const addedProduct = products.find((product) => product.id === id);
      // console.log(savedProduct)
      if (addedProduct) {
        //step  3: get quantity of the product
        const quantity = storedCart[id];
        // console.log(quantity)
        addedProduct.quantity = quantity;
        //step 4: add the added product to savedCart
        savedCart.push(addedProduct)
      }
      // console.log(addedProduct);
    }
    //step 5: set the cart
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    // console.log(product)
    // const newCart = [...cart, product];
    
    let newCart = [];
        
        // if product doesn't exist in the cart, then set quantity = 1
        // if exist update quantity by 1
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart= [...cart, product]
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        {/* <h4>Order Summary</h4>
        <p>Selected items: {cart.length}</p> */}
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
