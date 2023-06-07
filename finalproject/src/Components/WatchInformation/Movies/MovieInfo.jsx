import axios from "axios";
import React from "react";
import Youtube from "react-youtube";
import apiService from "../../../Services/API/Api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Topbar from "../../../Layouts/Top-Bar/Topbar";
import "./MovieInfo.css";
const MovieInfo = () => {
  const [movieId, setMovieId] = useState([]);
  const [trailer, setTrailer] = useState("");
  const { Id } = useParams();
  const fetchId = async () => {
    await axios
      .get(`https://moviestagram.azurewebsites.net/api/Movie/GetMovieById${Id}`)
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
      <img
        className="BackdropPathh"
        src={`https://image.tmdb.org/t/p/original${movieId.BackdropPath}`}
        alt=""
      />
      <div className="Posterr">
        <div className="Watch-Infoo">
          <div className="Info">
            <img
              className="Backpathh"
              src={`https://image.tmdb.org/t/p/original/${movieId.PosterPath}`}
              alt=""
            ></img>
            <div className="Info-Namee">
              <div className="Selam">
                <h1>{movieId.Title}</h1>
                <div>{movieId.Overview}</div>
              </div>
              <div className="trailer">
                <Youtube videoId={`${trailer}`} />
                <h1> IMDB : {movieId.VoteAverage}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieInfo;
