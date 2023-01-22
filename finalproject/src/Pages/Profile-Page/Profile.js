import React from "react";
import Topbar from "../../Components/Top-Bar/Topbar";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
const Profile = () => {
  return (
    <div>
      <Topbar />
      <div className="profile">
        <div className="user-info">
          <div className="user-icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="personal-info">
            <h2>Heron</h2>
            <h3>Member Since 2022</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
