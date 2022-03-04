import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import robart from "../../assets/images/robart.png";
import "./Profile.css";
function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://bit.ly/wwbarton-github"
                target="_blank"
                rel="noopener"
              >
                <i class="fa fa-github-square fa-2x"></i>
              </a>
              <a
                href="https://bit.ly/linkedin-wwbarton"
                target="_blank"
                rel="noopener"
              >
                <i class="fa fa-linkedin-square fa-2x"></i>
              </a>
              <a
                href="mailto:wwalt.barton@gmail.com"
                target="_blank"
                rel="noopener"
              >
                <i className="fa fa-google-plus-square fa-2x"></i>
              </a>
              <a
                href="https://bit.ly/tweet-bartondev"
                target="_blank"
                rel="noopener"
              >
                <i className="fa fa-twitter-square fa-2x"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primarty-text">
              {" "}
              <span className="highlighted-text">Will Barton</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                FullStack Developer!!{" "}
                <img src={robart} alt="robart" height={35} width={35} />
              </h1>
            </span>
            <span className="profile-role-tagline">MERN Stack Dev</span>
          </div>
          <div className="profile-options">
            <Link to="/work">
              <Button className="btn primary-btn">My Work</Button>
            </Link>
            <Link to="/aboutme">
              <Button className="btn highlighted-btn">About Me</Button>
            </Link>

            {/* <button className="btn highlighted-btn">Get Resume</button> */}
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
