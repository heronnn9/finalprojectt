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
          placeholder="Find Movie press the search..."
        />
      </div>
    </div>
  );
};

export default Search;
