import React, { useState } from "react";
import { Fragment } from "react";
import SeriesContainer from "./SeriesContainer";
import { useSearchParams } from "react-router-dom";
import Categories from "../../Components/Categories/Categories";
import Topbar from "../../Components/Top-Bar/Topbar";
import apiService from "../../Services/API/Api";
const Series = () => {
  const [category, setCategory] = useState([]);
  const [query] = useSearchParams();
  const [series, setSeries] = useState([]);
  const fetchSeries = async () => {
    await apiService
      .get(
        `TVSeries/${query.get("GenreIds") ?? "16"}/${
          query.get("pageNumber") ?? "1"
        }  `
      )
      .then((respo) => {
        setSeries(respo.data);
      });
  };
  React.useEffect(() => {
    fetchSeries();
  });

  React.useEffect(() => {
    apiService.get("TVSeries/genre").then((respon) => {
      setCategory(respon.data);
    });
  }, []);
  return (
    <div>
      <Topbar />
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
              {series &&
                series.map((serie) => (
                  <SeriesContainer serie={serie} key={serie.Id} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Series;
