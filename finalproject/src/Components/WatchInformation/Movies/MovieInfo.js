import axios from "axios";
import React from "react";
import Youtube from "react-youtube";
import apiService from "../../../Services/API/Api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Topbar from "../../../Layouts/Top-Bar/Topbar";
import "../../../Pages/MoviePage/MovieContainer/MovieContainer";
import "./MovieInfo.css";
import AddFavorite from "../../AddFavorite/AddFavorite";
const MovieInfo = () => {
  const [addFavorite, setAddFavorite] = useState([]);
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
              alt="nice"
            ></img>
            <div className="Info-Namee">
              <div className="Selam">
                <h1>{movieId.Title}</h1>
                <h1 className="Add-Favorites">
                  Add to Favorite List : {AddFavorite()}
                </h1>
              </div>
              <div className="trailer">
                <Youtube videoId={`${trailer}`} />
              </div>
            </div>
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
