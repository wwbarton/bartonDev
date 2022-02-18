import React from "react";
import robart from "../../assets/robart.png";
function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://github.com/wwbarton"
                target="_blank"
                rel="noopener"
              >
                <i class="fa fa-github fa-3x"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/wwbarton/"
                target="_blank"
                rel="noopener"
              >
                <i class="fa fa-linkedin fa-3x"></i>
              </a>
              <a
                href="mailto:wwalt.barton@gmail.com"
                target="_blank"
                rel="noopener"
              >
                <i className="fa fa-google-plus-square fa-3x"></i>
              </a>
              <a
                href="https://twitter.com/wbartonw5"
                target="_blank"
                rel="noopener"
              >
                <i className="fa fa-twitter fa-3x"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primarty-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Will</span>
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
            <button className="btn primary-btn">
              {""}
              Hire Me
              {""}
            </button>
            <a href="#"></a> {/* resume */}
            <button className="btn highlighted-btn">Get Resume</button>
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
