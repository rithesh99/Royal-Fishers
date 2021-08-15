import React from 'react'
import { Link } from 'react-router-dom'
import "./AdminOrders.css"
function AdminOrders() {

const Orders = [{
    id:1,
    date:"02-03-2021",
    orderedBy: "Rithesh",
    order: "Rawl",
    count:"10 pieces",
    status:"DELIVERED"
},
{
    id:1,
    date:"02-03-2021",
    orderedBy: "Rithesh",
    order: "Rawl",
    count:"10 pieces",
    status:"ARRIVING"
},
{
    id:1,
    date:"02-03-2021",
    orderedBy: "Rithesh",
    order: "Rawl",
    count:"10 pieces",
    status:"CANCELLED"
},
{
    id:1,
    date:"02-03-2021",
    orderedBy: "Rithesh",
    order: "Rawl",
    count:"10 pieces",
    status:"DELIVERED"
},
{
    id:1,
    date:"02-03-2021",
    orderedBy: "Rithesh",
    order: "Rawl",
    count:"10 pieces",
    status:"DELIVERED"
}
]

    return (
        <div className="adminorders bg-dark pt-4" style={{minHeight:"100vh"}}>
            <h1 className="text-center text-white">All Orders</h1>
            <div className="text-center mb-4">
            <Link to="/" className="badge badge-primary mr-2">Home</Link>
            <Link to="/admin/orders" className="badge badge-primary mr-2">Orders</Link>
                <Link to="/admin/products" className="badge badge-primary mr-2">Products</Link>
                <Link to="/admin/users" className="badge badge-primary">Users</Link>
            </div>
            <div className="row w-100 pl-4">
                {Orders && Orders.map((order,i) => {
                    return (
                        <div className="col-6 col-md-3 mb-4" key={i}>
                <div class="card text-center ">
                    <div class="card-body">
                        <h5 class="card-title">{order.order}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{order.count}</h6>
                        <p className="text-right">- {order.orderedBy}</p>
                        <p class="card-text">{order.date}</p>
                        <button className={`btn btn-block ${order.status=="RECEIVED" ? "btn-primary" : ""}  ${order.status=="DELIVERED" ? "btn-success" : ""} ${order.status=="CANCELLED" ? "btn-danger" : ""} ${order.status=="ARRIVING" ? "btn-warning" : ""} `} style={{fontSize:"12px", fontWeight:"bold"}}>
{order.status}
</button>
                    </div>
                </div>
            </div>
                    )
                })}
            </div>
            
            
          
        </div>
    )
}

export default AdminOrders
