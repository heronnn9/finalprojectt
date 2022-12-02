import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Mainpage from "./Pages/Mainpage";
import Movies from "./Pages/MoviePage/Movies";
import Series from "./Pages/SeriesPage/Series";
function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<App />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Routers;
