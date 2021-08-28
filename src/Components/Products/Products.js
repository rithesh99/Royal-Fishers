import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import "./Products.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "../../State/StateProvider";
import { Link } from "react-router-dom";
import firebase from "firebase";

function Products() {
  const [state, dispatch] = useStateValue();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      await firebase
        .firestore()
        .collection("products")
        .onSnapshot((snapshot) =>
          setProducts(snapshot.docs.map((doc) => doc.data()))
        );
    }
    fetchUsers();
    loadCart();
    console.log(products);
  }, []);
  const [search, setSearch] = useState("");

  const loadCart = () => {
    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
        return JSON.parse(localStorage.getItem("cart"));
      }
    }
  };

  return (
    <div id="products" className="products container ">
      <div className="row">
        <div className="col-12">
          <h1 className="mt-4 font-weight-bold text-center p-4">
            Trending products
          </h1>
        </div>
        <div className="col-2 col-md-4"></div>
        <div className="col-8 col-md-4 d-flex align-items-center">
          <input
            type="text"
            className="products__search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <SearchIcon className="ml-2" />
        </div>
        <div className="col-2 col-md-4"></div>
        <div className="col-12 d-flex justify-content-between align-items-center mt-2">
          <Link to="/orders">
            <h3 className="text-primary">My Orders</h3>
          </Link>
          <div className=" d-flex align-items-center ">
            <Link to="/cart">
              <h3 className="text-primary">Cart</h3>
            </Link>
            <ShoppingCartIcon className="ml-2 text-primary" />
            {state &&
              state.cart &&
              state.cart.length &&
              state.cart.length > 0 && (
                <span className="badge badge-secondary">
                  {state.cart.length}
                </span>
              )}
          </div>
        </div>
      </div>
      <div className="row">
        {products
          .filter((val) => {
            if (search == "") {
              return val;
            } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((p, i) => {
            return (
              <div className="col-6 col-md-3 p-2">
                <Product
                  id={i}
                  name={p.name}
                  orginal_price={p.original_price}
                  price={p.price}
                  img={p.img}
                  quantity={p.quantity}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Products;
