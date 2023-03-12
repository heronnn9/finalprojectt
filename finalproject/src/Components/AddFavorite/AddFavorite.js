import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AddFavorite.css";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
const AddFavorite = () => {
  const [click, setClick] = useState(false);
  return (
    <button onClick={() => setClick(true)} className="favorite-button fa fa-1x">
      <FontAwesomeIcon icon={faHeart} style={click ? { color: "red" } : {}} />
    </button>
  );
};
export default AddFavorite;
