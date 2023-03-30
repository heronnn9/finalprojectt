import "./Topbar.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
const Topbar = () => {
  const [user, setUser] = useState("");

  const jsonData = localStorage.getItem("user");
  useEffect(() => {
    setUser(JSON.parse(jsonData));
    console.log(jsonData);
  }, [jsonData]);

  return (
    <div className="top-bar">
      <div></div>
      <div className="logo2" />
      <Link to="/mainpage">
        <h2 className="Logo">Moviestagram</h2>
      </Link>
      <div className="pages">
        <div className="selam">
          <Link to="/movies" className="titles">
            Popular Movies
          </Link>
          <Link to="/series" className="titles">
            Popular Series
          </Link>
          <div className="titles">Explore</div>
        </div>
        <div className="selam">
          <Link to="/Profile">
            <div className="profile-title">
              {user.Name}
              <FontAwesomeIcon className="User-Icon" icon={faUser} />
            </div>
          </Link>
          <Link className="logout" to="/">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Topbar;
