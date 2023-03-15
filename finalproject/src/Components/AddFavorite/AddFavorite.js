import { useState, useContext } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AddFavorite.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const AddFavorite = (props) => {
  const { addMovieToFavoriteList } = useContext(GlobalContext);
  const [click, setClick] = useState(false);
  return (
    // <button onClick={() => setClick(true)} className="favorite-button fa fa-1x">
    //   <FontAwesomeIcon icon={faHeart} style={click ? { color: "red" } : {}} />
    // </button>
    <button
      onClick={() => addMovieToFavoriteList(props.movie)}
      className="favorite-button fa fa-1x"
    >
      <FontAwesomeIcon icon={faHeart} />
    </button>
  );
};
export default AddFavorite;
