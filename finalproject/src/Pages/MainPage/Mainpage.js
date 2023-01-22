import React from "react";
import "./Mainpage.css";
import Topbar from "../../Components/Top-Bar/Topbar";
function Mainpage() {
  return (
    <div className="site">
      <Topbar />
      <div className="search">
        <div className="search-bar">
          <div className="search-bar-color">
            <div className="Yazılar">
              <div className="Welcome">Welcome.</div>
              <div className="Under Welcome"></div>
              Millions of movies, TV shows and people to discover. Explore now.{" "}
            </div>
            <div className="search-input">
              <input
                type="text"
                placeholder="Film Dizi Kişi Ara..."
                className="search-input"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="colum"></div>
    </div>
  );
}
export default Mainpage;
