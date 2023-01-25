import React from "react";
import { Link } from "react-router-dom";
import "./MovieContainer.css";
const MovieContainer = ({ movie }) => {
  return (
    <Link to={`MovieInfo/${movie.Id}`} key={movie}>
      <img
        className="Movie-Banner"
        src={`https://image.tmdb.org/t/p/w400${movie.PosterPath}`}
        alt="nice"
      ></img>
      <div className="Movie-Introduction">
        <div className="Name-Relase">
          <div className="Movie-Adı">{movie.Title}</div>
          <div className="Vote-Average">IMDB {movie.VoteAverage}</div>
        </div>
      </div>
    </Link>
  );
};
export default MovieContainer;
