import React from 'react'
import "./Contact.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";
function Contact() {
    return (
      <div className="contact container">
        <div className="row">
          <h1 className="text-center pb-4">Contact Us</h1>
        </div>
        <div className="row">
          <div className="col-12 col-md-3 p-2">
            <div className="row ">
              <div className="col-4 text-center">
                <FacebookIcon />
              </div>
              <div className="col-4 text-center">
                <InstagramIcon />
              </div>
              <div className="col-4 text-center">
                <MailIcon />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3"></div>
          <div className="col-12 col-md-6 p-2">
            <p className="font-weight-bold">Address:</p>
            <address>
              Royal Fishes – A brand owned by Greenways Marine Exports, Medical
              College Road, Nagercoil – 629001. Kanyakumari District, Tamilnadu,
              India.
            </address>
          </div>
        </div>
        <div class="accordion" id="accordionExample"></div>
        <div className="row">
          <div className="col-6 col-md-3 p-2">
            {/* <p>Privacy Policy</p> */}
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Privacy Policy
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal.It is a long established fact that a
                    reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum
                    is that it has a more-or-less normal
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3  p-2">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Terms & Conditions
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal.It is a long established fact that a
                    reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum
                    is that it has a more-or-less normal
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 p-2">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Refund Policy
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal.It is a long established fact that a
                    reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum
                    is that it has a more-or-less normal
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 p-2">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <a
                  href="#about"
                  class="accordion-button collapsed contact__about"
                  style={{ textDecoration: "none" }}
                  // data-bs-toggle="collapse"
                  // data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  About Us
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Contact
