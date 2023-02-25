import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
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
    console.log(Id);
    fetchId();
  }, []);

  return (
    <div>
      <Topbar />
      <div className="Watch">
        <img
          className="Backpath"
          src={`https://image.tmdb.org/t/p/w400${movieId.PosterPath}`}
          alt="nice"
        ></img>
        <div className="Watch-Info">selam</div>
      </div>
    </div>
  );
};
export default MovieInfo;
