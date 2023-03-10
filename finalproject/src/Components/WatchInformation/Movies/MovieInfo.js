import axios from "axios";
import React from "react";
import Youtube from "react-youtube";
import apiService from "../../../Services/API/Api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Topbar from "../../../Layouts/Top-Bar/Topbar";
import "../../../Pages/MoviePage/MovieContainer/MovieContainer";
import "./MovieInfo.css";
const MovieInfo = () => {
  const [movieId, setMovieId] = useState([]);
  const [trailer, setTrailer] = useState("");
  const { Id } = useParams();
  const fetchId = async () => {
    await axios
      .get(`https://localhost:7298/api/Movie/GetMovieById${Id}`)
      .then((respo) => {
        setMovieId(respo.data);
      });
  };
  const fetchTrailer = async () => {
    const testTrailer = await apiService.get(`/Movie/MovieTrailer ${Id}`);
    setTrailer(testTrailer.data.Key);
    console.log(testTrailer.data);
    console.log(testTrailer.data.Key);
  };
  useEffect(() => {
    fetchId();
    fetchTrailer();
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
              <div className="trailer">
                <Youtube videoId={`${trailer}`} />
              </div>
            </h1>
            <div className="Overvieww">
              <h1>Overview IMDB : {movieId.VoteAverage}</h1>
              {movieId.Overview}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieInfo;
