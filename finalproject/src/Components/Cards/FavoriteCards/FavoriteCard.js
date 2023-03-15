import React from "react";
import { Link } from "react-router-dom";
import { CardControl } from "../../CardControls/CardControl";
import "../MovieCards/MovieContainer.css";
const MovieContainer = ({ movie, type }) => {
  return (
    <div className="Movie-Container">
      <img
        className="Movie-Banner"
        src={`https://image.tmdb.org/t/p/w400${movie.PosterPath}`}
        alt="nice"
      ></img>
      <div className="Movie-Introduction">
        <div className="Name-Relase">
          <div className="Movie-Adı">{movie.Title}</div>
          <CardControl movie={movie} />
        </div>
      </div>
    </div>
  );
};
export default MovieContainer;
