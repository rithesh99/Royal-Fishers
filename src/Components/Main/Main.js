import React, { useState } from "react";
import Vid from "../../Assets/Fish.mp4";
import Img from "../../Assets/fish.png";
import "./Main1.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";

function Main() {
  var isAuthenticated = true;
  const [profile, setProfile] = useState(true);
  return (
    <div>
      <section class="showcase">
        <header>
          <div className=""></div>
          <img src={Img} style={{ width: "40px" }} alt="" />
          {/* <h2 class="logo">Royal Fishes</h2> */}
          <img
            src={Img}
            style={{ width: "40px", transform: "scaleX(-1)" }}
            alt=""
          />
          {isAuthenticated ? (
            <div className="main__profile__icon">
              <AccountCircleIcon
                className="text-white "
                style={{ fontSize: "40px" }}
                onClick={() => setProfile(true)}
              />
              <br />
              {profile && (
                <div className="main__profile__icon">
                  <div>Rithesh</div>
                  <div onClick={() => setProfile(false)} className="badge">
                    Signout
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center">
              <span className="text-white " style={{ fontSize: "15px" }}>
                Welcome Guest!
              </span>
              <br />
              <span>
                <small className="font-weight-bold text-warning">
                  <Link to="/signin" className=" text-warning">
                    Sign in
                  </Link>
                </small>
              </span>
            </div>
          )}
          {/* <div class="toggle"></div> */}
        </header>
        <video src={Vid} muted loop autoPlay></video>
        <div class="overlay"></div>
        <div class="text">
          <h2 className="logo">Royal Fishers</h2>
          <h2> </h2>
          <h3>Never Stop To Eat The Fish</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <a href="#products">Explore</a>
        </div>
        <ul class="social">
          <li>
            <a href="#">
              <img src="https://i.ibb.co/x7P24fL/facebook.png" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://i.ibb.co/Wnxq2Nq/twitter.png" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://i.ibb.co/ySwtH4B/instagram.png" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Main;
