import React from 'react'
import Admin from "../../Assets/admin.png";
import User from "../../Assets/user.png";
import Product from "../../Assets/product.png";
import Order from "../../Assets/order.png";
import "./Dashboard.css"
import {Link} from "react-router-dom";

function Dashboard() {
    return (
        <div className="dashboard p-4">
            <div className="text-center">
            <h1 className="pb-2 admin__heading">Welcome to ADMIN dashboard</h1>
            <img src={Admin} className="admin__logo"/>
            </div>
            
            <div className="row pt-4 text-center">
                <div className="col-12 col-md-4 p-4">
                    <Link to="/admin/users" className="card" style={{textDecoration:"none"}}>
                        <h1 className="btn btn-primary" >Users</h1>
                        <img src={User} className="admin__logo__user "/>
                            
                        </Link>
                </div>
                <div className="col-12 col-md-4 p-4">
                    <Link to="/admin/products" className="card" style={{textDecoration:"none"}}>
                        <h1 className="btn btn-primary">Products</h1>
                        <img src={Product} className="admin__logo__user"/>

                    </Link>
                </div>
                <div className="col-12 col-md-4 p-4">
                    <Link to="/admin/orders" className="card" style={{textDecoration:"none"}}>
                        <h1 className="btn btn-primary">Orders</h1>
                        <img src={Order} className="admin__logo__user"/>

                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
