import React, { Fragment } from "react";
import "./Movies.css";
import "./MovieContainer/MovieContainer";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import MovieContainer from "./MovieContainer/MovieContainer";
import Categories from "../../Components/Categories/Categories";
import axios from "axios";
import Topbar from "../../Components/Top-Bar/Topbar";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const [query, setQuery] = useSearchParams();
  const fetchMovies = async () => {
    const {
      data: { Results },
    } = await axios
      .get(
        `https://localhost:7298/api/Movie/${query.get("GenreIds") ?? "28"}/${
          query.get("Page") ?? "1"
        }`
      )
      .finally((x) => {
        setLoading(false);
      });
    setMovies(Results);
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
      <div className="Name"></div>
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
                movies &&
                movies.map((movie) => (
                  <MovieContainer movie={movie} key={movie.id} />
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
              Back Page
            </button>{" "}
            <button
              onClick={() => {
                setQuery({
                  genreId: query.get("genreId") ?? "28",
                  pageNumber: "2",
                });
              }}
            >
              Next Page
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Movies;
