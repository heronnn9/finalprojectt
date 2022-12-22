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
        <div className="user">selam</div>
        <div className="user-info">
          <div className="user-icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="personal-info">
            <h2>Personal Information</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
