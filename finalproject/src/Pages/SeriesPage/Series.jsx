import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import SeriesContainer from "./SeriesContainer";
import Loading from "../../Layouts/Loading/Loading";
import { useSearchParams } from "react-router-dom";
import Categories from "../../Components/Categories/Categories";
import Topbar from "../../Layouts/Top-Bar/Topbar";
import apiService from "../../Services/API/Api";
const Series = () => {
  const [category, setCategory] = useState([]);
  const [query, setQuery] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [series, setSeries] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchSeries = async () => {
    setLoading(true);
    const respo = await apiService.get(
      `TVSeries/${query.get("GenreIds") ?? "10759"}/${
        query.get("pageNumber") ?? "1"
      }`
    );
    setPageNumber(parseInt(query.get("pageNumber") ?? "1"));
    setSeries(respo.data);
    setLoading(false);
  };
  const fetchCategory = async () => {
    const testCategory = await apiService.get("TVSeries/genre");
    setCategory(testCategory.data);
  };
  useEffect(() => {
    fetchSeries();
    fetchCategory();
  }, [query]);

  return (
    <div className="background-site">
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
              {/* {series &&
                series.map((serie) => (
                  <SeriesContainer serie={serie} key={serie.Id} />
                ))} */}
              {loading ? (
                <Loading />
              ) : (
                series.map((serie) => (
                  <SeriesContainer serie={serie} key={serie.Id} />
                ))
              )}
            </div>
          </div>
        </div>
        <div className="page-numbers">
          <button
            disabled={pageNumber === 1}
            className="Pagination"
            onClick={() => {
              setQuery({
                genreId: query.get("genreIds") ?? "10759",
                pageNumber: pageNumber - 1,
              });
            }}
          >
            Page : {pageNumber - 1}
          </button>{" "}
          <button
            className="Pagination"
            onClick={() => {
              setQuery({
                genreId: query.get("genreIds") ?? "10759",
                pageNumber: pageNumber + 1,
              });
            }}
          >
            Page: {pageNumber + 1}
          </button>{" "}
        </div>
      </div>
    </div>
  );
};
export default Series;
