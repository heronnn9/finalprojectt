import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";

export const CardControl = ({ movie, type }) => {
  const { removeMovieFromFavoriteList } = useContext(GlobalContext);

  return (
    <div className="innet-card-controls">
      <button onClick={() => removeMovieFromFavoriteList(movie.Id)}>
        Favoriden Çıkar
      </button>
    </div>
  );
};
