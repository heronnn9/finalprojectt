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
  };
  React.useEffect(() => {
    fetchId();
  }, []);

  return (
    <div>
      <Topbar />
      <div className="Poster">
        {seriesId.Name === undefined ? (
          <Loading />
        ) : (
          <div className="Watch-Info">
            <div>
              <img
                className="BackdropPath"
                src={`https://image.tmdb.org/t/p/original${seriesId.BackdropPath}`}
                alt=""
              />
            </div>
            <img
              className="Backpath"
              src={`https://image.tmdb.org/t/p/original/${seriesId.PosterPath}`}
              alt="nice"
            ></img>
            <div className="Info-Name">
              <h1>{seriesId.Name}</h1>
              <h3>{seriesId.Genres.Name}</h3>
            </div>
            <div className="Overview">
              <h1>Overview</h1>
              {seriesId.Overview}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default SeriesInfo;
