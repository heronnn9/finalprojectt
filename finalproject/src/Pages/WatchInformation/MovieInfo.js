import React from "react";
import Topbar from "../../Components/Top-Bar/Topbar";
import "../MoviePage/MovieContainer/MovieContainer";
import "./MovieInfo.css";
const MovieInfo = ({ movie }) => {
  console.log(movie);
  return (
    <div>
      <Topbar />
      <div className="Backpath"></div>
    </div>
  );
};
export default MovieInfo;
