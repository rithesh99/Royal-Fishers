import React from 'react'

function OrderCard({ id, name, price, img, quantity, status }) {
    return (
<div class="card text-center rounded mt-4" index={id}>            <img class="card-img-top" src={img} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title font-weight-bold">{name}</h5>
        <p>{quantity}</p>
        <p class="card-text font-weight-bold text-small">
          ₹ {price}
        </p>
        <p class="card-text  text-small">
          11-02-2021 | 09:30 am
        </p>
        
        <button class={`btn ${status=="RECEIVED" ? "btn-primary" : ""}  ${status=="DELIVERED" ? "btn-success" : ""} ${status=="CANCELLED" ? "btn-danger" : ""} ${status=="ARRIVING" ? "btn-warning" : ""} `}>
        {status}
       </button>
      </div>
        </div>
    )
}

export default OrderCard
