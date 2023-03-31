import { GlobalContext } from "../../../Context/GlobalState";
import "./Index.css";
import apiService from "../../../Services/API/Api";
import { useContext, useState, useEffect } from "react";
const List = ({ movie }) => {
  const [user, setUser] = useState("");
  const [favoriteMovie, setFavoriteMovie] = useState("");
  const { addMovieToFavoriteList, favoritelist } = useContext(GlobalContext);
  let storedMovie = favoritelist.find((o) => o.Id === movie.Id);
  const favoritelistDisabled = storedMovie ? true : false;
  const addMovieFavoriteList = async (e) => {
    e.preventDefault();
  };
  const jsonData = localStorage.getItem("user");
  useEffect(() => {
    setUser(JSON.parse(jsonData));
  }, [jsonData]);
  return (
    <>
      <div>
        <div className="List">
          <img
            className="List-Banner"
            src={`https://image.tmdb.org/t/p/w400${movie.PosterPath}`}
            alt="movie"
          ></img>
          <button
            className="fvrt-Icn"
            disabled={favoritelistDisabled}
            onClick={() => addMovieToFavoriteList(movie)}
          >
            Add To Favorite
          </button>
        </div>
      </div>
    </>
  );
};

export default List;
