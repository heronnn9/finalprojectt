import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Topbar from "../../../Layouts/Top-Bar/Topbar";

import "../../../Pages/MoviePage/MovieContainer/MovieContainer";
import "./SeriesInfo.css";
import Loading from "../../../Layouts/Loading/Loading";
import apiService from "../../../Services/API/Api";
const SeriesInfo = () => {
  const [seriesId, setSeriesId] = useState({});
  const { Id } = useParams();

  const fetchId = async () => {
    const respo = await apiService.get(`/TVSeries/TVById${Id}`);
    setSeriesId(respo.data);
    console.log(respo.data);
  };
  React.useEffect(() => {
    fetchId();
  }, []);

  return (
    <div>
      <Topbar />
      <img
        className="BackdropPathh"
        src={`https://image.tmdb.org/t/p/original${seriesId.BackdropPath}`}
        alt=""
      />
      <div className="Poster">
        {seriesId.Name === undefined ? (
          <Loading />
        ) : (
          <div className="Watch-Infoo">
            <div className="Info">
              <img
                className="Backpathh"
                src={`https://image.tmdb.org/t/p/original/${seriesId.PosterPath}`}
                alt="nice"
              ></img>
              <h1 className="Info-Namee">
                {seriesId.Name}
                <div className="trailer"></div>
              </h1>
              <div className="Overvieww">
                <h1>Overview IMDB : {seriesId.VoteAverage}</h1>
                {seriesId.Overview}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default SeriesInfo;
