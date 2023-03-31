import React, { useState } from "react";
import { Fragment } from "react";
import SeriesContainer from "./SeriesContainer";
import { useSearchParams } from "react-router-dom";
import Categories from "../../Components/Categories/Categories";
import Topbar from "../../Layouts/Top-Bar/Topbar";
import apiService from "../../Services/API/Api";
const Series = () => {
  const [category, setCategory] = useState([]);
  const [query, setQuery] = useSearchParams();
  const [series, setSeries] = useState([]);
  const fetchSeries = async () => {
    await apiService
      .get(
        `TVSeries/${query.get("GenreIds") ?? "10759"}/${
          query.get("pageNumber") ?? "1"
        }  `
      )
      .then((respo) => {
        setSeries(respo.data);
      });
  };
  React.useEffect(() => {
    fetchSeries();
  }, [query]);

  React.useEffect(() => {
    apiService.get("TVSeries/genre").then((respon) => {
      setCategory(respon.data);
    });
  }, []);
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
              {series &&
                series.map((serie) => (
                  <SeriesContainer serie={serie} key={serie.Id} />
                ))}
            </div>
          </div>
        </div>
        <div className="page-numbers">
          <button
            className="Pagination"
            onClick={() => {
              setQuery({
                genreId: query.get("genreIds") ?? "10759",
                pageNumber: series.pageNumber - 1,
              });
            }}
          >
            Page : {series.pageNumber - 1}
          </button>{" "}
          <button
            className="Pagination"
            onClick={() => {
              setQuery({
                genreId: query.get("genreIds") ?? "10759",
                pageNumber: series.pageNumber + 1,
              });
            }}
          >
            Page: {series.pageNumber + 1}
          </button>{" "}
        </div>
      </div>
    </div>
  );
};
export default Series;
