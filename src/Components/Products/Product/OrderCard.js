import React from "react";

function OrderCard({
  id,
  name,
  address,
  landmark,
  phone,
  total,
  saved,
  order,
  timestamp,
  status,
}) {
  return (
    <div class='card text-center rounded mt-4' index={id}>
      <div class='card-body'>
        <div className="row">
          <div className="col-8">
            <h2>Items</h2>
            {order &&
              order.map((item, i) => {
                return (
                  <div key={i} className='text-left'>
                    <p><b>{item.name}</b> - <span>₹{item.price}</span></p>
                  </div>
                );
              })}
          </div>
          <div className="col-4">
          <h4 class='card-text font-weight-bold text-small'>Total </h4>
          <h4> ₹ {total}</h4>
        <p>Saved <strike> ₹ {saved}</strike>
        </p>

        <p class='card-text  text-small'>{timestamp.toDate().toDateString()}</p>
        <p class='card-text  text-small'>
          {timestamp.toDate().toLocaleTimeString("en-US")}
        </p>
          </div>
        </div>

        <h5 class='card-title font-weight-bold'>{name}</h5>
        <p>{address}</p>
        <p>{landmark}</p>
        <p>{phone}</p>
        
        <button
          class={`btn ${status === "RECEIVED" ? "btn-primary" : ""}  ${status == "DELIVERED" ? "btn-success" : ""
            } ${status == "CANCELLED" ? "btn-danger" : ""} ${status == "ARRIVING" ? "btn-warning" : ""
            } `}
        >
          {status}
        </button>
      </div>
    </div>
  );
}

export default OrderCard;
