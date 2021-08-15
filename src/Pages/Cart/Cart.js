import React, { useState, useEffect } from "react";
import Fish from "../../Assets/fish4.jpg";
import Product from "../../Components/Products/Product/Product";
import "./Cart.css";
import { useStateValue } from "../../State/StateProvider";
import { Link } from "react-router-dom";
import Vid from "../../Assets/Fish.mp4";

function Cart() {
  const [state,dispatch] = useStateValue();

  // const loadCart = () => {
  //   if (typeof window !== undefined) {
  //     if (localStorage.getItem("cart")) {
  //       return JSON.parse(localStorage.getItem("cart"));
  //     }
  //   }
  // };

  const totalCart = () => {
    var sum = 0;
    for (let index = 0; index < state.cart.length; index++) {
      sum = sum + state.cart[index].price;
    }
    return sum
  };

  const saveToday = () => {
    var sum = 0;
    for (let index = 0; index < state.cart.length; index++) {
      sum = sum + state.cart[index].price;
    }
    var org_total = 0;
    for (let index = 0; index < state.cart.length; index++) {
      org_total = org_total + state.cart[index].orginal_price;
    }
    return org_total-sum
  }

  const [products, setProducts] = useState([]);

  //  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(state.cart);
    // totalCart()
    // saveToday()
    //  console.log(loadCart());
  }, []);

  return (
    <div class="showcase">
        <video src={Vid} muted loop autoPlay></video>
        <div class="overlay"></div>

    <div className="cart">

      
      <h1 className="text-white text">Cart {
            state.cart && state.cart.length>0 &&
<span style={{fontSize:"13px "}} className="badge badge-primary">{state.cart.length}</span>
          }</h1>
      
      <Link to="/" className="badge badge-light text">Home</Link><span> | </span><Link to="/orders" className="badge badge-light text">Orders</Link>
      <div className="row">
        <div className="col-12 col-md-7">
          <div className="row">
            {state.cart &&
              state.cart.map((product, index) => (
                <div className="col-6 col-md-3" >
                  <Product
                    index={index}
                    name={product.name}
                    orginal_price={product.orginal_price}
                    price={product.price}
                    removeFromCart={true}
                    addtoCart={false}
                    img={product.image}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="col-12 col-md-5 text-center text mt-4">
          <h3>Total: ₹ {totalCart()}</h3>
          <h4 className="text-white">You save ₹ {saveToday()}</h4>
        </div>
      </div>
    </div>
    </div>

  );
}

export default Cart;
