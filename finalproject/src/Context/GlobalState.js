import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  favoritelist: localStorage.getItem("favoritelist")
    ? JSON.parse(localStorage.getItem("favoritelist"))
    : [],
  favorited: localStorage.getItem("favorited")
    ? JSON.parse(localStorage.getItem("favorited"))
    : [],
};
export const GlobalContext = createContext(initialState);

//provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favoritelist", JSON.stringify(state.favoritelist));
    localStorage.setItem("favorited", JSON.stringify(state.favorited));
  }, [state]);

  //actions
  const addMovieToFavoriteList = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_FAVORITELIST", payload: movie });
  };
  const removeMovieFromFavoriteList = (Id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_FAVORITELIST", payload: Id });
  };
  return (
    <GlobalContext.Provider
      value={{
        favoritelist: state.favoritelist,
        favorited: state.favorited,
        addMovieToFavoriteList,
        removeMovieFromFavoriteList,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
