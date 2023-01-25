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
      <div className="Series-Introduction">
        <div className="Series-Name">
          <div className="Series-Adı">{serie.Name}</div>
        </div>
        <div className="VoteAverage">
          <div>{serie.VoteAverage}</div>
        </div>
      </div>
    </div>
  );
};
export default SeriesContainer;
