import React from "react";
import "./Product.css";
import { useStateValue } from "../../../State/StateProvider";

function Product({
  id,
  name,
  addtoCart = true,
  removeFromCart = false,
  orginal_price,
  price,
  img,
  quantity,
}) {
  const [state, dispatch] = useStateValue();

  const removeItemFromCart = (productId) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      name: productId,
    });
    console.log(state);
    let cart = [];
    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      for (let i = 0; i < cart.length; i++) {
        const index = cart.indexOf(cart[i]);
        // console.log("index", index);
        if (cart[i].name === productId) {
          // console.log(product);
          // console.log("BEFORE", cart);
          cart.splice(index, 1);
          // console.log("AFTER", cart);
          break;
        }
      }

      localStorage.setItem("cart", JSON.stringify(cart));
    }
    return cart;
  };

  const cartEmpty = () => {
    dispatch({
      type: "EMPTY_CART",
    });
    if (typeof window !== undefined) {
      localStorage.removeItem("cart");
    }
  };

  const item = {
    id: id,
    name: name,
    price: price,
    orginal_price: orginal_price,
    image: img,
    quantity: quantity,
  };

  const addToCart = () => {
    addItemToCart(item);
  };

  const addItemToCart = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
    console.log(state);
    let cart = [];
    console.log(item);
    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      cart.push({
        ...item,
        count: 1,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };
  const showAddToCart = (addtoCart) => {
    return (
      addtoCart && (
        <button onClick={addToCart} class="btn btn-outline-primary">
          Add to cart
        </button>
      )
    );
  };

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(name);
          }}
          className="btn btn-outline-danger"
        >
          Remove from cart
        </button>
      )
    );
  };
  return (
    <div class="card text-center rounded mt-4" index={id}>
      {img && <img class="card-img-top" src={img} alt="Card image cap" />}
      <div class="card-body">
        <h5 class="card-title font-weight-bold">{name}</h5>
        <p>{quantity}</p>
        {orginal_price && (
          <p class="card-text font-weight-bold text-small">
            ₹ <strike className="pr-2">{orginal_price}</strike> ₹ {price}
          </p>
        )}
        {showAddToCart(addtoCart)}
        {showRemoveFromCart(removeFromCart)}
      </div>
    </div>
  );
}

export default Product;
