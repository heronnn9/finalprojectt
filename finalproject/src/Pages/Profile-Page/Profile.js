import { useEffect, useState } from "react";
import apiService from "../../Services/API/Api";
import Topbar from "../../Layouts/Top-Bar/Topbar";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
const Profile = () => {
  const [name, setName] = useState([]);

  useEffect(() => {
    const getUser = apiService.get("/User").then((respo) => {
      setTimeout(() => {}, 600);
      setName(respo.data);
      console.log(respo.data);
    });
  }, []);
  const found = name.find((obj) => {
    return obj.Id === 7;
  });
  return (
    <div className="Profil">
      <Topbar />
      <div className="profile">
        <div className="user-info">
          <div className="user-icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="personal-info">
            <h2>{found?.Name}</h2>
            <h2 className="Surname">{found?.Surname}</h2>
          </div>
        </div>
      </div>
      <div className="Under-Info">
        <h1>Favoriler</h1>
        <h1>Favori Listesi Oluştur</h1>
      </div>
    </div>
  );
};
export default Profile;
