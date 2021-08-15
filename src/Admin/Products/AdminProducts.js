import React from 'react'
import { Link } from 'react-router-dom'
import "./AdminProducts.css"
import Fish from "../../Assets/fish4.jpg";

function AdminProducts() {

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

    return (
        <div className="adminproducts bg-dark pt-4" style={{minHeight:"100vh"}}>
            <h1 className="text-center text-white">All Products</h1>
            <div className="text-center mb-4">
            <Link to="/" className="badge badge-primary mr-2">Home</Link>

                <Link to="/admin/orders" className="badge badge-primary mr-2">Orders</Link>
                <Link to="/admin/products" className="badge badge-primary mr-2">Products</Link>
                <Link to="/admin/users" className="badge badge-primary">Users</Link>
            </div>
            <div className="row w-100 pl-4">
                {Pros && Pros.map((product,i) => {
                    return (
                        <div className="col-6 col-md-3 p-2">
                        <div class="card text-center rounded mt-4" key={i}>
                        <img class="card-img-top" src={product.img} alt="Card image cap" />
                        <div class="card-body">
                          <h5 class="card-title font-weight-bold">{product.name}</h5>
                          <p>{product.quantity}</p>
                          <p class="card-text font-weight-bold text-small">
                            ₹ <strike className="pr-2">{product.original_price}</strike> ₹ {product.price}
                          </p>
                          <button className="btn btn-block btn-warning">Update</button>
                          <button  className="btn btn-block btn-danger">Delete</button>
                        </div>
                      </div>
                      </div>
                    )
                })}
            </div>
            
            
          
        </div>
    )
}

export default AdminProducts
