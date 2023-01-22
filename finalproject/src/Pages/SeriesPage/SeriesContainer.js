import React from "react";
import "./SeriesContainer.css";
const SeriesContainer = ({ serie }) => {
  return (
    <div key={serie}>
      <img
        className="Movie-Banner"
        src={`https://image.tmdb.org/t/p/w400${serie.PosterPath}`}
        alt="nice"
      ></img>
      <div className="Movie-Intro">
        <div className="Movie-Adı">{serie.Name}</div>
        <div className="Related-Date">{serie.ReleaseDate}</div>
      </div>
    </div>
  );
};
export default SeriesContainer;
