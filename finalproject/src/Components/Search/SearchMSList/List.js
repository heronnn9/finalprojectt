import React from "react";
import "./Index.css";
const List = ({ movie }) => {
  return (
    <>
      <div className="List">
        <img
          className="Movie-Banner"
          src={`https://image.tmdb.org/t/p/w400${movie.PosterPath}`}
          alt="movie"
        ></img>
      </div>
    </>
  );
};

export default List;
