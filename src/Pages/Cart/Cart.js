import React, { useState, useEffect } from "react";
import Product from "../../Components/Products/Product/Product";
import "./Cart.css";
import { useStateValue } from "../../State/StateProvider";
import { Link } from "react-router-dom";
import Vid from "../../Assets/Fish.mp4";
import { Modal } from 'react-responsive-modal';
import firebase from "firebase";
import { nanoid } from 'nanoid'
import { isAuthenticated } from "../../RouteHelper";

function Cart() {
  const [state, dispatch] = useStateValue();

  const [open, setOpen] = useState(false);
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);
  const [landmark, setLandmark] = useState(null);
  const [phone, setPhone] = useState(null);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const user = isAuthenticated();
  const totalCart = () => {
    var sum = 0;
    if (state && state.cart && state.cart.length !== undefined) {
      for (let index = 0; index < state.cart.length; index++) {
        sum = sum + parseInt(state.cart[index].price);
      }
    }
    return sum;
  };

  const saveToday = () => {
    var sum = 0;
    var org_total = 0;
    if (state && state.cart && state.cart.length !== undefined) {
      for (let index = 0; index < state.cart.length; index++) {
        sum = sum + parseInt(state.cart[index].price);
      }
      for (let index = 0; index < state.cart.length; index++) {
        org_total = org_total + parseInt(state.cart[index].orginal_price);
      }
    }
    return org_total - sum;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    var uid = nanoid(10);
    firebase
      .firestore()
      .collection("orders")
      .doc(uid)
      .set({
        id: uid,
        name: name,
        loggedInUser: user.name,
        loggedInEmail: user.email,
        loggedInUserPhoto: user.photo,
        loggedInNumber: user.number,
        address: address,
        landmark: landmark,
        phone: phone,
        order: state.cart,
        status: "RECEIVED",
        total: totalCart(),
        saved: saveToday(),
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(() => {
        dispatch({
          type: 'EMPTY_CART',
        })
        if (typeof window !== undefined) {
          localStorage.removeItem("cart");
        }
        onCloseModal()
      })
  }

  return (
    <div class='showcase'>
      <video src={Vid} muted loop autoPlay></video>
      <div class='overlay'></div>
      {totalCart() > 0 ? (
        <div className='cart'>
          <h1 className='text-white text'>
            Cart{" "}
            {state.cart && state.cart.length > 0 && (
              <span
                style={{ fontSize: "13px " }}
                className='badge badge-primary'
              >
                {state.cart.length}
              </span>
            )}
          </h1>

          <Link to='/' className='badge badge-light text'>
            Home
          </Link>
          <span> | </span>
          <Link to='/orders' className='badge badge-light text'>
            Orders
          </Link>
          <div className='row'>
            <div className='col-12 col-lg-8'>
              <div className='row'>
                {state.cart &&
                  state.cart.map((product, index) => (
                    <div className='col-6 col-md-3'>
                      <Product
                        index={index}
                        name={product.name}
                        orginal_price={product.orginal_price}
                        price={product.price}
                        removeFromCart={true}
                        addtoCart={false}
                        img={product.image}
                      />
                    </div>
                  ))}
                  {state.cart.length===1 &&
                    <div className='col-6 col-md-3'>
                    <Product
                      index={123}
                      name="Time to spice up the food... Add more items to cart!!!"
                      orginal_price=""
                      price=""
                      removeFromCart={false}
                      addtoCart={false}
                      img="https://images.indianexpress.com/2018/07/fish-sustainanbel-759.jpg"
                    />
                  </div>
                  }
              </div>
            </div>
            <div className='col-12 col-md-4 text-center text mt-4'>
              <h3>Total: ₹ {totalCart()}</h3>
              <h4 className='text-white'>You save ₹ {saveToday()}</h4>
              <div className='mt-4'>
                <button className='btn btn-outline-danger btn-block' onClick={onOpenModal}>
                  Checkout
                </button>
              </div>
              <div className=''>
                <Modal open={open} onClose={onCloseModal} center>
                  <h2 className="p-4 text-success">Address details</h2>
                  <div className=''>
                    <h4>Name</h4>
                    <input type="text" className='w-100' onChange={e => setName(e.target.value)} />
                  </div>
                  <div className=''>
                    <h4>Phone</h4>
                    <input type="tel" className='w-100' onChange={e => setPhone(e.target.value)} />
                  </div>
                  <div className=''>
                    <h4>Address</h4>
                    <textarea type="text" className='w-100' onChange={e => setAddress(e.target.value)} />
                  </div>
                  <div className=''>
                    <h4>Landmark</h4>
                    <input type="text" className='w-100' onChange={e => setLandmark(e.target.value)} />
                  </div>
                  <div className='mt-4'>
                    <button className='btn btn-success btn- btn-block' onClick={onSubmit} disabled={!name || !address || !landmark || !phone}>Place your order - ₹{totalCart()}</button>
                  </div>
                  <div className='mt-4'>
                    <p>We will be reaching you out soon!!!</p>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='text '>
          <Link to='/' className='badge badge-light text'>
            Home
          </Link>
          <span> | </span>
          <Link to='/orders' className='badge badge-light text'>
            Orders
          </Link>
          <h1 className='text-white'>Empty cart</h1>
          <h4 className='text-white'><i>Go out and buy some fresh fishes to make your day more tastier!!!</i></h4>
        </div>
      )}

    </div>
  );
}

export default Cart;
