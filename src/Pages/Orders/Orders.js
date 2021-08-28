import React, { useState, useEffect } from 'react'
import "./Orders.css";
import Fish from "../../Assets/fish4.jpg";
import Product from "../../Components/Products/Product/Product";
import OrderCard from '../../Components/Products/Product/OrderCard';
import { Link } from 'react-router-dom';
import firebase from "firebase";
import { isAuthenticated } from '../../RouteHelper';

function Orders() {

  const [orders, setOrders] = useState([])
  const user = isAuthenticated()
  useEffect(() => {
    async function fetchOrders() {
      await firebase.firestore().collection("orders").onSnapshot((snapshot) =>
        setOrders(snapshot.docs.map((doc) => doc.data()))
      );
    }
    fetchOrders()
  }, [])


  return (
    <div className="orders p-4 bg-dark ">
      <h1 className="text-white text">My Orders</h1>
      <Link to="/" className="badge badge-light text">Home</Link><span> | </span><Link to="/cart" className="badge badge-light text">Cart</Link>

      <div className="row">
        {orders &&
          orders.filter((val) => {
            return val.loggedInEmail == user.email;
          }).map((order, index) => (

            <div className="col-6" >
              {/* {console.log(order)} */}
              <OrderCard
                index={index}
                name={order.name}
                address={order.address}
                landmark={order.landmark}
                phone={order.phone}
                saved={order.saved}
                order={order.order}
                timestamp={order.timestamp}
                status={order.status}
                total={order.total}
              />

            </div>
          ))}
      </div>
    </div>
  )
}

export default Orders
