import React from "react";
import Topbar from "../../Components/Top-Bar/Topbar";
import "../MoviePage/MovieContainer/MovieContainer";
import "./MovieInfo.css";
const MovieInfo = ({ movie }) => {
  return (
    <div>
      <Topbar />
      <div className="Backpath">Selam</div>
    </div>
  );
};
export default MovieInfo;
