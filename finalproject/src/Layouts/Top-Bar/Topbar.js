import "./Topbar.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import apiService from "../../Services/API/Api";
const Topbar = () => {
  const [name, setName] = useState([]);

  useEffect(() => {
    apiService.get("/User").then((respo) => {
      setTimeout(() => {}, 600);
      setName(respo.data);
    });
  }, []);
  const found = name.find((obj) => {
    return obj.Id === 7;
  });

  return (
    <div className="top-bar">
      <div></div>
      <div className="logo2" />
      <Link to="/mainpage" className="title">
        <h2>Moviestagram</h2>
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
          <div className="titles">Top 100</div>
        </div>
        <div className="selam">
          <Link to="/Profile">
            <div className="profile-title">
              {found?.Name}
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
};
export default Topbar;
