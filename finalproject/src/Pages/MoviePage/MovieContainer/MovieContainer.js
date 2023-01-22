import React from "react";
import "./MovieContainer.css";
const MovieContainer = ({ movie }) => {
  return (
    <div key={movie}>
      <img
        className="Movie-Banner"
        src={`https://image.tmdb.org/t/p/w400${movie.PosterPath}`}
        alt="nice"
      ></img>
      <div className="Movie-Intro">
        <div className="Movie-Adı">{movie.Title}</div>
        <div className="Related-Date">{movie.ReleaseDate}</div>
      </div>
    </div>
  );
};
export default MovieContainer;
