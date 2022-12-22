import React, { Fragment } from "react";
import "./Movies.css";
import "./MovieContainer/MovieContainer";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import MovieContainer from "./MovieContainer/MovieContainer";
import Categories from "../Categories/Categories";
import axios from "axios";
import Topbar from "../../Components/Top-Bar/Topbar";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const [query, setQuery] = useSearchParams();

  const fetchMovies = async () => {
    const {
      data: { results },
    } = await axios
      .get(
        `https://localhost:7298/api/Movie/${query.get("genreId") ?? "28"}/${
          query.get("pageNumber") ?? "1"
        }`
      )
      .finally((x) => {
        setLoading(false);
      });
    setMovies(results);
  };

  React.useEffect(() => {
    setLoading(true);
    fetchMovies();
  }, [query]);

  React.useEffect(() => {
    axios.get("https://localhost:7298/api/Movie/genre").then((respon) => {
      setCategory(respon.data);
    });
  }, []);
  return (
    <div>
      <Topbar />
      <div className="Name">Popüler Filmler</div>
      <div className="movie-categories">
        <div className="categories">
          {category.map((categoryData) => (
            <Fragment key={categoryData.id}>
              <Categories category={categoryData} key={categoryData.id} />
            </Fragment>
          ))}
        </div>
        <div className="movies">
          <div className="movie-banner">
            <div className="MovieContainer">
              {loading ? (
                <div>Loading...</div>
              ) : (
                movies.map((movie) => (
                  <MovieContainer key={movie.id} movie={movie} />
                ))
              )}
            </div>
          </div>
          <div className="page-numbers">
            <button
              onClick={() => {
                setQuery({
                  genreId: query.get("genreId") ?? "28",
                  pageNumber: "1",
                });
              }}
            >
              1
            </button>{" "}
            <button
              onClick={() => {
                setQuery({
                  genreId: query.get("genreId") ?? "28",
                  pageNumber: "2",
                });
              }}
            >
              2
            </button>{" "}
            <button
              onClick={() => {
                setQuery("pageNumber", "3");
              }}
            >
              3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Movies;
