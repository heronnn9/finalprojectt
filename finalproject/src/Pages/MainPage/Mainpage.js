import { useEffect, useState } from "react";
import "./Mainpage.css";
import apiService from "../../Services/API/Api";
import Topbar from "../../Layouts/Top-Bar/Topbar";
import Search from "../../Components/Search/Search";
import List from "../../Components/Search/SearchMSList/List";

const Mainpage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movie, setMovie] = useState([]);

  const fetchMovies = async () => {
    const testdata = await apiService.get(
      `/Movie/Search/1?query=${searchValue}}}`
    );
    setMovie(testdata.data);
    console.log(testdata.data.Results);
  };

  useEffect(() => {
    fetchMovies(searchValue);
  }, [searchValue]);
  return (
    <div className="site">
      <Topbar />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <div>
        {movie &&
          movie.Results.map((movie) => <List key={movie} movie={movie} />)}
      </div>
    </div>
  );
};
export default Mainpage;
