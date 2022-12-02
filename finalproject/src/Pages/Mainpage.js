import React from "react";
import { Link } from "react-router-dom";
import "./Mainpage.css";
function Mainpage() {
  return (
    <div className="site">
      <div className="top-bar">
        <div className="logo2"> </div>
        <div className="title">Moviestagram</div>
        <div className="selam">
          <Link to="/movies" className="titles">
            Filmler
          </Link>
          <Link to="/series" className="titles">
            Diziler
          </Link>
          <div className="titles">Keşfet</div>
          <div className="titles">Top 100</div>
        </div>
      </div>
      <div className="search">
        <div className="search-bar">
          <div className="search-bar-color">
            <div className="">
              <div className="Yazılar">
                <div className="Welcome">Hoş Geldiniz</div>
                <div className="Under Welcome"></div>
                Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.{" "}
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
          <div className="input"></div>
        </div>
      </div>
    </div>
  );
}
export default Mainpage;
