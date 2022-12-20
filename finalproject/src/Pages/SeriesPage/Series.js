import React from "react";
import { Fragment } from "react";
import SeriesContainer from "./SeriesContainer";
import { Link } from "react-router-dom";
import Categories from "../Categories/Categories";
import axios from "axios";
import { useState } from "react";

const Series = () => {
  const [category, setCategory] = useState([]);

  React.useEffect(() => {
    axios.get("https://localhost:7298/api/Movie/genre").then((respon) => {
      setCategory(respon.data);
    });
  }, []);
  return (
    <div>
      <div className="top-bar">
        <div className="logo2"> </div>
        <Link to="/mainpage " className="title">
          Moviestagram
        </Link>
        <div className="selam">
          <Link to="/movies" className="titles">
            Filmler
          </Link>
          <Link to="/series" className="titles">
            Diziler
          </Link>
          <div className="titles">Keşfet</div>
          <div className="titles">Top 100</div>
        </div>
      </div>
      <div className="Name">Popüler Diziler</div>
      <div className="movie-categories">
        <div className="categories">
          <h2 className="category-title">Kategoriler</h2>
          {category.map((categoryData) => (
            <Fragment key={categoryData.id}>
              <Categories category={categoryData} key={categoryData.id} />
            </Fragment>
          ))}
        </div>
        <div className="movies">
          <div className="movie-banner">
            <div className="MovieContainer">
              <SeriesContainer />
              <SeriesContainer />
              <SeriesContainer />
              <SeriesContainer />
              <SeriesContainer />
              <SeriesContainer />
              <SeriesContainer />
              <SeriesContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Series;
