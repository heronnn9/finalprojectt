import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import Topbar from "../../Layouts/Top-Bar/Topbar";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import FavoriteCard from "../../Components/Cards/FavoriteCards/FavoriteCard";
const Profile = () => {
  const [user, setUser] = useState("");

  const jsonData = localStorage.getItem("user");
  useEffect(() => {
    setUser(JSON.parse(jsonData));
  }, [jsonData]);
  const { favoritelist } = useContext(GlobalContext);
  return (
    <div className="Profil">
      <Topbar />
      <div className="profile">
        <div className="user-info">
          <div className="user-icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="personal-info">
            <h2>{user.Name}</h2>
          </div>
        </div>
      </div>
      <div className="Under-Info">
        <div>
          <h1 className="Favori-Text">Favoriler</h1>
          <div className="Favorites">
            {favoritelist.map((movie) => (
              <FavoriteCard movie={movie} />
            ))}
          </div>
        </div>
        <h1 className="CrtFvrt-txt">Favori Listesi Oluştur</h1>
      </div>
    </div>
  );
};
export default Profile;
