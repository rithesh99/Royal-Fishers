import React, {useEffect, useState} from "react";
import Product from "./Product/Product";
import "./Products.css";
import Fish from "../../Assets/fish4.jpg";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "../../State/StateProvider";
import { Link } from "react-router-dom";

function Products() {
  const [state,dispatch] = useStateValue();

  const [search, setSearch] = useState("")
  const Pros = [
    {
      id: 1,
      name: "Kanava",
      original_price: 199,
      price: 149,
      img: `${Fish}`,
      quantity: "10 pieces",
    },
    {
      id: 2,
      name: "Saalai",
      original_price: 99,
      price: 49,
      img: `${Fish}`,
      quantity: "10 pieces",
    },
    {
      id:3,
      name: "Nethili",
      original_price: 199,
      price: 149,
      img: `${Fish}`,
      quantity: "10 pieces",
    },
    {
      id:4,
      name: "Karvaad",
      original_price: 199,
      price: 149,
      img: `${Fish}`,
      quantity: "10 pieces",
    },
    {
      id:5,
      name: "Koli Saalai",
      original_price: 199,
      price: 149,
      img: `${Fish}`,
      quantity: "10 pieces",
    },
    {
      id:6,
      name: "Rawl",
      original_price: 199,
      price: 149,
      img: `${Fish}`,
      quantity: "10 pieces",
    },
    {
      id:7,
      name: "Nandu",
      original_price: 199,
      price: 149,
      img: `${Fish}`,
      quantity: "10 pieces",
    },
    {
      id:8,
      name: "Paarai",
      original_price: 199,
      price: 149,
      img: `${Fish}`,
      quantity: "10 pieces",
    },
  ];
 const loadCart = () => {
      if (typeof window !== undefined) {
        if (localStorage.getItem("cart")) {
          return JSON.parse(localStorage.getItem("cart"));
        }
      }
    };
  useEffect(() => {
   loadCart();
  }, []);
  
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
          <input type="text" className="products__search"  onChange={(e) => setSearch(e.target.value)} />
          <SearchIcon className="ml-2" />
        </div>
        <div className="col-2 col-md-4"></div>
        <div className="col-12 d-flex justify-content-between align-items-center mt-2">
        <Link to="/orders"><h3 className="text-primary">My Orders</h3></Link>
          <div className=" d-flex align-items-center ">
          <Link to="/cart"><h3 className="text-primary">Cart</h3></Link>
          <ShoppingCartIcon className="ml-2 text-primary" />
          {
            state.cart && state.cart.length>0 &&
<span className="badge badge-secondary">{state.cart.length}</span>
          }
          </div>
         
          
        </div>
      </div>
      <div className="row">
        {Pros
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
