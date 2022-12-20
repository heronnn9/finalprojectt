import React from "react";
import "./MovieContainer.css";
const MovieContainer = ({ movie }) => {
  return (
    <div>
      <img
        className="Movie-Banner"
        src={`https://image.tmdb.org/t/p/w400${movie.posterPath}`}
        alt="nice"
      ></img>
      <div className="Movie-Intro">
        <div className="Movie-Adı">{movie.title}</div>
        <div className="Related-Date">{movie.releaseDate}</div>
      </div>
    </div>
  );
};
export default MovieContainer;
