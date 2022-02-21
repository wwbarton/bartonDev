import React from "react";
import "./AboutMe.css";
import Profile from "../../assets/images/profile.jpg";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <section className="section about-section gray-bg" id="about">
      <div className="container">
        <div className="row align-items-center justify-content-around flex-row-reverse">
          <div className="col-lg-6">
            <div className="about-text">
              <h3>Do some awsome stuff with me.</h3>
              <h4 className="theme-color">
                UI / UX Designer &amp; Web Developer
              </h4>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores. My passion is to design digital user
                experiences through the bold interface and meaningful
                interactions.
              </p>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
              <div className="btn-bar">
                <Link to="/work">
                  <a className="px-btn theme" href="#">
                    View Works
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 text-center">
            <div>
              <Image className="about-img" src={Profile} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
