import { useSearchParams } from "react-router-dom";
import "./Categories.css";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Categories = (props) => {
  const [query, setQuery] = useSearchParams();

  return (
    <div>
      <div className="category-css">
        <div className="arrow">
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </div>
        <button
          className="category-name"
          onClick={() => {
            setQuery({
              genreId: props.category.Id,
            });
          }}
        >
          {props.category.Name}
        </button>
      </div>
    </div>
  );
};
export default Categories;
