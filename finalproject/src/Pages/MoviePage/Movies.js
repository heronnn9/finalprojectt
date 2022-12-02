import React, { Fragment } from "react";
import "./Movies.css";
import "./MovieContainer";
import { Link } from "react-router-dom";
import { useState } from "react";
import MovieContainer from "./MovieContainer";
import Categories from "../Categories/Categories";
import axios from "axios";
const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [category, setCategory] = useState([]);
  React.useEffect(() => {
    axios.get("").then((respo) => {
      setMovie(respo.data);
    });
  }, []);
  React.useEffect(() => {
    axios.get("").then((respon) => {
      setCategory(respon.data);
    });
  }, []);
  return (
    <div>
      <div className="top-bar">
        <div className="logo2"> </div>
        <Link to="/mainpage" className="title">
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
      <div className="Name">Popüler Filmler</div>
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
              {movie.map((movieData) => (
                <Fragment key={movieData.id}>
                  <MovieContainer movie={movieData} key={movieData.id} />
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Movies;
