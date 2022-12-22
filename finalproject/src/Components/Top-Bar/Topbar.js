import React from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
function topbar() {
  return (
    <div className="top-bar">
      <div></div>
      <div className="logo2" />
      <Link to="/mainpage" className="title">
        Moviestagram
      </Link>
      <div className="pages">
        <div className="selam">
          <Link to="/movies" className="titles">
            Movies
          </Link>
          <Link to="/series" className="titles">
            Series
          </Link>
          <div className="titles">Explore</div>
          <div className="titles">Top 100</div>
        </div>
        <div className="selam">
          <Link to="/Profile">
            <div className="profile-title">
              Profile
              <FontAwesomeIcon icon={faUser} />
            </div>
          </Link>
          <Link className="logout" to="/">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
}
export default topbar;
