import React from "react";
import "./Categories.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
function Categories() {
  return (
    <div>
      <div className="category-css">
        <div className="arrow">
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </div>
        <h3 className="category-name">Selam</h3>
      </div>
    </div>
  );
}
export default Categories;
