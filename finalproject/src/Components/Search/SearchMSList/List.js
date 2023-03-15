import { Link } from "react-router-dom";
import { GlobalContext } from "../../../Context/GlobalState";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Index.css";
import { useContext } from "react";
const List = ({ movie }) => {
  const { addMovieToFavoriteList, favoritelist } = useContext(GlobalContext);
  let storedMovie = favoritelist.find((o) => o.Id === movie.Id);
  const favoritelistDisabled = storedMovie ? true : false;

  return (
    <>
      <div>
        <div className="List">
          <img
            className="Movie-Banner"
            src={`https://image.tmdb.org/t/p/w400${movie.PosterPath}`}
            alt="movie"
          ></img>
          <button
            disabled={favoritelistDisabled}
            onClick={() => addMovieToFavoriteList(movie)}
          >
            addTo favorite
          </button>
        </div>
      </div>
    </>
  );
};

export default List;
