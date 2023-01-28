import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Topbar from "../../Components/Top-Bar/Topbar";
import "../MoviePage/MovieContainer/MovieContainer";
import "./MovieInfo.css";
const MovieInfo = () => {
  const [movieId, setMovieId] = useState([]);
  const { Id } = useParams();
  const fetchId = async () => {
    await axios
      .get(`https://localhost:7298/api/Movie/GetMovieById${Id}`)
      .then((respo) => {
        setMovieId(respo.data);
      });
  };
  React.useEffect(() => {
    fetchId();
  });

  return (
    <div>
      <Topbar />
      <div className="Poster">
        <div className="Watch-Info">
          <div>
            <img
              className="BackdropPath"
              src={`https://image.tmdb.org/t/p/original${movieId.BackdropPath}`}
              alt=""
            />
          </div>
          <img
            className="Backpath"
            src={`https://image.tmdb.org/t/p/w400${movieId.PosterPath}`}
            alt="nice"
          ></img>
          <h1 className="Info-Name">{movieId.Title}</h1>
          <div className="Overview">
            <h1>Overview</h1>
            {movieId.Overview}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieInfo;
