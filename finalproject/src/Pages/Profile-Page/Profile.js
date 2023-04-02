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
    <div className="background-profil">
      <Topbar />
      <div className="Profile-Info">
        <div>
          <FontAwesomeIcon className="Profile-Icon" icon={faUser} />
        </div>
        <div>
          <h1>Hello {user.Name} !!! </h1>
        </div>
      </div>
    </div>
  );
};
export default Profile;
