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
