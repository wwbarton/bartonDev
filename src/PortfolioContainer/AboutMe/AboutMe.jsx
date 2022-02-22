import React from "react";
import "./AboutMe.css";
import Profile from "../../assets/images/profile.jpg";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import robart from "../../assets/images/robart.png";

function AboutMe() {
  return (
    <section className="section about-section gray-bg" id="about">
      <div className="container">
        <div className="row align-items-center justify-content-around flex-row-reverse">
          <div className=" about-container col-lg-6">
            <div className="about-text">
              <h3>Do some awsome stuff with me, Will Barton!!</h3>
              <h4 className="theme-color">
                UI / UX Designer &amp; Web Developer{" "}
                <img src={robart} alt="robart" height={45} width={45} />
              </h4>
              <p>
                I design and develop services for a myriad of situations,
                accomplished in HTML, CSS, Javascript, Node.js, MySQL, MongoDB
                and Mongoose, React.js, GraphQL and more. My passion is to
                design digital user experiences through bold interface and
                meaningful interactions.
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
