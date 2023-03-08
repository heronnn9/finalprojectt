import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../Pages/LoginPage/App";
import Mainpage from "../Pages/MainPage/Mainpage";
import Movies from "../Pages/MoviePage/Movies";
import Series from "../Pages/SeriesPage/Series";
import Profile from "../Pages/Profile-Page/Profile";
import SeriesInfo from "../Components/WatchInformation/Series/SeriesInfo";
import MovieInfo from "../Components/WatchInformation/Movies/MovieInfo";
import Register from "../Components/RegisterPage/Register";
function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/MovieInfo/:Id" element={<MovieInfo />} />
        <Route path="/series" element={<Series />} />
        <Route path="/series/SeriesInfo/:Id" element={<SeriesInfo />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Routers;
