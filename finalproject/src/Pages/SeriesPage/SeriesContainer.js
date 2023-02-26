import React from "react";
import { Link } from "react-router-dom";

import "./SeriesContainer.css";
const SeriesContainer = ({ serie }) => {
  return (
    <Link to={`SeriesInfo/${serie.Id}`} key={serie}>
      <div className="Vote">
        <img
          className="Movie-Banner"
          src={`https://image.tmdb.org/t/p/w400${serie.PosterPath}`}
          alt="nice"
        ></img>
      </div>
      <div className="Series-Introduction">
        <div className="Series-Name">
          <div className="Series-Adı">{serie.Name}</div>
        </div>
        <div className="VoteAverage">
          <div>{serie.VoteAverage}</div>
        </div>
      </div>
    </Link>
  );
};
export default SeriesContainer;
