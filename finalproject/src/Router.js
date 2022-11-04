import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Mainpage from "./Pages/Mainpage";
function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<App />} />
        <Route path="/mainpage" element={<Mainpage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Routers;
