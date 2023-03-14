import "./Topbar.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import apiService from "../../Services/API/Api";
const Topbar = () => {
  const [name, setName] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    const getUser = apiService.get("/User").then((respo) => {
      setName(respo.data.Name);
      console.log(respo);
    });
  }, []);

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
