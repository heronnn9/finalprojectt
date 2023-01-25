import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../Pages/LoginPage/App";
import Mainpage from "../Pages/MainPage/Mainpage";
import Movies from "../Pages/MoviePage/Movies";
import Series from "../Pages/SeriesPage/Series";
import Profile from "../Pages/Profile-Page/Profile";
import MovieInfo from "../Pages/WatchInformation/MovieInfo";
function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/MovieInfo/:Id" element={<MovieInfo />} />
        <Route path="/series" element={<Series />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Routers;
