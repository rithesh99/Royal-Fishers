import React from 'react'
import "./Orders.css";
import Fish from "../../Assets/fish4.jpg";
import Product from "../../Components/Products/Product/Product";
import OrderCard from '../../Components/Products/Product/OrderCard';
import { Link } from 'react-router-dom';

function Orders() {

    const Ordered = [
        {
          id: 1,
          name: "Kanava",
         status: "RECEIVED",
          price: 149,
          img: `${Fish}`,
          quantity: "10 pieces",
        },
        {
          id: 2,
          name: "Saalai",
          status: "DELIVERED",
          price: 49,
          img: `${Fish}`,
          quantity: "10 pieces",
        },
        {
          id: 1,
          name: "Kanava",
         status: "CANCELLED",
          price: 149,
          img: `${Fish}`,
          quantity: "10 pieces",
        },
        {
          id: 2,
          name: "Saalai",
          status: "ARRIVING",
          price: 49,
          img: `${Fish}`,
          quantity: "10 pieces",
        },
        {
          id: 2,
          name: "Saalai",
          status: "ARRIVING",
          price: 49,
          img: `${Fish}`,
          quantity: "10 pieces",
        }
        
      ];
    return (
        <div className="orders p-4">
          <h1 className="text-black text">My Orders</h1>
          <Link to="/" className="badge badge-light text">Home</Link><span> | </span><Link to="/cart" className="badge badge-light text">Cart</Link>

            <div className="row">
            {Ordered &&
              Ordered.map((order, index) => (
                  
                <div className="col-6 col-md-3" >
                    {/* {console.log(order)} */}
                  <OrderCard
                    index={index}
                    name={order.name}
                    orginal_price={order.original_price}
                    price={order.price}
                    status={order.status}
                    img={Fish}
                  />
                  
                </div>
              ))}
            </div>
        </div>
    )
}

export default Orders
