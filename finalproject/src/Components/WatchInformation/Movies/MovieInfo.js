import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Topbar from "../../../Layouts/Top-Bar/Topbar";
import "../../../Pages/MoviePage/MovieContainer/MovieContainer";
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
  }, []);

  return (
    <div>
      <Topbar />
      <div className="Posterr">
        <div className="Watch-Infoo">
          <div>
            <img
              className="BackdropPathh"
              src={`https://image.tmdb.org/t/p/original${movieId.BackdropPath}`}
              alt=""
            />
          </div>
          <div className="Info">
            <img
              className="Backpathh"
              src={`https://image.tmdb.org/t/p/w300/${movieId.PosterPath}`}
              alt="nice"
            ></img>
            <h1 className="Info-Namee">
              {movieId.Title}
              <h5> IMDB : {movieId.VoteAverage}</h5>
            </h1>
            <div className="Overvieww">
              <h1>Overview</h1>
              {movieId.Overview}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieInfo;
