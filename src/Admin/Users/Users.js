import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Users.css";
import { useState } from "react";
import firebase from "firebase";

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      await firebase
        .firestore()
        .collection("users")
        .onSnapshot((snapshot) =>
          setUsers(snapshot.docs.map((doc) => doc.data()))
        );
    }
    fetchUsers();
  }, []);

  return (
    <div className="users bg-dark pt-4" style={{ minHeight: "100vh" }}>
      <h1 className="text-center text-white">All Users</h1>
      <div className="text-center mb-4">
        <Link to="/" className="badge badge-primary mr-2">
          Home
        </Link>
        <Link to="/admin/orders" className="badge badge-primary mr-2">
          Orders
        </Link>
        <Link to="/admin/products" className="badge badge-primary mr-2">
          Products
        </Link>
        <Link to="/admin/users" className="badge badge-primary">
          Users
        </Link>
      </div>
      <div className="row w-100 pl-4">
        {users &&
          users.map((user, i) => {
            return (
              <div className="col-12 col-md-2 mb-4" key={i}>
                <div className="card text-center pt-3 pl-4 pr-4">
                  <img
                    className="card-photo-top"
                    src={user.photo}
                    alt="Card cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <span className="card-subtitle mb-2 text-muted text-center badge d-flex justify-content-center">
                      {user.email}
                    </span>
                    <p className="text-right">- {user.orders} orders</p>
                    <p className="card-text">+91 {user.number}</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Users;
