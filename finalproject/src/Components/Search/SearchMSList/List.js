import React from "react";
import { Link } from "react-router-dom";
import "./Index.css";
const List = ({ movie }) => {
  return (
    <>
      <Link to={`http://localhost:3000/movies/MovieInfo/${movie.Id}`}>
        <div className="List">
          <img
            className="Movie-Banner"
            src={`https://image.tmdb.org/t/p/w400${movie.PosterPath}`}
            alt="movie"
          ></img>
        </div>
      </Link>
    </>
  );
};

export default List;
