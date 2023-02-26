import { useSearchParams } from "react-router-dom";
import "./Categories.css";
const Categories = (props) => {
  const [, setQuery] = useSearchParams();

  return (
    <li style={{ backgroundColor: "red" }}>{props.category.Name}</li>
    // <div>
    //   <div className="category-css">
    //     <button
    //       className="category-name"
    //       onClick={() => {
    //         setQuery({
    //           GenreIds: props.category.Id,
    //         });
    //       }}
    //     >
    //       {props.category.Name}
    //     </button>
    //   </div>
    // </div>
  );
};
export default Categories;
