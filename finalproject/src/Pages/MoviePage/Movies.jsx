import React, { Fragment } from "react";
import "./Movies.css";
import MovieContainer from "../../Components/Cards/MovieCards/MovieContainer";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../../Layouts/Loading/Loading";
import Topbar from "../../Layouts/Top-Bar/Topbar";
import apiService from "../../Services/API/Api";
import Categories from "../../Components/Categories/Categories";

const Movies = () => {
  const [category, setCategory] = useState([]);
  let [query, setQuery] = useSearchParams("");
  const [loading, setLoading] = useState(false);
  const [testResult, setTestResult] = useState({
    Results: [],
  });

  const fetchMovies = async () => {
    setLoading(true);
    const testData = await apiService.get(
      `Movie/${query.get("GenreIds") ?? "28"}/${query.get("pageNumber") ?? "1"}`
    );
    setTestResult(testData.data);
    console.log(testData);
    setTimeout(() => {
      setLoading(false);
    }, 600);
  };
  const fetchCategory = async () => {
    const testCategory = await apiService.get("Movie/genre");
    setCategory(testCategory.data);
  };
  useEffect(() => {
    fetchMovies();
    fetchCategory();
  }, [query]);

  return (
    <div className="background-site">
      <Topbar />
      <div className="Name">Categories</div>
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
                <Fragment key={categoryData.id}>
                  <Categories category={categoryData} key={categoryData.id} />
                </Fragment>
              );
            })}
        </select>
      </div>
      <div className="movie-categories">
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
              className="Pagination"
              onClick={() => {
                setQuery({
                  genreId: query.get("genreIds") ?? "28",
                  pageNumber: testResult.Page - 1,
                });
              }}
            >
              Page : {testResult.Page - 1}
            </button>{" "}
            <button
              className="Pagination"
              onClick={() => {
                setQuery({
                  genreId: query.get("genreIds") ?? "28",
                  pageNumber: testResult.Page + 1,
                });
              }}
            >
              Page: {testResult.Page + 1}
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Movies;
