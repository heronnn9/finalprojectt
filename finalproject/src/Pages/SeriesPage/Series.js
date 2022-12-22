import React from "react";
import { Fragment } from "react";
import SeriesContainer from "./SeriesContainer";
import Categories from "../Categories/Categories";
import axios from "axios";
import Topbar from "../../Components/Top-Bar/Topbar";
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
