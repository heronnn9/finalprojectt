import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import Topbar from "../../Layouts/Top-Bar/Topbar";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import FavoriteCard from "../../Components/Cards/FavoriteCards/FavoriteCard";
const Profile = () => {
  const [user, setUser] = useState("");

  const jsonData = localStorage.getItem("user");
  useEffect(() => {
    setUser(JSON.parse(jsonData));
  }, [jsonData]);
  const { favoritelist } = useContext(GlobalContext);
  return (
    <div className="background-profile">
      <Topbar />
      <div className="Profile-Info">
        <div className="User">
          <div>
            <FontAwesomeIcon className="Profile-Icon" icon={faUser} />
          </div>
          <div className="User-Name">
            <h2> {user.Name} </h2>
            <h2>{user.Surname}</h2>
          </div>
        </div>
        <div className="Favorite-List">
          <h1>
            Favori Listesi Oluştur <FontAwesomeIcon icon={faPlusSquare} beat />
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Profile;
