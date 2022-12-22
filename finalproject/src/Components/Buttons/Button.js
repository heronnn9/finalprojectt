import React from "react";
const Button = () => {
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
