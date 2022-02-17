import React from "react";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://github.com/wwbarton" target="_blank">
              <i class="fa fa-github-square"></i>
            </a>

            <a href="mailto:wwalt.barton@gmail.com" target="_blank">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/wwbarton/" target="_blank">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/wbartonw5" target="_blank">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
