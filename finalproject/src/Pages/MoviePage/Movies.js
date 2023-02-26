import React, { Fragment } from "react";
import "./Movies.css";
import "./MovieContainer/MovieContainer";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import MovieContainer from "./MovieContainer/MovieContainer";
import Loading from "../../Layouts/Loading/Loading";
import Topbar from "../../Layouts/Top-Bar/Topbar";
import apiService from "../../Services/API/Api";
import Categories from "../../Components/Categories/Categories";

const Movies = () => {
  const [category, setCategory] = useState([]);
  let [query, setQuery] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [testResult, setTestResult] = useState({
    Results: [],
    title: "Avengers",
  });

  const fetchMovies = async () => {
    setLoading(true);
    const testData = await apiService.get(
      `Movie/${query.get("GenreIds") ?? "28"}/${query.get("pageNumber") ?? "1"}`
    );
    setTestResult(testData.data);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  const fetchCategory = async () => {
    const testCategory = await apiService.get("Movie/genre");
    setCategory(testCategory.data);
  };
  React.useEffect(() => {
    fetchMovies();
    fetchCategory();
  }, [query]);

  return (
    <div>
      <Topbar />
      <div className="Name">Categories</div>
      <div className="movie-categories">
        <div className="categories">
          <select
            className="selects"
            onChange={(e) => {
              setQuery({
                GenreIds: e.target.value,
              });
            }}
          >
            {category.length > 0 &&
              category.map((categoryData) => {
                return (
                  // <option key={categoryData.Id} value={categoryData.Id}>
                  //   {categoryData.Name}
                  // </option>
                  <Fragment key={categoryData.id}>
                    <Categories category={categoryData} key={categoryData.id} />
                  </Fragment>
                );
              })}
          </select>
        </div>
        <div className="movies">
          <div className="movie-banner">
            <div className="MovieContainer">
              {loading ? (
                <Loading />
              ) : (
                testResult.Results.map((movie) => (
                  <MovieContainer movie={movie} key={movie.Id} />
                ))
              )}
            </div>
          </div>
          <div className="page-numbers">
            <button
              onClick={() => {
                setQuery({
                  genreId: query.get("genreIds") ?? "28",
                  pageNumber: testResult.Page - 1,
                });
              }}
            >
              Back Page
            </button>{" "}
            <button
              onClick={() => {
                setQuery({
                  genreId: query.get("genreIds") ?? "28",
                  pageNumber: testResult.Page + 1,
                });
              }}
            >
              Next Page {testResult.Page + 1}
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Movies;
