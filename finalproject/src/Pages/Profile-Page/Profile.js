import { useEffect, useState } from "react";
import Topbar from "../../Layouts/Top-Bar/Topbar";
import "./Profile.css";
import { useSearchParams } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import Popup from "../../Components/Popup/Popup";
import apiService from "../../Services/API/Api";

const Profile = () => {
  const LISTPOST_URL = "/MovieFavoriteList/CreationMovieList";
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState("");
  const [value, setValue] = useState([]);

  const [addlist, SetAddList] = useState([]);
  const [favoritelist, setFavoriteList] = useState([]);
  const [name, setName] = useState("");

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const jsonData = localStorage.getItem("user");
  useEffect(() => {
    setUser(JSON.parse(jsonData));
    (async () => {
      await fetchList();
    })();
  }, [jsonData]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await apiService.post(LISTPOST_URL, {
      Name: name,
      userId: user.Id,
    });
    console.log(response);
    SetAddList(response);
    console.log(response);
  };

  const fetchList = async () => {
    const x = JSON.parse(localStorage.getItem("user"));
    console.log(x);
    const testdata = await apiService.get(
      `/MovieFavoriteList/GetListByUserId${x.Id}`
    );

    //Data array olarak geldiği zaman alttaki array işaretini kaldır.
    setFavoriteList([testdata.data]);
  };

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
            <h2 className="Surname">{user.Surname}</h2>
          </div>
        </div>
        <div className="Favorite-List">
          <h2>Favori Listesi Oluştur</h2>
          <button className="Add-Favorite" onClick={togglePopup}>
            <FontAwesomeIcon icon={faPlusSquare} beat />
          </button>

          {isOpen && (
            <Popup
              content={
                <form onSubmit={handleSubmit}>
                  <h2>Favori Listesi Oluştur</h2>
                  <div className="List-Input">
                    <input
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Liste Adı..."
                    />
                  </div>

                  <button>Oluştur</button>
                </form>
              }
              handleClose={togglePopup}
            />
          )}
        </div>
      </div>
      <div>
        <h1 className="Font">Favori Listeleri</h1>
        <div>
          {favoritelist?.map((list) => (
            <div>{list.Name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Profile;
{
  /* <button className="Add-Favorite">
  <FontAwesomeIcon icon={faPlusSquare} beat />
</button> */
}
