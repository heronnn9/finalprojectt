import { useEffect, useState } from "react";
import "./Mainpage.css";
import apiService from "../../Services/API/Api";
import Topbar from "../../Layouts/Top-Bar/Topbar";
import Search from "../../Components/Search/Search";
import List from "../../Components/Cards/SearchCard/List";
const Mainpage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movie, setMovie] = useState([]);

  const fetchMovies = async () => {
    const testdata = await apiService.get(
      `/Movie/Search/1?query=${searchValue}}}`
    );
    setMovie(testdata.data);
  };

  useEffect(() => {
    fetchMovies(searchValue);
  }, [searchValue]);
  return (
    <div className="site">
      <Topbar />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="Filmler">
        {movie.Results?.map((movie, index) => (
          <List key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};
export default Mainpage;
