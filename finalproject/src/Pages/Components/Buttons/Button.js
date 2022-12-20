import React from "react";
import { useSearchParams } from "react-router-dom";

const Button = () => {
  const [query, setQuery] = useSearchParams();
  return (
    <button
      onClick={() => {
        setQuery({
          genreId: query.get("genreId") ?? "28",
          pageNumber: "1",
        });
      }}
    >
      Button
    </button>
  );
};
export default Button;
