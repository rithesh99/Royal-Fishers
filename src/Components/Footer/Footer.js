import React from "react";
import "./Footer.css";
import HomeIcon from "@material-ui/icons/Home";
import BugReportIcon from "@material-ui/icons/BugReport";
import InfoIcon from "@material-ui/icons/Info";
import PhoneIcon from "@material-ui/icons/Phone";
import Gp from "../../Assets/google-pay.png"
import Pp from "../../Assets/phone-pe.png";
import Upi from "../../Assets/UPI.png";


function Footer() {
  return (
    <div className="footer container">
      <div className="row footer__row">
        <div className="col-6 col-md-3 d-flex flex-column text-left">
          <h2 className="text-white">COMPANY</h2>
          <a href="#home" className="footer__option">
            <HomeIcon className="mr-1" />
            Home
          </a>
          <a href="#products" className="footer__option">
            <BugReportIcon className="mr-1" />
            Products
          </a>
          <a href="#about" className="footer__option">
            <InfoIcon className="mr-1" />
            About
          </a>
          <a href="#contact" className="footer__option">
            <PhoneIcon className="mr-1" />
            Contact
          </a>
        </div>
        <div className="col-6 col-md-3  d-flex flex-column text-center">
          <h2 className="text-white">SERVICE</h2>
          <a href="#home" className="footer__option">
            Home Delivery
          </a>
          <a href="#products" className="footer__option">
            Mission
          </a>
          
        </div>
        <div className="col-6 col-md-3  d-flex flex-column text-center">
          <h2 className="text-white">ORDERS & RETURNS</h2>
          <a href="#home" className="footer__option">
            Refund Policy
          </a>
          <a href="#products" className="footer__option">
            Terms & Conditions
          </a>
          <a href="#about" className="footer__option">
            Privacy Policy
          </a>
        </div>
        <div className="col-6 col-md-3  d-flex flex-column text-center">
          <h2 className="text-white">PAYMENTS</h2>
          <div className="text-center">
            <img src={Gp} className="footer__logo" />
          </div>
          <div className="text-center">
            <img src={Pp} className="footer__logo" />
          </div>
          <div className="text-center">
            <img src={Upi} className="footer__logo__upi" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center text-white">
          Copyright@ 2021 || All Rights Reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
