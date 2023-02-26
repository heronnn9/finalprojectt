import { useSearchParams } from "react-router-dom";
const Categories = (props) => {
  const [, setQuery] = useSearchParams();

  return (
    <option key={props.category.Id} value={props.category.Id}>
      {props.category.Name}
    </option>
  );
};
export default Categories;
