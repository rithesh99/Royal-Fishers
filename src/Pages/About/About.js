import React from "react";
import "./About.css";
import Vision from "../../Assets/vision.jpg";
import Process from "../../Assets/process.jpg";
import Approach from "../../Assets/approach.jpg";
function About() {
  return (
    <div className="about container" id="about">
      <h1 className="text-center display-3">About</h1>
      <div className="row p-4">
        <h3 className="about__side__heading">Our Mission</h3>
        <div className="row p-4">
          <div className="col-12 col-md-4">
            <img src={Vision} className="about__image" />
          </div>
          <div className="col-12 col-md-8 pt-3 text-center">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal.It
              is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
