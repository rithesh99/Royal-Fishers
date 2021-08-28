import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AdminOrders.css";
import firebase from "firebase";
import { Modal } from 'react-responsive-modal';

function AdminOrders() {
    const [orders, setOrders] = useState([]);
    const [order, setOrder] = useState({});
    const [status, setStatus] = useState("");
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => {
        setOpen(false)
        setOrder("");
        setStatus("");
    };
    useEffect(() => {
        async function fetchUsers() {
            await firebase
                .firestore()
                .collection("orders")
                .onSnapshot((snapshot) =>
                    setOrders(snapshot.docs.map((doc) => doc.data()))
                );
        }
        fetchUsers();
        console.log(orders);
    }, []);

    const openOrderModal = (order, status) => {
        onOpenModal();
        setOrder(order);
        setStatus(status);
    };

    const updateOrder = (status) => {
        setStatus(status);
        firebase
            .firestore()
            .collection("orders")
            .doc(order.id)
            .set({
                id: order.id,
                name: order.name,
                loggedInUser: order.loggedInUser,
                loggedInEmail: order.loggedInEmail,
                loggedInUserPhoto: order.loggedInUserPhoto,
                loggedInNumber: order.loggedInNumber,
                address: order.address,
                landmark: order.landmark,
                phone: order.phone,
                order: order.order,
                status: status,
                total: order.total,
                saved: order.saved,
                timestamp: order.timestamp
            })
            .then(() => {
                onCloseModal();
            });
    }


    return (
        <div className='adminorders bg-dark pt-4' style={{ minHeight: "100vh" }}>
            <h1 className='text-center text-white'>All Orders</h1>
            <div className='text-center mb-4'>
                <Link to='/' className='badge badge-primary mr-2'>
                    Home
                </Link>
                <Link to='/admin/orders' className='badge badge-primary mr-2'>
                    Orders
                </Link>
                <Link to='/admin/products' className='badge badge-primary mr-2'>
                    Products
                </Link>
                <Link to='/admin/users' className='badge badge-primary'>
                    Users
                </Link>
            </div>
            <div className='row w-100 pl-4'>
                {orders &&
                    orders.map((order, i) => {
                        return (
                            <div className='col-6 col-md-3 mb-4' key={i}>
                                <div class='card text-center '>
                                    <div class='card-body'>
                                        {order.order.map((item) => (
                                            <li class='card-title text-left'>{item.name}</li>
                                        ))}
                                        <h6 class='card-subtitle mb-2 text-muted'>
                                            ₹ {order.total}
                                        </h6>
                                        <p className='text-right'>- {order.name}</p>
                                        <p class='card-text  text-small'>
                                            {order.timestamp.toDate().toDateString()}
                                        </p>
                                        <p class='card-text  text-small'>
                                            {order.timestamp.toDate().toLocaleTimeString("en-US")}
                                        </p>
                                        <button
                                            className={`btn btn-block ${order.status == "RECEIVED" ? "btn-primary" : ""
                                                }  ${order.status == "DELIVERED" ? "btn-success" : ""} ${order.status == "CANCELLED" ? "btn-danger" : ""
                                                } ${order.status == "ARRIVING" ? "btn-warning" : ""} `}
                                            style={{ fontSize: "12px", fontWeight: "bold" }}
                                            onClick={() => openOrderModal(order, order.status)}
                                        >
                                            {order.status}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>

            <Modal open={open} onClose={onCloseModal} center>
                <h1>Status: {status}</h1>
                <div className="d-flex ">
                    <button className="btn btn-primary m-2" onClick={() => { updateOrder("RECEIVED")}}>RECEIVED</button>
                    <button className="btn btn-warning m-2" onClick={() => { updateOrder("ARRIVING")}}>ARRIVING</button>
                    <button className="btn btn-success m-2" onClick={() => { updateOrder("DELIVERED") }}>DELIVERED</button>
                    <button className="btn btn-danger m-2" onClick={() => { updateOrder("CANCELLED") }}>CANCELLED</button>
                </div>
            </Modal>
        </div>
    );
}

export default AdminOrders;
