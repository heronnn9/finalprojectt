import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";
const Search = (props) => {
  return (
    <div className="Bg">
      <div className="Search-Input">
        <input
          onChange={(event) => props.setSearchValue(event.target.value)}
          value={props.value}
          className="Search"
          type="text"
          placeholder="type to search"
        />
      </div>
    </div>
  );
};

export default Search;
